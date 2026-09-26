import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export interface CurrencyInfo {
    code: string;
    symbol: string;
    name: string;
    rate: number; // multiplier from IDR
    locale: string;
}

// Kurs Dolar & mata uang dunia (Berdasarkan rate Wise / kurs tengah acuan)
// 1 USD = Rp 17.790 (Rp 10.000.000 = $562)
// Nilai rate menggunakan presisi tinggi (1 / kurs_idr) dan pembulatan Math.round agar selalu mendekati nominal IDR asli
export const CURRENCIES: CurrencyInfo[] = [
    { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1 / 17790, locale: 'en-US' },
    { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', rate: 1, locale: 'id-ID' },
    { code: 'EUR', symbol: '€', name: 'Euro', rate: 1 / 20340, locale: 'de-DE' },
    { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', rate: 1 / 13950, locale: 'en-SG' },
    { code: 'Yuan', symbol: '¥', name: 'Chinese Yuan', rate: 1 / 2654, locale: 'zh-CN' },
    { code: 'Yen', symbol: '¥', name: 'Japanese Yen', rate: 1 / 113.0, locale: 'ja-JP' },
    { code: 'WON', symbol: '₩', name: 'Korean Won', rate: 1 / 13.17, locale: 'ko-KR' },
    { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', rate: 1 / 1881, locale: 'nb-NO' },
];

// Map language code to default currency code
export const LANG_TO_CURRENCY: Record<string, string> = {
    id: 'USD',
    en: 'USD',
    zh: 'USD',
    de: 'USD',
    ja: 'USD',
    ko: 'USD',
    fr: 'USD',
};

interface CurrencyContextValue {
    currency: CurrencyInfo;
    currencies: CurrencyInfo[];
    setCurrencyCode: (code: string) => void;
    formatPrice: (amountIDR: number) => string;
}

const DEFAULT_USD = CURRENCIES[0];

const CurrencyContext = createContext<CurrencyContextValue>({
    currency: DEFAULT_USD,
    currencies: CURRENCIES,
    setCurrencyCode: () => {},
    formatPrice: (n) => `$${Math.round(n / 17790).toLocaleString('en-US')}`,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const { i18n } = useTranslation();
    const [currencyList, setCurrencyList] = useState<CurrencyInfo[]>(CURRENCIES);
    const [currencyCode, setCurrencyCodeState] = useState<string>(() => {
        try {
            const saved = localStorage.getItem('twb_selected_currency');
            if (saved) return saved;
        } catch { }
        return 'USD';
    });

    // Sinkronisasi kurs jika diperlukan, dengan baseline patokan kurs acuan Wise (1 USD = 17.790 IDR)
    useEffect(() => {
        const fetchLiveRates = async () => {
            try {
                const res = await fetch('https://open.er-api.com/v6/latest/USD');
                if (!res.ok) return;
                const data = await res.json();
                if (data && data.rates) {
                    // Gunakan patokan kurs transaksi riil (1 USD = Rp 17.790) untuk menjaga Rp 10.000.000 = $562
                    const wiseIdrPerUsd = 17790;
                    setCurrencyList((prev) =>
                        prev.map((c) => {
                            if (c.code === 'IDR') return c;
                            if (c.code === 'USD') return { ...c, rate: 1 / wiseIdrPerUsd };
                            const apiCode =
                                c.code === 'Yuan' ? 'CNY' :
                                c.code === 'Yen' ? 'JPY' :
                                c.code === 'WON' ? 'KRW' : c.code;
                            const rateAgainstUSD = data.rates[apiCode];
                            if (rateAgainstUSD && typeof rateAgainstUSD === 'number') {
                                return { ...c, rate: rateAgainstUSD / wiseIdrPerUsd };
                            }
                            return c;
                        })
                    );
                }
            } catch (e) {
                // Fallback otomatis menggunakan CURRENCIES statis acuan Wise
            }
        };

        fetchLiveRates();
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
        
        // Jika mata uang IDR: gunakan harga patokan IDR asli persis
        if (currency.code === 'IDR') {
            return `${currency.symbol} ${Math.round(amountIDR).toLocaleString('id-ID')}`;
        }
        
        // Semua mata uang selain IDR: patokan ke harga IDR asli,
        // Dibulatkan ke bilangan terdekat (Math.round) agar selalu paling mendekati nominal harga IDR
        const converted = Math.round(amountIDR * currency.rate);
        return `${currency.symbol}${converted.toLocaleString(currency.locale)}`;
    }, [currency]);

    return (
        <CurrencyContext.Provider value={{ currency, currencies: currencyList, setCurrencyCode, formatPrice }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    return useContext(CurrencyContext);
}

