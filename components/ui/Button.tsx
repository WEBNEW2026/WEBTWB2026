import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'text';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    id?: string;
}

export function Button({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles =
        'font-medium rounded-sm transition-all duration-200 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';

    const variants: Record<string, string> = {
        primary: 'bg-forest text-white hover:bg-forest-dark hover:scale-[1.02] active:scale-[0.98]',
        secondary: 'bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
        ghost: 'bg-transparent border border-gray-400 text-gray-900 hover:border-gray-900',
        text: 'bg-transparent text-gray-900 hover:underline underline-offset-4',
    };

    const sizes: Record<string, string> = {
        sm: 'px-4 py-2 text-sm h-9',
        md: 'px-6 py-3 text-base h-12',
        lg: 'px-8 py-4 text-lg h-14',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
