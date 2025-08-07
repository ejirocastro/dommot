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
            className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="relative overflow-hidden rounded-2xl mb-3 shadow-lg hover:shadow-2xl transition-all duration-500">
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