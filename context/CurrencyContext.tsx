import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export interface CurrencyInfo {
    code: string;
    symbol: string;
    name: string;
    rate: number; // multiplier from IDR: [Harga Villa IDR] * rate
    locale: string;
}

// Fallback rates jika API tidak terjangkau (Update terbaru: Oktober 2026 - kurs ~Rp17.915/USD)
export const FALLBACK_CURRENCIES: CurrencyInfo[] = [
    { code: 'USD', symbol: '$', name: 'US Dollar', rate: 0.00005582, locale: 'en-US' },       // ~Rp17,915/USD
    { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', rate: 1, locale: 'id-ID' },
    { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.00004962, locale: 'de-DE' },             // ~Rp20,154/EUR
    { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', rate: 0.00007142, locale: 'en-SG' },    // ~Rp14,002/SGD
    { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', rate: 0.00037456, locale: 'zh-CN' },     // ~Rp2,670/CNY
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 0.00880434, locale: 'ja-JP' },     // ~Rp113.6/JPY
    { code: 'KRW', symbol: '₩', name: 'Korean Won', rate: 0.07505459, locale: 'ko-KR' },      // ~Rp13.3/KRW
    { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', rate: 0.00053697, locale: 'nb-NO' },    // ~Rp1,862/NOK
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

    // Otomasi kurs per 5 jam dengan Multi-Provider API & Failover
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

            // 1. Periksa cache lokal — jika masih < 5 jam dan tidak force, gunakan cache
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
                            console.log(`[Currency] ⏰ Cache expired (usia: ${ageMin} menit >= 300 menit). Memperbarui kurs dari API...`);
                            localStorage.removeItem(CACHE_KEY);
                        }
                    } else {
                        console.log('[Currency] 🔄 Belum ada cache kurs. Mengambil dari API...');
                    }
                } catch (e) {
                    console.warn('[Currency] Gagal membaca cache kurs:', e);
                    localStorage.removeItem(CACHE_KEY);
                }
            }

            // 2. Fetch dari multi-provider API dengan auto-failover
            let fetchedData: { rates: Record<string, number>; date: string } | null = null;

            // Provider 1: Open ExchangeRate API (Live real-time, selalu update harian/intraday, tanpa API key)
            try {
                console.log('[Currency] Mencoba Provider 1: Open ExchangeRate API...');
                const res = await fetch('https://open.er-api.com/v6/latest/USD', { cache: 'no-store' });
                if (res.ok) {
                    const data = await res.json();
                    if (data?.result === 'success' && data.rates?.IDR) {
                        const idrPerUsd = data.rates.IDR;
                        fetchedData = {
                            rates: {
                                IDR: 1,
                                USD: 1 / idrPerUsd,
                                EUR: (data.rates.EUR || 0.88889) / idrPerUsd,
                                SGD: (data.rates.SGD || 1.2794) / idrPerUsd,
                                CNY: (data.rates.CNY || 6.7104) / idrPerUsd,
                                JPY: (data.rates.JPY || 157.73) / idrPerUsd,
                                KRW: (data.rates.KRW || 1344.6) / idrPerUsd,
                                NOK: (data.rates.NOK || 9.6199) / idrPerUsd,
                            },
                            date: data.time_last_update_utc ? new Date(data.time_last_update_utc).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
                        };
                        console.log('[Currency] ✅ Sukses update kurs dari Open ExchangeRate API:', fetchedData.rates);
                    }
                }
            } catch (err1) {
                console.warn('[Currency] Provider 1 gagal, beralih ke Provider 2 (Frankfurter):', err1);
            }

            // Provider 2: Frankfurter API (ECB European Central Bank)
            if (!fetchedData) {
                try {
                    console.log('[Currency] Mencoba Provider 2: Frankfurter API...');
                    let res = await fetch('https://api.frankfurter.app/latest?base=EUR', { cache: 'no-store' });
                    if (!res.ok) {
                        res = await fetch('https://api.frankfurter.dev/v1/latest?base=EUR', { cache: 'no-store' });
                    }
                    if (res.ok) {
                        const data = await res.json();
                        if (data?.rates?.IDR) {
                            const idrPerEur = data.rates.IDR;
                            fetchedData = {
                                rates: {
                                    IDR: 1,
                                    EUR: 1 / idrPerEur,
                                    USD: (data.rates.USD || 1.1225) / idrPerEur,
                                    SGD: (data.rates.SGD || 1.4366) / idrPerEur,
                                    CNY: (data.rates.CNY || 7.5259) / idrPerEur,
                                    JPY: (data.rates.JPY || 176.99) / idrPerEur,
                                    KRW: (data.rates.KRW || 1513.44) / idrPerEur,
                                    NOK: (data.rates.NOK || 10.8315) / idrPerEur,
                                },
                                date: data.date || new Date().toISOString().split('T')[0]
                            };
                            console.log('[Currency] ✅ Sukses update kurs dari Frankfurter API:', fetchedData.rates);
                        }
                    }
                } catch (err2) {
                    console.warn('[Currency] Provider 2 gagal, beralih ke Provider 3 (ExchangeRate-API v4):', err2);
                }
            }

            // Provider 3: ExchangeRate-API v4
            if (!fetchedData) {
                try {
                    console.log('[Currency] Mencoba Provider 3: ExchangeRate-API v4...');
                    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD', { cache: 'no-store' });
                    if (res.ok) {
                        const data = await res.json();
                        if (data?.rates?.IDR) {
                            const idrPerUsd = data.rates.IDR;
                            fetchedData = {
                                rates: {
                                    IDR: 1,
                                    USD: 1 / idrPerUsd,
                                    EUR: (data.rates.EUR || 0.889) / idrPerUsd,
                                    SGD: (data.rates.SGD || 1.28) / idrPerUsd,
                                    CNY: (data.rates.CNY || 6.71) / idrPerUsd,
                                    JPY: (data.rates.JPY || 157.73) / idrPerUsd,
                                    KRW: (data.rates.KRW || 1344.61) / idrPerUsd,
                                    NOK: (data.rates.NOK || 9.62) / idrPerUsd,
                                },
                                date: data.date || new Date().toISOString().split('T')[0]
                            };
                            console.log('[Currency] ✅ Sukses update kurs dari ExchangeRate-API v4:', fetchedData.rates);
                        }
                    }
                } catch (err3) {
                    console.warn('[Currency] Provider 3 gagal:', err3);
                }
            }

            // 3. Simpan dan terapkan kurs yang berhasil diambil
            if (fetchedData) {
                try {
                    const cachePayload: CachedCurrencyData = {
                        rates: fetchedData.rates,
                        date: fetchedData.date,
                        timestamp: Date.now(),
                    };
                    localStorage.setItem(CACHE_KEY, JSON.stringify(cachePayload));
                } catch { }

                applyRates(fetchedData.rates, fetchedData.date, false);
                console.log(`[Currency] 🕒 Kurs berhasil diperbarui dan disimpan dalam cache (berlaku 5 jam ke depan sampai ${new Date(Date.now() + AUTO_REFRESH_INTERVAL_MS).toLocaleTimeString()})`);
            } else {
                console.warn('[Currency] Semua provider API offline, menggunakan fallback cache / default');

                // Gunakan cache kedaluwarsa jika ada sebagai cadangan terbaik
                try {
                    const cachedRaw = localStorage.getItem(CACHE_KEY);
                    if (cachedRaw) {
                        const cached: CachedCurrencyData = JSON.parse(cachedRaw);
                        applyRates(cached.rates, `${cached.date} (Cache)`, true);
                        return;
                    }
                } catch { }

                // Fallback default jika belum pernah ada cache sama sekali
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


