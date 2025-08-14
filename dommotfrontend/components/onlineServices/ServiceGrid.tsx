import React from 'react';
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
    // Group services by category
    const servicesByCategory = services.reduce((acc, service) => {
        if (!acc[service.category]) {
            acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
    }, {} as Record<string, OnlineService[]>);

    return (
        <main className="max-w-7xl mx-auto py-6 lg:py-8 relative z-10">
            {categories.map((category) => {
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
            <div className="mt-8 lg:mt-12 px-4 sm:px-6 lg:px-8">
                <LoadMoreButton />
            </div>
        </main>
    );
};

export default ServicesGrid;