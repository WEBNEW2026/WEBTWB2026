import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Amenity {
    icon: LucideIcon;
    title: string;
    description?: string;
}

export interface AmenitiesListProps {
    amenities: Amenity[];
    columns?: 1 | 2 | 3;
}

export function AmenitiesList({ amenities, columns = 3 }: AmenitiesListProps) {
    const gridClasses = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    };

    return (
        <div className={`grid ${gridClasses[columns]} gap-6`}>
            {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all group"
                    >
                        <div className="flex-shrink-0 w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center group-hover:bg-forest group-hover:scale-110 transition-all">
                            <Icon size={24} className="text-forest group-hover:text-white transition-colors" />
                        </div>

                        <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">{amenity.title}</h4>
                            {amenity.description && (
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {amenity.description}
                                </p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
