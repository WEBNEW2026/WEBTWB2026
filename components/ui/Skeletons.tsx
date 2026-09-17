import React from 'react';

export function VillaCardSkeleton() {
    return (
        <div className="animate-pulse">
            {/* Image skeleton */}
            <div className="aspect-[4/3] bg-gray-200 rounded-md mb-4" />

            {/* Title skeleton */}
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />

            {/* Tagline skeleton */}
            <div className="h-3 bg-gray-200 rounded w-full mb-3" />

            {/* Price skeleton */}
            <div className="flex items-baseline gap-1 mb-2">
                <div className="h-3 bg-gray-200 rounded w-12" />
                <div className="h-4 bg-gray-200 rounded w-24" />
                <div className="h-3 bg-gray-200 rounded w-12" />
            </div>

            {/* Rating skeleton */}
            <div className="flex items-center gap-1">
                <div className="h-3 bg-gray-200 rounded w-20" />
            </div>
        </div>
    );
}

export function ImageGallerySkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
            {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="aspect-[4/3] bg-gray-200 rounded-lg" />
            ))}
        </div>
    );
}

export function PageSkeleton() {
    return (
        <div className="min-h-screen bg-white pt-20 animate-pulse">
            <div className="container mx-auto px-4 max-w-7xl py-12">
                <div className="h-12 bg-gray-200 rounded w-1/3 mb-8" />
                <div className="h-6 bg-gray-200 rounded w-2/3 mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <div key={idx} className="h-64 bg-gray-200 rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    );
}
