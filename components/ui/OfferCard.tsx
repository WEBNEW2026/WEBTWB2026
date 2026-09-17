import React from 'react';
import { Calendar, Tag, ArrowRight, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Offer } from '../../types';

export interface OfferCardProps {
    offer: Offer;
    onBookClick: (offerId: string) => void;
}

export const OfferCard: React.FC<OfferCardProps> = ({ offer, onBookClick }) => {
    const { i18n } = useTranslation();
    const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de' | 'fr' | 'ja' | 'ko';

    const getContent = (content: any) => {
        if (typeof content === 'string') return content;
        return content[lang] || content['en'] || content['id'] || '';
    };

    const handleShare = async () => {
        const shareData = {
            title: `${getContent(offer.title)} - Bougenville`,
            text: getContent(offer.description),
            url: window.location.href + `#offer-${offer.id}`
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href + `#offer-${offer.id}`);
            }
        } else {
            navigator.clipboard.writeText(window.location.href + `#offer-${offer.id}`);
        }
    };

    return (
        <div
            id={`offer-${offer.id}`}
            className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={offer.image}
                    alt={getContent(offer.title)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {offer.discount && (
                    <div className="absolute top-4 right-4 bg-terracotta text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        {offer.discount}
                    </div>
                )}

                {/* Share Button */}
                <button
                    onClick={handleShare}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    title="Share offer"
                >
                    <Share2 size={18} className="text-forest-dark" />
                </button>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                    {getContent(offer.title)}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                    {getContent(offer.description)}
                </p>

                {/* Validity */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar size={16} />
                    <span>Valid: {offer.validFrom} - {offer.validTo}</span>
                </div>

                {/* Price */}
                {offer.price && (
                    <div className="flex items-center gap-2 mb-4">
                        <Tag size={18} className="text-forest" />
                        <span className="text-2xl font-bold text-forest">{offer.price}</span>
                    </div>
                )}

                {/* Inclusions */}
                <div className="mb-6">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-3">Inclusions</h4>
                    <ul className="space-y-2">
                        {offer.inclusions.slice(0, 3).map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-forest rounded-full mt-1.5 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                        {offer.inclusions.length > 3 && (
                            <li className="text-sm text-gray-500 italic">
                                +{offer.inclusions.length - 3} more...
                            </li>
                        )}
                    </ul>
                </div>

                {/* CTA */}
                <button
                    onClick={() => onBookClick(offer.id)}
                    className="w-full bg-forest-dark text-white py-3 font-bold uppercase tracking-wider text-sm hover:bg-forest transition-colors flex items-center justify-center gap-2 group"
                >
                    Book This Offer
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
