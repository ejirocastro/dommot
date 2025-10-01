import React, { useState, useMemo } from 'react';
import { OnlineService, OnlineCategory } from '@/types';
import ServiceCategoryRow from './ServiceCategoryRow';
import { LoadMoreButton } from '../listings/LoadMoreButton';

interface ServicesGridProps {
    services: OnlineService[];
    categories: OnlineCategory[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({
    services,
    categories,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    // Progressive category loading - start with 3 categories
    const [visibleCategoryCount, setVisibleCategoryCount] = useState(3);

    // Group services by category - memoized to avoid recalculation
    const servicesByCategory = useMemo(() => {
        return services.reduce((acc, service) => {
            if (!acc[service.category]) {
                acc[service.category] = [];
            }
            acc[service.category].push(service);
            return acc;
        }, {} as Record<string, OnlineService[]>);
    }, [services]);

    const visibleCategories = categories.slice(0, visibleCategoryCount);
    const hasMoreCategories = visibleCategoryCount < categories.length;

    const loadMoreCategories = () => {
        setVisibleCategoryCount(prev => Math.min(prev + 3, categories.length));
    };

    return (
        <main className="max-w-7xl mx-auto py-6 lg:py-8 relative z-10">
            {visibleCategories.map((category) => {
                const categoryServices = servicesByCategory[category.name] || [];
                return (
                    <ServiceCategoryRow
                        key={category.name}
                        categoryName={category.name}
                        categoryIcon={category.icon}
                        services={categoryServices}
                        currentImageIndex={currentImageIndex}
                        setCurrentImageIndex={setCurrentImageIndex}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                );
            })}

            {hasMoreCategories && (
                <div className="mt-8 lg:mt-12 px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={loadMoreCategories}
                        className="w-full py-4 bg-white hover:bg-sky-50 text-gray-800 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-sky-100"
                    >
                        Show More Categories ({categories.length - visibleCategoryCount} remaining)
                    </button>
                </div>
            )}
        </main>
    );
};

export default ServicesGrid;