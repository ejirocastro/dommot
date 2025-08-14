'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { OnlineService } from '@/types';

interface ServiceCategoryRowProps {
    categoryName: string;
    categoryIcon: string;
    services: OnlineService[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const ServiceCategoryRow: React.FC<ServiceCategoryRowProps> = ({
    categoryName,
    categoryIcon,
    services,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    // Check scroll position and update arrow visibility
    const checkScrollPosition = () => {
        if (!scrollContainerRef.current) return;
        
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    // Smooth scroll function
    const scrollTo = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current || isScrolling) return;
        
        setIsScrolling(true);
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of visible width
        const targetScroll = direction === 'left' 
            ? container.scrollLeft - scrollAmount
            : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });

        // Reset scrolling flag after animation
        setTimeout(() => setIsScrolling(false), 500);
    };

    // Touch/swipe gesture handling
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && canScrollRight) {
            scrollTo('right');
        }
        if (isRightSwipe && canScrollLeft) {
            scrollTo('left');
        }
    };

    // Initialize scroll position check
    useEffect(() => {
        checkScrollPosition();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, [services]);
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

    if (services.length === 0) return null;

    return (
        <div className="mb-8 lg:mb-12">
            {/* Category Header */}
            <div className="flex items-center mb-4 lg:mb-6 px-4 sm:px-6 lg:px-8">
                <span className="text-2xl mr-3">{categoryIcon}</span>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                    {categoryName}
                </h2>
                <div className="ml-auto">
                    <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        Show all
                    </button>
                </div>
            </div>

            {/* Horizontal Scrolling Container */}
            <div className="relative group">
                {/* Left Arrow */}
                <button
                    onClick={() => scrollTo('left')}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center ${
                        canScrollLeft ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={() => scrollTo('right')}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center ${
                        canScrollRight ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                {/* Scrolling Container */}
                <div 
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide scroll-smooth"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="flex gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 pb-2">
                        {services.map((service, index) => (
                            <div 
                                key={service.id} 
                                className="flex-shrink-0 w-64 sm:w-72 lg:w-80"
                            >
                                <ServiceCard
                                    service={service}
                                    index={index}
                                    currentImageIndex={currentImageIndex[service.id] || 0}
                                    isFavorite={favorites.has(service.id)}
                                    onImageNext={() => handleImageNext(service.id)}
                                    onImagePrev={() => handleImagePrev(service.id)}
                                    onToggleFavorite={() => toggleFavorite(service.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCategoryRow;