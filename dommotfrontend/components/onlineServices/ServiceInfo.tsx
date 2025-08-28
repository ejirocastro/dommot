import React from 'react';
import { Star } from 'lucide-react';
import { OnlineService } from '@/types';

interface ServiceInfoProps {
    service: OnlineService;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ service }) => {
    return (
        // Main information container - simplified to match listing pattern
        <div className="space-y-1.5 px-3 py-3">
            {/* Title and Rating Row */}
            <div className="flex justify-between items-start">
                {/* Service title with hover effect - reduced font size */}
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-sky-800 transition-colors duration-300 leading-snug truncate pr-2">
                    {service.title}
                </h3>

                {/* Star rating display - slightly smaller */}
                <div className="flex items-center space-x-0.5 ml-2 flex-shrink-0">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-gray-700">{service.rating}</span>
                </div>
            </div>

            {/* Price Row - simplified like listings */}
            <div className="flex items-center justify-between pt-1">
                {/* Price display with currency */}
                <div className="flex items-baseline space-x-1">
                    <span className="text-sm font-semibold text-gray-900">
                        {service.currency}{service.currency === '₦' ? service.price.toLocaleString() : service.price}
                    </span>
                    <span className="text-xs text-gray-500">per service</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;