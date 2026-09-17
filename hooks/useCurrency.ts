/**
 * useCurrency Hook (v2)
 * Delegates to the global CurrencyContext for manual currency selection.
 * Language change → auto currency sync is handled in App.tsx via CurrencyProvider.
 */

import { useCurrency as useCurrencyContext } from '../context/CurrencyContext';

export interface UseCurrencyReturn {
    /** Format IDR amount to currently selected currency */
    format: (amountIDR: number) => string;
    /** Current currency info */
    currency: { code: string; symbol: string; name: string };
    /** Loading state (always false now — uses static rates) */
    loading: boolean;
    /** Error state */
    error: string | null;
}

export function useCurrency(): UseCurrencyReturn {
    const { currency, formatPrice } = useCurrencyContext();

    return {
        format: formatPrice,
        currency: {
            code: currency.code,
            symbol: currency.symbol,
            name: currency.name,
        },
        loading: false,
        error: null,
    };
}

export default useCurrency;
