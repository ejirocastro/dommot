import React from 'react';
import { Star, Clock, Users } from 'lucide-react';
import { OnlineService } from '@/types';

interface ServiceInfoProps {
    service: OnlineService;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ service }) => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-900 group-hover:text-sky-800 transition-colors duration-300 line-clamp-2">
                    {service.title}
                </h3>
                <div className="flex items-center space-x-1 ml-2 flex-shrink-0">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                    <span className="text-xs text-gray-500">({service.reviews})</span>
                </div>
            </div>

            <p className="text-sm text-sky-600 font-medium">{service.provider}</p>
            <p className="text-sm text-gray-500">{service.category}</p>

            <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{service.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{service.deliveryTime}</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-2">
                <div className="flex items-baseline space-x-1">
                    <span className="font-semibold text-gray-900 text-lg">{service.currency}{service.price}</span>
                    <span className="text-sm text-gray-500">per service</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;