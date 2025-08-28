'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Experience } from '@/types';
import ExperienceCard from './ExperienceCard';

interface ExperienceCategoryRowProps {
    categoryName: string;
    categoryIcon: string;
    experiences: Experience[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const ExperienceCategoryRow: React.FC<ExperienceCategoryRowProps> = ({
    categoryName,
    categoryIcon,
    experiences,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    // DOM reference for scroll container manipulation
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Scroll state management for navigation arrow visibility
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    /**
     * Evaluates current scroll position and updates navigation arrow visibility
     */
    const checkScrollPosition = () => {
        if (!scrollContainerRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    /**
     * Performs smooth horizontal scrolling in the specified direction
     */
    const scrollTo = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current || isScrolling) return;

        setIsScrolling(true);
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth * 0.8;
        const targetScroll = direction === 'left'
            ? container.scrollLeft - scrollAmount
            : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });

        setTimeout(() => setIsScrolling(false), 500);
    };

    // Touch/swipe gesture state management for mobile interactions
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    /**
     * Handles touch start event for swipe gesture detection
     */
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    /**
     * Tracks touch movement for swipe distance calculation
     */
    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    /**
     * Evaluates completed touch gesture and triggers appropriate scroll action
     */
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

    /**
     * Initialize scroll position checking and set up scroll event listener
     */
    useEffect(() => {
        checkScrollPosition();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, [experiences]);

    /**
     * Advances to the next image in an experience's carousel
     */
    const handleImageNext = (experienceId: number) => {
        setCurrentImageIndex(prev => {
            const experience = experiences.find(e => e.id === experienceId);
            if (!experience) return prev;

            const current = prev[experienceId] || 0;
            const next = current >= experience.images.length - 1 ? 0 : current + 1;
            return { ...prev, [experienceId]: next };
        });
    };

    /**
     * Goes back to the previous image in an experience's carousel
     */
    const handleImagePrev = (experienceId: number) => {
        setCurrentImageIndex(prev => {
            const experience = experiences.find(e => e.id === experienceId);
            if (!experience) return prev;

            const current = prev[experienceId] || 0;
            const prev_index = current <= 0 ? experience.images.length - 1 : current - 1;
            return { ...prev, [experienceId]: prev_index };
        });
    };

    /**
     * Toggles favorite status for a specific experience
     */
    const toggleFavorite = (experienceId: number) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(experienceId)) {
                newFavorites.delete(experienceId);
            } else {
                newFavorites.add(experienceId);
            }
            return newFavorites;
        });
    };

    // Early return if no experiences to display
    if (experiences.length === 0) return null;

    return (
        <div className="mb-8 lg:mb-12">
            {/* Category Header Section */}
            <div className="flex items-center mb-4 lg:mb-6 px-4 sm:px-6 lg:px-8">
                {/* Category icon (emoji) */}
                <span className="text-2xl mr-3">{categoryIcon}</span>

                {/* Category title with responsive text sizing */}
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                    {categoryName}
                </h2>

                {/* Show all button - positioned at the right end */}
                <div className="ml-auto">
                    <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        Show all
                    </button>
                </div>
            </div>

            {/* Horizontal Scrolling Container with Navigation */}
            <div className="relative group">
                {/* Left Navigation Arrow */}
                <button
                    onClick={() => scrollTo('left')}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center ${
                        canScrollLeft ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                    onClick={() => scrollTo('right')}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center ${
                        canScrollRight ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                {/* Main Scrolling Container with Touch Support */}
                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide scroll-smooth"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Inner flex container for horizontal layout */}
                    <div className="flex gap-4 lg:gap-5 px-4 sm:px-6 lg:px-8 pb-2">
                        {/* Individual experience cards with responsive sizing */}
                        {experiences.map((experience, index) => (
                            <div
                                key={experience.id}
                                className="flex-shrink-0 w-56 sm:w-60 lg:w-64"
                            >
                                <ExperienceCard
                                    experience={experience}
                                    index={index}
                                    currentImageIndex={currentImageIndex[experience.id] || 0}
                                    isFavorite={favorites.has(experience.id)}
                                    onImageNext={() => handleImageNext(experience.id)}
                                    onImagePrev={() => handleImagePrev(experience.id)}
                                    onToggleFavorite={() => toggleFavorite(experience.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCategoryRow;