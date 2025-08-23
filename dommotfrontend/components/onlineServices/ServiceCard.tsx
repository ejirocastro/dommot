import React from 'react';
import { OnlineService } from '@/types';
import { getOnlineBadgeColor } from '@/utils';
import ServiceImage from './ServiceImage';
import ServiceInfo from './ServiceInfo';
import { FavoriteButton } from '../listings/FavoriteButton';
import { ImageIndicators } from '../listings/ImageIndicators';

interface ServiceCardProps {
    service: OnlineService;
    index: number;
    currentImageIndex: number;
    isFavorite: boolean;
    onImageNext: () => void;
    onImagePrev: () => void;
    onToggleFavorite: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    service,
    index,
    currentImageIndex,
    isFavorite,
    onImageNext,
    onImagePrev,
    onToggleFavorite
}) => {
    return (
        <div
            className="group cursor-pointer transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02]"
            style={{ 
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out forwards'
            }}
        >
            <div className="relative overflow-hidden rounded-3xl mb-6 bg-white shadow-sm hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-700 ease-out border border-gray-100/50">
                <ServiceImage
                    service={service}
                    currentImageIndex={currentImageIndex}
                    onImageNext={onImageNext}
                    onImagePrev={onImagePrev}
                    getBadgeColor={getOnlineBadgeColor}
                />
                <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
                <ImageIndicators images={service.images} currentIndex={currentImageIndex} />
            </div>
            <ServiceInfo service={service} />
        </div>
    );
};

export default ServiceCard;