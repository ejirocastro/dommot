import React from 'react';
import { OnlineService } from '@/types';
import { getUnifiedBadgeColor } from '@/utils';
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
            className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-400"
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >
            <div className="relative overflow-hidden rounded-xl mb-2 shadow-md hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-400">
                <ServiceImage
                    service={service}
                    currentImageIndex={currentImageIndex}
                    onImageNext={onImageNext}
                    onImagePrev={onImagePrev}
                    getBadgeColor={(badge) => getUnifiedBadgeColor(badge, 'gradient')}
                />
                <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
                <ImageIndicators images={service.images} currentIndex={currentImageIndex} />
            </div>
            <ServiceInfo service={service} />
        </div>
    );
};

export default ServiceCard;