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

// Fallback rates jika API tidak dapat dihubungi (Update: 29 Sept 2026 - kurs ~Rp18.004/USD)
export const FALLBACK_RATES: ExchangeRates['rates'] = {
    USD: 0.00005554,   // ~Rp18,004/USD
    EUR: 0.00004960,   // ~Rp20,162/EUR
    JPY: 0.00830000,   // ~Rp120.5/JPY
    NOK: 0.00052500,   // ~Rp1,905/NOK
    SGD: 0.00007180,   // ~Rp13,927/SGD
    CNY: 0.00039200,   // ~Rp2,551/CNY
    KRW: 0.07390000,   // ~Rp13.5/KRW
};

/**
 * Fetch exchange rates from Frankfurter API (https://frankfurter.dev)
 * Falls back to cached rates or fallback rates if API fails
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

    // Fetch from Frankfurter API
    try {
        const response = await fetch('https://api.frankfurter.dev/v1/latest?base=EUR');
        if (!response.ok) throw new Error(`Frankfurter API error: ${response.status}`);

        const data = await response.json();
        const idrPerEur = data.rates?.IDR || 20427.22;

        const calculatedRates: ExchangeRates['rates'] = {
            USD: (data.rates?.USD || 1.1403) / idrPerEur,
            EUR: 1 / idrPerEur,
            JPY: (data.rates?.JPY || 179.7) / idrPerEur,
            NOK: (data.rates?.NOK || 10.84) / idrPerEur,
            SGD: (data.rates?.SGD || 1.4563) / idrPerEur,
            CNY: (data.rates?.CNY || 7.6551) / idrPerEur,
            KRW: (data.rates?.KRW || 1545.16) / idrPerEur,
        };

        const result: ExchangeRates = {
            rates: calculatedRates,
            base: 'IDR',
            date: data.date || new Date().toISOString().split('T')[0],
            timestamp: Date.now(),
            isFallback: false,
        };

        // Cache the rates
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(result));
        } catch { }

        return result;
    } catch (e) {
        console.warn('[Currency] Frankfurter API fetch error, using fallback:', e);

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

