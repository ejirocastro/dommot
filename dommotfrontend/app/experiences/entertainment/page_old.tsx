import { Metadata } from 'next';
import EntertainmentClient from './EntertainmentClient';

export const metadata: Metadata = {
    title: 'Entertainment Experiences | Dommot',
    description: 'Discover entertainment experiences in Lagos - shows, concerts, theater performances, and cultural events',
    keywords: 'Lagos entertainment, shows Lagos, concerts Nigeria, theater Lagos, cultural events',
};

/**
 * Server Component for Entertainment Experience Category Page
 * 
 * This server component handles metadata and renders the client component
 * for the entertainment experience category page.
 */
export default function EntertainmentPage() {
    return <EntertainmentClient />;
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
import { Theater, MapPin, Clock, DollarSign } from 'lucide-react';

/**
 * Entertainment Experience Category Page
 * 
 * Dedicated page for entertainment experiences in Lagos,
 * featuring concerts, theater shows, cultural events, and live performances.
 * Users can browse, filter, and book entertainment experiences in this category.
 */
export default function EntertainmentPage() {
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

    // Filter experiences for entertainment category
    const [entertainmentExperiences, setEntertainmentExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        const filtered = experiences.filter(exp => exp.category === 'Entertainment');

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

        setEntertainmentExperiences(sorted);
    }, [sortBy]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
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
                            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                                <Theater className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    🎭 Entertainment
                                </h1>
                                <p className="text-gray-600">
                                    {entertainmentExperiences.length} entertainment experiences • Concerts, theater, cultural events, and live shows
                                </p>
                            </div>
                        </div>

                        {/* Category Description */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 shadow-lg mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                Immerse yourself in Lagos' vibrant entertainment scene through live concerts, theater performances,
                                cultural festivals, and exclusive entertainment events that showcase the city's creative spirit.
                            </p>
                        </div>

                        {/* Stats and Sorting */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                            {/* Quick Stats */}
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span>Lagos Venues</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span>2-4 hours</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <DollarSign className="w-4 h-4 mr-1" />
                                    <span>₦10,000 - ₦40,000</span>
                                </div>
                            </div>

                            {/* Sort Options */}
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'duration')}
                                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
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
                {entertainmentExperiences.length > 0 ? (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {entertainmentExperiences.map((experience, index) => (
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
                            <div className="text-6xl mb-4">🎭</div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                No entertainment experiences found
                            </h2>
                            <p className="text-gray-600 max-w-md mx-auto">
                                We're working on adding more amazing entertainment experiences.
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
                            className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-colors"
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
    title: 'Entertainment Experiences | Dommot',
    description: 'Discover entertainment experiences in Lagos - concerts, theater, cultural events, and live performances',
};
