/**
 * LoadingSkeleton Component
 *
 * Reusable skeleton loading placeholders for better perceived performance.
 * Provides visual feedback while content is loading.
 */

import React from 'react';

export const ListingCardSkeleton: React.FC = () => {
    return (
        <div className="animate-pulse">
            {/* Image skeleton */}
            <div className="w-full aspect-[5/4] bg-gray-200 rounded-xl mb-2"></div>

            {/* Title skeleton */}
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>

            {/* Distance skeleton */}
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>

            {/* Price skeleton */}
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
    );
};

export const CategoryRowSkeleton: React.FC = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12">
            {/* Category header skeleton */}
            <div className="flex items-center justify-between mb-4">
                <div className="h-6 bg-gray-200 rounded w-48 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            </div>

            {/* Cards row skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                    <ListingCardSkeleton key={i} />
                ))}
            </div>
        </div>
    );
};

export const PageLoadingSkeleton: React.FC = () => {
    return (
        <main className="max-w-7xl mx-auto py-6 lg:py-8">
            <CategoryRowSkeleton />
            <CategoryRowSkeleton />
            <CategoryRowSkeleton />
        </main>
    );
};
