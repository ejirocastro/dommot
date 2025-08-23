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
            <img
                src={service.images[currentImageIndex]}
                alt={service.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Badge */}
            <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm ${getBadgeColor(service.badge)}`}>
                {service.badge.charAt(0).toUpperCase() + service.badge.slice(1)}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={onImagePrev}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
            >
                <ChevronLeft className="w-4 h-4 text-gray-800" />
            </button>
            <button
                onClick={onImageNext}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
            >
                <ChevronRight className="w-4 h-4 text-gray-800" />
            </button>
        </div>
    );
};

export default ServiceImage;