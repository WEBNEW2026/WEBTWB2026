import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useCurrency, CURRENCIES } from '../../context/CurrencyContext';

interface CurrencySwitcherProps {
    isScrolled?: boolean;
    isHomePage?: boolean;
}

export function CurrencySwitcher({
    isScrolled = false,
    isHomePage = false,
}: CurrencySwitcherProps) {
    const { currency, setCurrencyCode } = useCurrency();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isDark = !isScrolled && isHomePage;

    // Compact single-line button styles
    const btnClass = [
        'flex items-center gap-1 px-2 py-1 rounded transition-all duration-200',
        isDark
            ? 'border border-white/20 text-white/80 hover:bg-white/10'
            : 'border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900',
    ].join(' ');

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Compact button: just symbol + code + tiny chevron */}
            <button
                id="btn-currency-switcher"
                onClick={() => setIsOpen(!isOpen)}
                className={btnClass}
                aria-label="Change currency"
                aria-expanded={isOpen}
            >
                <span className="text-[11px] font-semibold tracking-wide leading-none">
                    {currency.symbol}&nbsp;{currency.code}
                </span>
                <ChevronDown
                    size={11}
                    className={`flex-shrink-0 opacity-60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown — opens downward, aligned right */}
            {isOpen && (
                <div className="absolute right-0 mt-1.5 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                    <p className="px-3 pt-2 pb-1 text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                        Currency
                    </p>
                    {CURRENCIES.map((c) => (
                        <button
                            key={c.code}
                            id={`btn-currency-${c.code.toLowerCase()}`}
                            onClick={() => {
                                setCurrencyCode(c.code);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors ${
                                c.code === currency.code
                                    ? 'bg-forest-dark/5 text-forest-dark font-semibold'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-4 text-center text-sm">{c.symbol}</span>
                                <div className="text-left">
                                    <span className="font-medium">{c.code}</span>
                                    <span className="text-gray-400 ml-1.5 text-[10px]">{c.name}</span>
                                </div>
                            </div>
                            {c.code === currency.code && (
                                <Check size={12} className="text-forest-dark flex-shrink-0" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
