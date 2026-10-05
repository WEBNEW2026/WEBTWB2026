/**
 * Currency Conversion Utilities
 * Converts IDR to target foreign currencies using real-time rates from Frankfurter API (https://frankfurter.dev)
 */

export const CURRENCY_MAP: Record<string, { code: string; symbol: string; locale: string }> = {
    id: { code: 'IDR', symbol: 'Rp', locale: 'id-ID' },
    en: { code: 'USD', symbol: '$', locale: 'en-US' },
    de: { code: 'EUR', symbol: '€', locale: 'de-DE' },
    zh: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
    ja: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
    ko: { code: 'KRW', symbol: '₩', locale: 'ko-KR' },
    nb: { code: 'NOK', symbol: 'kr', locale: 'nb-NO' },
    sg: { code: 'SGD', symbol: 'S$', locale: 'en-SG' },
};

// Cache key for localStorage: Otomasi per 5 jam
const CACHE_KEY = 'twb_exchange_rates';
const CACHE_EXPIRY_MS = 5 * 60 * 60 * 1000; // Otomasi per 5 jam (18.000.000 ms)

export interface ExchangeRates {
    rates: {
        USD: number;
        EUR: number;
        JPY: number;
        NOK: number;
        SGD: number;
        CNY: number;
        KRW: number;
        [key: string]: number;
    };
    base: string;
    date: string;
    timestamp: number;
    isFallback?: boolean;
}

// Fallback rates jika API tidak dapat dihubungi (Update terbaru: Oktober 2026 - kurs ~Rp17.915/USD)
export const FALLBACK_RATES: ExchangeRates['rates'] = {
    USD: 0.00005582,   // ~Rp17,915/USD
    EUR: 0.00004962,   // ~Rp20,154/EUR
    JPY: 0.00880434,   // ~Rp113.6/JPY
    NOK: 0.00053697,   // ~Rp1,862/NOK
    SGD: 0.00007142,   // ~Rp14,002/SGD
    CNY: 0.00037456,   // ~Rp2,670/CNY
    KRW: 0.07505459,   // ~Rp13.3/KRW
};

/**
 * Fetch exchange rates with multi-provider failover
 * (Open ExchangeRate API -> Frankfurter -> ExchangeRate-API v4)
 */
