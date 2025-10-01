import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OnlineService, OnlineServiceBadgeType } from '@/types';

interface ServiceImageProps {
    service: OnlineService;
    currentImageIndex: number;
    onImageNext: () => void;
    onImagePrev: () => void;
    getBadgeColor: (badge: OnlineServiceBadgeType) => string;
}

const ServiceImage: React.FC<ServiceImageProps> = ({
    service,
    currentImageIndex,
    onImageNext,
    onImagePrev,
    getBadgeColor
}) => {
    return (
        <div className="relative">
            {/* Service image with hover zoom effect - reduced aspect ratio for compactness */}
            <img
                src={service.images[currentImageIndex]}
                alt={service.title}
                className="w-full aspect-[5/4] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Badge - smaller for compact design */}
            <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium shadow-md backdrop-blur-sm ${getBadgeColor(service.badge)}`}>
                {service.badge.charAt(0).toUpperCase() + service.badge.slice(1)}
            </div>

            {/* Navigation Buttons - smaller */}
            <button
                onClick={onImagePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
            >
                <ChevronLeft className="w-3.5 h-3.5 text-gray-800" />
            </button>
            <button
                onClick={onImageNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
            >
                <ChevronRight className="w-3.5 h-3.5 text-gray-800" />
            </button>
        </div>
    );
};

export default ServiceImage;