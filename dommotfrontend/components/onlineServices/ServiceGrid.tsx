import React from 'react';
import { OnlineService } from '@/types';
import ServiceCard from './ServiceCard';
import { LoadMoreButton } from '../listings/LoadMoreButton';

interface ServicesGridProps {
    services: OnlineService[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({
    services,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    const handleImageNext = (serviceId: number) => {
        setCurrentImageIndex(prev => {
            const service = services.find(s => s.id === serviceId);
            if (!service) return prev;

            const current = prev[serviceId] || 0;
            const next = current >= service.images.length - 1 ? 0 : current + 1;
            return { ...prev, [serviceId]: next };
        });
    };

    const handleImagePrev = (serviceId: number) => {
        setCurrentImageIndex(prev => {
            const service = services.find(s => s.id === serviceId);
            if (!service) return prev;

            const current = prev[serviceId] || 0;
            const prev_index = current <= 0 ? service.images.length - 1 : current - 1;
            return { ...prev, [serviceId]: prev_index };
        });
    };

    const toggleFavorite = (serviceId: number) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(serviceId)) {
                newFavorites.delete(serviceId);
            } else {
                newFavorites.add(serviceId);
            }
            return newFavorites;
        });
    };

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 relative z-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                        currentImageIndex={currentImageIndex[service.id] || 0}
                        isFavorite={favorites.has(service.id)}
                        onImageNext={() => handleImageNext(service.id)}
                        onImagePrev={() => handleImagePrev(service.id)}
                        onToggleFavorite={() => toggleFavorite(service.id)}
                    />
                ))}
            </div>
            <LoadMoreButton />
        </main>
    );
};

export default ServicesGrid;