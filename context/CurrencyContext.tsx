import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export interface CurrencyInfo {
    code: string;
    symbol: string;
    name: string;
    rate: number; // multiplier from IDR: [Harga Villa IDR] * rate
    locale: string;
}

// Fallback rates jika Frankfurter API tidak terjangkau (Update: 29 Sept 2026 - kurs ~Rp18.004/USD)
export const FALLBACK_CURRENCIES: CurrencyInfo[] = [
    { code: 'USD', symbol: '$', name: 'US Dollar', rate: 0.00005554, locale: 'en-US' },    // ~Rp18,004/USD
    { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', rate: 1, locale: 'id-ID' },
    { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.00004960, locale: 'de-DE' },          // ~Rp20,162/EUR
    { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', rate: 0.00007180, locale: 'en-SG' }, // ~Rp13,927/SGD
    { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', rate: 0.00039200, locale: 'zh-CN' },  // ~Rp2,551/CNY
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 0.00830000, locale: 'ja-JP' },  // ~Rp120.5/JPY
    { code: 'KRW', symbol: '₩', name: 'Korean Won', rate: 0.07390000, locale: 'ko-KR' },   // ~Rp13.5/KRW
    { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', rate: 0.00052500, locale: 'nb-NO' }, // ~Rp1,905/NOK
];

export const CURRENCIES: CurrencyInfo[] = FALLBACK_CURRENCIES;

// Cache & interval konversi kurs: Otomasi per 5 jam
const CACHE_KEY = 'twb_currency_rates_cache';
const AUTO_REFRESH_INTERVAL_MS = 5 * 60 * 60 * 1000; // 5 Jam (18.000.000 ms)

interface CachedCurrencyData {
    rates: Record<string, number>;
    date: string;
    timestamp: number;
}

interface CurrencyContextValue {
    currency: CurrencyInfo;
    currencies: CurrencyInfo[];
    isUsingFallback: boolean;
    lastUpdated: string | null;
    nextUpdateInMs?: number;
    setCurrencyCode: (code: string) => void;
    formatPrice: (amountIDR: number) => string;
}

const DEFAULT_USD = CURRENCIES[0];

const CurrencyContext = createContext<CurrencyContextValue>({
    currency: DEFAULT_USD,
    currencies: CURRENCIES,
    isUsingFallback: false,
    lastUpdated: null,
    setCurrencyCode: () => {},
    formatPrice: (n) => `$${Math.round(n * 0.00005582).toLocaleString('en-US')}`,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const { i18n } = useTranslation();
    const [currencyList, setCurrencyList] = useState<CurrencyInfo[]>(FALLBACK_CURRENCIES);
    const [isUsingFallback, setIsUsingFallback] = useState<boolean>(false);
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);

    const [currencyCode, setCurrencyCodeState] = useState<string>(() => {
        try {
            const saved = localStorage.getItem('twb_selected_currency');
            if (saved) return saved;
        } catch { }
        return 'USD';
    });

    // Otomasi kurs per 5 jam dari Frankfurter API (https://frankfurter.dev)
    useEffect(() => {
        let isMounted = true;

        const applyRates = (ratesMap: Record<string, number>, date: string, fromFallback = false) => {
            if (!isMounted) return;
            setCurrencyList((prev) =>
                prev.map((c) => {
                    if (c.code === 'IDR') return { ...c, rate: 1 };
                    const rate = ratesMap[c.code];
                    if (rate && typeof rate === 'number') {
                        return { ...c, rate };
                    }
                    return c;
                })
            );
            setIsUsingFallback(fromFallback);
            setLastUpdated(date);
        };

        const fetchLiveRates = async (force = false) => {
            const now = Date.now();

            // 1. Periksa cache lokal — hapus otomatis jika cache > 5 jam (expired)
            if (!force) {
                try {
                    const cachedRaw = localStorage.getItem(CACHE_KEY);
                    if (cachedRaw) {
                        const cached: CachedCurrencyData = JSON.parse(cachedRaw);
                        const ageMs = now - cached.timestamp;
                        const ageMin = Math.round(ageMs / 60000);
                        if (ageMs < AUTO_REFRESH_INTERVAL_MS) {
                            const remainingMin = Math.round((AUTO_REFRESH_INTERVAL_MS - ageMs) / 60000);
                            console.log(`[Currency] ✅ Cache valid (usia: ${ageMin} menit, update berikutnya dalam ${remainingMin} menit), USD rate: ${cached.rates.USD?.toFixed(8)}`);
                            applyRates(cached.rates, cached.date, false);
                            return;
                        } else {
                            // Cache expired — hapus dan fetch ulang
                            console.log(`[Currency] ⏰ Cache expired (usia: ${ageMin} menit > 300 menit). Menghapus cache dan fetch ulang...`);
                            localStorage.removeItem(CACHE_KEY);
                        }
                    } else {
                        console.log('[Currency] 🔄 Tidak ada cache ditemukan. Fetch kurs dari API...');
                    }
                } catch (e) {
                    console.warn('[Currency] Gagal membaca cache kurs:', e);
                    localStorage.removeItem(CACHE_KEY);
                }
            }

            // 2. Ambil kurs real-time terbaru dari Frankfurter API
            try {
                console.log('[Currency] Otomasi 5 jam: Mengambil kurs terbaru dari Frankfurter API...');
                const res = await fetch('https://api.frankfurter.dev/v1/latest?base=EUR');
                if (!res.ok) throw new Error(`Frankfurter API response status: ${res.status}`);

                const data = await res.json();
                if (data && data.rates && data.rates.IDR) {
                    const idrPerEur = data.rates.IDR;
                    const newRatesMap: Record<string, number> = {
                        IDR: 1,
                        EUR: 1 / idrPerEur,
                    };

                    ['USD', 'SGD', 'CNY', 'JPY', 'KRW', 'NOK'].forEach((code) => {
                        const targetPerEur = data.rates[code];
                        if (targetPerEur && typeof targetPerEur === 'number') {
                            newRatesMap[code] = targetPerEur / idrPerEur;
                        }
                    });

                    const recordDate = data.date || new Date().toISOString().split('T')[0];

                    // Simpan ke cache localStorage untuk siklus 5 jam ke depan
                    try {
                        const cachePayload: CachedCurrencyData = {
                            rates: newRatesMap,
                            date: recordDate,
                            timestamp: Date.now(),
                        };
                        localStorage.setItem(CACHE_KEY, JSON.stringify(cachePayload));
                    } catch { }

                    applyRates(newRatesMap, recordDate, false);
                    console.log('[Currency] Berhasil memperbarui kurs (berlaku 5 jam ke depan):', newRatesMap);
                } else {
                    throw new Error('Format data kurs dari Frankfurter API tidak sesuai');
                }
            } catch (e) {
                console.warn('[Currency] Frankfurter API offline/error, menggunakan estimasi fallback:', e);

                // Gunakan cache kedaluwarsa jika ada sebagai cadangan terbaik
                try {
                    const cachedRaw = localStorage.getItem(CACHE_KEY);
                    if (cachedRaw) {
                        const cached: CachedCurrencyData = JSON.parse(cachedRaw);
                        applyRates(cached.rates, `${cached.date} (Cache)`, true);
                        return;
                    }
                } catch { }

                // Fallback default
                const fallbackMap = FALLBACK_CURRENCIES.reduce((acc, curr) => {
                    acc[curr.code] = curr.rate;
                    return acc;
                }, {} as Record<string, number>);

                applyRates(fallbackMap, new Date().toISOString().split('T')[0], true);
            }
        };

        // Panggil pertama kali saat komponen dimuat
        fetchLiveRates(false);

        // Pasang interval otomatis berjalan setiap 5 jam (18.000.000 ms)
        const intervalId = setInterval(() => {
            console.log('[Currency] Timer 5 jam terpenuhi: Menjalankan pembaruan otomatis...');
            fetchLiveRates(true);
        }, AUTO_REFRESH_INTERVAL_MS);

        // Periksa juga jika pengguna kembali membuka tab setelah 5 jam
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                try {
                    const cachedRaw = localStorage.getItem(CACHE_KEY);
                    if (cachedRaw) {
                        const cached: CachedCurrencyData = JSON.parse(cachedRaw);
                        if (Date.now() - cached.timestamp >= AUTO_REFRESH_INTERVAL_MS) {
                            console.log('[Currency] Tab aktif kembali & cache > 5 jam: Memperbarui kurs...');
                            fetchLiveRates(true);
                        }
                    }
                } catch { }
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // Sync initial currency
    useEffect(() => {
        const saved = localStorage.getItem('twb_selected_currency');
        if (!saved) {
            setCurrencyCodeState('USD');
        }
    }, [i18n.language]);

    const currency = currencyList.find(c => c.code === currencyCode) || currencyList[0];

    const setCurrencyCode = useCallback((code: string) => {
        setCurrencyCodeState(code);
        try {
            localStorage.setItem('twb_selected_currency', code);
        } catch { }
    }, []);

    const formatPrice = useCallback((amountIDR: number): string => {
        if (!amountIDR && amountIDR !== 0) return `${currency.symbol}0`;
        
        // 1. Jika mata uang IDR: gunakan harga patokan IDR asli persis (format Rupiah)
        if (currency.code === 'IDR') {
            return `${currency.symbol} ${Math.round(amountIDR).toLocaleString('id-ID')}`;
        }
        
        // 2. Rumus Konversi: [Harga Villa IDR] x [Rate Mata Uang Asing dari API]
        const converted = amountIDR * currency.rate;
        
        // 3. Aturan Pembulatan Profesional:
        // - Untuk JPY dan KRW: Bulatkan langsung ke angka bulat terdekat (tanpa desimal)
        if (currency.code === 'JPY' || currency.code === 'KRW') {
            return `${currency.symbol}${Math.round(converted).toLocaleString(currency.locale)}`;
        }
        
        // - Untuk USD, EUR, NOK, SGD, CNY:
        // Untuk nominal villa yang besar (>= 100), bulatkan ke bilangan bulat terdekat agar terlihat bersih.
        // Untuk nominal kecil (< 100), sediakan hingga 2 angka desimal.
        const isLargeAmount = Math.abs(converted) >= 100;
        if (isLargeAmount) {
            return `${currency.symbol}${Math.round(converted).toLocaleString(currency.locale)}`;
        } else {
            return `${currency.symbol}${converted.toLocaleString(currency.locale, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            })}`;
        }
    }, [currency]);

    return (
        <CurrencyContext.Provider value={{
            currency,
            currencies: currencyList,
            isUsingFallback,
            lastUpdated,
            setCurrencyCode,
            formatPrice
        }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    return useContext(CurrencyContext);
}


