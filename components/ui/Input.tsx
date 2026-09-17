import React, { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    error?: string;
}

export function Input({ id, label, error, className = '', ...props }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(e.target.value.length > 0);
        if (props.onChange) {
            props.onChange(e);
        }
    };

    return (
        <div className={`relative ${className}`}>
            <input
                id={id}
                {...props}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder=" "
                className={`
          peer w-full h-14
          border rounded-sm
          px-3 pt-6 pb-2
          text-base
          focus:outline-none focus:border-2
          transition-all duration-200
          ${error
                        ? 'border-error focus:border-error'
                        : 'border-gray-400 focus:border-gray-900'
                    }
        `}
            />
            <label
                htmlFor={id}
                className={`
          absolute left-3 transition-all duration-200 pointer-events-none
          ${isFocused || hasValue || props.value
                        ? 'top-2 text-xs'
                        : 'top-4 text-base'
                    }
          ${error ? 'text-error' : 'text-gray-600'}
        `}
            >
                {label}
            </label>
            {error && (
                <p className="mt-1 text-sm text-error">{error}</p>
            )}
        </div>
    );
}
