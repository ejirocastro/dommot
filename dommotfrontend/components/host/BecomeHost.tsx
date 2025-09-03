'use client';

import React from 'react';
import { Home, Calendar, Users } from 'lucide-react';
import { Logo } from '@/components/header/Logo';

interface HostCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    image?: string;
}

const HostCard: React.FC<HostCardProps & { href?: string }> = ({ icon: Icon, title, description, image, href }) => {
    const CardContent = () => (
        <div className="flex flex-col text-center">
            {image ? (
                <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            ) : (
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-sky-600" />
                </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );

    if (href) {
        return (
            <a 
                href={href}
                className="block bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
                <CardContent />
            </a>
        );
    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <CardContent />
        </div>
    );
};

export const BecomeHost: React.FC = () => {
    const hostOptions = [
        {
            icon: Home,
            title: 'Stay',
            description: 'List your apartment or house for guests.',
            href: '/host/stay',
            image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            icon: Calendar,
            title: 'Lifestyle',
            description: 'Offer experiences like club & restaurant bookings.',
            image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            href: '/host/lifestyle'
        },
        {
            icon: Users,
            title: 'Services',
            description: 'Provide services like chefs or event planners.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            href: '/host/services'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
            <div className="absolute top-4 left-4">
                <Logo />
            </div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Become a Host</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Start earning by sharing what you have to offer
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {hostOptions.map((option) => (
                        <HostCard
                            key={option.title}
                            icon={option.icon}
                            title={option.title}
                            description={option.description}
                            image={option.image}
                            href={option.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};