export async function fetchExchangeRates(): Promise<ExchangeRates> {
    // Check cache first
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            const parsed: ExchangeRates = JSON.parse(cached);
            const now = Date.now();
            if (now - parsed.timestamp < CACHE_EXPIRY_MS) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn('[Currency] Cache read error:', e);
    }

    // Provider 1: Open ExchangeRate API
    try {
        const res = await fetch('https://open.er-api.com/v6/latest/USD', { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            if (data?.result === 'success' && data.rates?.IDR) {
                const idrPerUsd = data.rates.IDR;
                const calculatedRates: ExchangeRates['rates'] = {
                    USD: 1 / idrPerUsd,
                    EUR: (data.rates.EUR || 0.88889) / idrPerUsd,
                    SGD: (data.rates.SGD || 1.2794) / idrPerUsd,
                    CNY: (data.rates.CNY || 6.7104) / idrPerUsd,
                    JPY: (data.rates.JPY || 157.73) / idrPerUsd,
                    KRW: (data.rates.KRW || 1344.6) / idrPerUsd,
                    NOK: (data.rates.NOK || 9.6199) / idrPerUsd,
                };
                const result: ExchangeRates = {
                    rates: calculatedRates,
                    base: 'IDR',
                    date: data.time_last_update_utc ? new Date(data.time_last_update_utc).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                    timestamp: Date.now(),
                    isFallback: false,
                };
                try {
                    localStorage.setItem(CACHE_KEY, JSON.stringify(result));
                } catch { }
                return result;
            }
        }
    } catch (e) {
        console.warn('[Currency] Provider 1 (Open ExchangeRate) fetch error, trying Frankfurter:', e);
    }

    // Provider 2: Frankfurter API
    try {
        let response = await fetch('https://api.frankfurter.app/latest?base=EUR', { cache: 'no-store' });
        if (!response.ok) {
            response = await fetch('https://api.frankfurter.dev/v1/latest?base=EUR', { cache: 'no-store' });
        }
        if (response.ok) {
            const data = await response.json();
            if (data?.rates?.IDR) {
                const idrPerEur = data.rates.IDR;
                const calculatedRates: ExchangeRates['rates'] = {
                    USD: (data.rates?.USD || 1.1225) / idrPerEur,
                    EUR: 1 / idrPerEur,
                    JPY: (data.rates?.JPY || 176.99) / idrPerEur,
                    NOK: (data.rates?.NOK || 10.8315) / idrPerEur,
                    SGD: (data.rates?.SGD || 1.4366) / idrPerEur,
                    CNY: (data.rates?.CNY || 7.5259) / idrPerEur,
                    KRW: (data.rates?.KRW || 1513.44) / idrPerEur,
                };

                const result: ExchangeRates = {
                    rates: calculatedRates,
                    base: 'IDR',
                    date: data.date || new Date().toISOString().split('T')[0],
                    timestamp: Date.now(),
                    isFallback: false,
                };

                try {
                    localStorage.setItem(CACHE_KEY, JSON.stringify(result));
                } catch { }

                return result;
            }
        }
    } catch (e) {
        console.warn('[Currency] Provider 2 (Frankfurter) fetch error, trying Provider 3:', e);
    }

    // Provider 3: ExchangeRate-API v4
    try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD', { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            if (data?.rates?.IDR) {
                const idrPerUsd = data.rates.IDR;
                const calculatedRates: ExchangeRates['rates'] = {
                    USD: 1 / idrPerUsd,
                    EUR: (data.rates.EUR || 0.889) / idrPerUsd,
                    SGD: (data.rates.SGD || 1.28) / idrPerUsd,
                    CNY: (data.rates.CNY || 6.71) / idrPerUsd,
                    JPY: (data.rates.JPY || 157.73) / idrPerUsd,
                    KRW: (data.rates.KRW || 1344.61) / idrPerUsd,
                    NOK: (data.rates.NOK || 9.62) / idrPerUsd,
                };
                const result: ExchangeRates = {
                    rates: calculatedRates,
                    base: 'IDR',
                    date: data.date || new Date().toISOString().split('T')[0],
                    timestamp: Date.now(),
                    isFallback: false,
                };
                try {
                    localStorage.setItem(CACHE_KEY, JSON.stringify(result));
                } catch { }
                return result;
            }
        }
    } catch (e) {
        console.warn('[Currency] Provider 3 fetch error, using fallback:', e);
    }

    // Try to use expired cache as fallback
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            return JSON.parse(cached);
        }
    } catch { }

    return {
        rates: FALLBACK_RATES,
        base: 'IDR',
        date: new Date().toISOString().split('T')[0],
        timestamp: Date.now(),
        isFallback: true,
    };
}

/**
 * Convert amount from IDR to target currency
 * Rumus: [Harga Villa IDR] x [Rate Mata Uang Asing dari API]
 */
export function convertFromIDR(
    amountIDR: number,
    targetCurrency: string,
    rates: ExchangeRates | null
): number {
    if (targetCurrency === 'IDR' || !rates) {
        return amountIDR;
    }

    const rate = rates.rates[targetCurrency] || FALLBACK_RATES[targetCurrency];
    if (!rate) return amountIDR;

    return amountIDR * rate;
}

/**
 * Format currency with proper locale, symbol, and professional rounding rules
 */
export function formatCurrency(
    amountIDR: number,
    targetCurrency: string,
    rates: ExchangeRates | null
): string {
    if (targetCurrency === 'IDR') {
        return `Rp ${Math.round(amountIDR).toLocaleString('id-ID')}`;
    }

    const converted = convertFromIDR(amountIDR, targetCurrency, rates);

    // JPY & KRW: Bulatkan langsung ke angka bulat terdekat (tanpa desimal)
    if (targetCurrency === 'JPY') {
        return `¥${Math.round(converted).toLocaleString('ja-JP')}`;
    }
    if (targetCurrency === 'KRW') {
        return `₩${Math.round(converted).toLocaleString('ko-KR')}`;
    }

    // USD, EUR, NOK, SGD, CNY
    const symbols: Record<string, string> = {
        USD: '$',
        EUR: '€',
        SGD: 'S$',
        CNY: '¥',
        NOK: 'kr',
    };
    const sym = symbols[targetCurrency] || targetCurrency + ' ';

    if (Math.abs(converted) >= 100) {
        return `${sym}${Math.round(converted).toLocaleString('en-US')}`;
    } else {
        return `${sym}${converted.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
    }
}

export function getCurrencyInfo(lang: string) {
    return CURRENCY_MAP[lang] || CURRENCY_MAP.id;
}

