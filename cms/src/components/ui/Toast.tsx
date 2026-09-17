import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
    id: string;
    message: string;
    type: ToastType;
    onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ id, message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(id);
        }, 5000);

        return () => clearTimeout(timer);
    }, [id, onClose]);

    const bgColors = {
        success: 'bg-green-50 border-green-200',
        error: 'bg-red-50 border-red-200',
        info: 'bg-blue-50 border-blue-200'
    };

    const textColors = {
        success: 'text-green-800',
        error: 'text-red-800',
        info: 'text-blue-800'
    };

    const icons = {
        success: <CheckCircle className="w-5 h-5 text-green-500" />,
        error: <AlertCircle className="w-5 h-5 text-red-500" />,
        info: <Info className="w-5 h-5 text-blue-500" />
    };

    return (
        <div className={`flex items-center w-full max-w-sm p-4 mb-4 rounded-lg shadow border ${bgColors[type]} transform transition-all duration-300 ease-in-out`}>
            <div className="flex-shrink-0">
                {icons[type]}
            </div>
            <div className={`ml-3 text-sm font-medium ${textColors[type]}`}>
                {message}
            </div>
            <button
                onClick={() => onClose(id)}
                className={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 ${textColors[type]} hover:bg-opacity-20 hover:bg-gray-500`}
            >
                <X className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Toast;
