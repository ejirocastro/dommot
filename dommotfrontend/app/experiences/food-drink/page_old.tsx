import { Metadata } from 'next';
import FoodDrinkClient from './FoodDrinkClient';

export const metadata: Metadata = {
    title: 'Food & Drink Experiences | Dommot',
    description: 'Discover culinary experiences in Lagos - wine tastings, cooking classes, and food tours with local experts',
    keywords: 'Lagos food tours, wine tasting Lagos, cooking classes Nigeria, culinary experiences Lagos',
};

/**
 * Server Component for Food & Drink Experience Category Page
 * 
 * This server component handles metadata and renders the client component
 * for the food and drink experience category page.
 */
export default function FoodDrinkPage() {
    return <FoodDrinkClient />;
}

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer';
import { AnimatedBackground } from '@/components/common';
import { MobileMenu } from '@/components/mobile';
import { ExperienceCard } from '@/components/experiences';
import { useScrollPosition } from '@/hooks';
import { SearchData, Experience } from '@/types';
import { experiences } from '@/data/experiences';
import { Coffee, MapPin, Clock, DollarSign } from 'lucide-react';

/**
 * Food & Drink Experience Category Page
 * 
 * Dedicated page for food and beverage experiences in Lagos,
 * featuring cooking classes, food tours, wine tastings, and culinary adventures.
 * Users can browse, filter, and book food experiences in this category.
 */
export default function FoodDrinkPage() {
    const scrollY = useScrollPosition();
    const [activeTab, setActiveTab] = useState('experiences');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const [sortBy, setSortBy] = useState<'price' | 'rating' | 'duration'>('rating');

    const [searchData, setSearchData] = useState<SearchData>({
        where: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
        infants: 0,
        pets: 0,
    });

    // Filter experiences for food & drink category
    const [foodExperiences, setFoodExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        const filtered = experiences.filter(exp => exp.category === 'Food & Drink');

        // Sort experiences based on selected criteria
        const sorted = [...filtered].sort((a, b) => {
            switch (sortBy) {
                case 'price':
                    return a.price - b.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'duration':
                    return a.duration.localeCompare(b.duration);
                default:
                    return 0;
            }
        });

        setFoodExperiences(sorted);
    }, [sortBy]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
            <AnimatedBackground />

            <Header
                scrollY={scrollY}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                searchData={searchData}
                setSearchData={setSearchData}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <div className="pt-6">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                                <Coffee className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    🍻 Food & Drink
                                </h1>
                                <p className="text-gray-600">
                                    {foodExperiences.length} culinary experiences • Cooking classes, food tours, and tasting experiences
                                </p>
                            </div>
                        </div>

                        {/* Category Description */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                Immerse yourself in Lagos' rich culinary culture through hands-on cooking classes, guided food tours,
                                and exclusive tasting experiences. Learn traditional recipes and discover hidden food gems.
                            </p>
                        </div>

                        {/* Stats and Sorting */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                            {/* Quick Stats */}
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span>Lagos Area</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span>2-4 hours</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <DollarSign className="w-4 h-4 mr-1" />
                                    <span>₦15,000 - ₦30,000</span>
                                </div>
                            </div>

                            {/* Sort Options */}
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'duration')}
                                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                >
                                    <option value="rating">Rating</option>
                                    <option value="price">Price</option>
                                    <option value="duration">Duration</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Grid */}
                {foodExperiences.length > 0 ? (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {foodExperiences.map((experience, index) => (
                                <div key={experience.id}>
                                    <ExperienceCard
                                        experience={experience}
                                        index={index}
                                        currentImageIndex={currentImageIndex[experience.id] || 0}
                                        isFavorite={favorites.has(experience.id)}
                                        onImageNext={() => {
                                            setCurrentImageIndex(prev => {
                                                const current = prev[experience.id] || 0;
                                                const next = current >= experience.images.length - 1 ? 0 : current + 1;
                                                return { ...prev, [experience.id]: next };
                                            });
                                        }}
                                        onImagePrev={() => {
                                            setCurrentImageIndex(prev => {
                                                const current = prev[experience.id] || 0;
                                                const prev_index = current <= 0 ? experience.images.length - 1 : current - 1;
                                                return { ...prev, [experience.id]: prev_index };
                                            });
                                        }}
                                        onToggleFavorite={() => {
                                            setFavorites(prev => {
                                                const newFavorites = new Set(prev);
                                                if (newFavorites.has(experience.id)) {
                                                    newFavorites.delete(experience.id);
                                                } else {
                                                    newFavorites.add(experience.id);
                                                }
                                                return newFavorites;
                                            });
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🍻</div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                No food & drink experiences found
                            </h2>
                            <p className="text-gray-600 max-w-md mx-auto">
                                We're working on adding more amazing culinary experiences.
                                Check back soon or explore other experience categories.
                            </p>
                        </div>
                    </div>
                )}

                {/* Back to All Experiences Link */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
                    <div className="text-center">
                        <a
                            href="/experiences"
                            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
                        >
                            ← Back to all experiences
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
            <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />
        </div>
    );
}

export const metadata = {
    title: 'Food & Drink Experiences | Dommot',
    description: 'Discover culinary experiences in Lagos - cooking classes, food tours, and tasting experiences',
};
