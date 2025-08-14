import React from 'react';
import { Star, Clock, Users } from 'lucide-react';
import { OnlineService } from '@/types';

interface ServiceInfoProps {
    service: OnlineService;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ service }) => {
    return (
        <div className="space-y-4 px-2">
            <div className="space-y-3">
                <h3 className="font-medium text-gray-900 text-lg leading-tight tracking-tight group-hover:text-black transition-colors duration-500 line-clamp-2">
                    {service.title}
                </h3>
                
                <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-normal text-base">{service.provider}</p>
                    <div className="flex items-center space-x-1.5 flex-shrink-0">
                        <Star className="w-4 h-4 fill-black text-black" />
                        <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.reviews})</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{service.deliveryTime}</span>
                </div>
            </div>

            <div className="pt-3 border-t border-gray-100">
                <div className="flex items-baseline space-x-1">
                    <span className="font-semibold text-gray-900 text-xl tracking-tight">
                        {service.currency}{service.currency === '₦' ? service.price.toLocaleString() : service.price}
                    </span>
                    <span className="text-gray-500 font-normal">per service</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;