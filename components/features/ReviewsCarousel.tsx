import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
    id: string;
    author: string;
    avatar: string;
    rating: number;
    date: string;
    text: string;
    location: string;
}

interface ReviewsCarouselProps {
    reviews: Review[];
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: false,
        slidesToScroll: 1,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <Star size={24} className="fill-current text-gray-900" />
                    <h2 className="text-2xl font-semibold">Guest reviews</h2>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-2">
                    <button
                        onClick={scrollPrev}
                        className="p-2 border border-gray-300 rounded-full hover:border-gray-900 transition-colors disabled:opacity-30"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="p-2 border border-gray-300 rounded-full hover:border-gray-900 transition-colors disabled:opacity-30"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                        >
                            <div className="border border-gray-200 rounded-lg p-6 h-full">
                                {/* Author Info */}
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={review.avatar}
                                        alt={review.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{review.author}</h4>
                                        <p className="text-sm text-gray-600">{review.location}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 mb-3">
                                    {Array.from({ length: 5 }).map((_, idx) => (
                                        <Star
                                            key={idx}
                                            size={14}
                                            className={idx < review.rating ? 'fill-current text-gray-900' : 'text-gray-300'}
                                        />
                                    ))}
                                    <span className="text-sm text-gray-600 ml-2">{review.date}</span>
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 leading-relaxed line-clamp-4">
                                    {review.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
