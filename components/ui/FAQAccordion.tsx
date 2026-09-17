import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQAccordionProps {
    items: FAQItem[];
    topic?: string;
}

export function FAQAccordion({ items, topic }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {topic && (
                <h3 className="font-bold text-sm uppercase tracking-wider text-forest mb-4">
                    {topic}
                </h3>
            )}

            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:border-forest transition-colors"
                >
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-semibold text-gray-900 pr-4">
                            {item.question}
                        </span>
                        <ChevronDown
                            size={20}
                            className={`text-forest flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                }`}
                        />
                    </button>

                    <div
                        className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
