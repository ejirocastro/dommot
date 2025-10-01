import { Metadata } from 'next';
import AdventureNatureClient from './AdventureNatureClient';

export const metadata: Metadata = {
    title: 'Adventure & Nature Experiences | Dommot',
    description: 'Discover outdoor adventures and nature experiences around Lagos - hiking, wildlife, and eco-tours',
    keywords: 'Lagos adventures, nature tours, outdoor activities, hiking Lagos, eco-tours Nigeria',
};

/**
 * Server Component for Adventure & Nature Experience Category Page
 * 
 * This server component handles metadata and renders the client component
 * for the adventure and nature experience category page.
 */
export default function AdventureNaturePage() {
    return <AdventureNatureClient />;
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
import { Trees, MapPin, Clock, DollarSign } from 'lucide-react';

/**
 * Adventure & Nature Experience Category Page
 * 
 * Dedicated page for outdoor and nature experiences around Lagos,
 * featuring hiking, beach activities, conservation tours, and eco-adventures.
 * Users can browse, filter, and book nature experiences in this category.
 */
export default function AdventureNaturePage() {
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

    // Filter experiences for adventure & nature category
    const [adventureExperiences, setAdventureExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        const filtered = experiences.filter(exp => exp.category === 'Adventure & Nature');

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

        setAdventureExperiences(sorted);
    }, [sortBy]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                                <Trees className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    🌿 Adventure & Nature
                                </h1>
                                <p className="text-gray-600">
                                    {adventureExperiences.length} outdoor experiences • Hiking, beach activities, and eco-adventures
                                </p>
                            </div>
                        </div>

                        {/* Category Description */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                Escape the city bustle and connect with nature through carefully curated outdoor adventures.
                                From coastal hikes to wildlife conservation experiences, discover the natural beauty around Lagos.
                            </p>
                        </div>

                        {/* Stats and Sorting */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                            {/* Quick Stats */}
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span>Lagos & Surroundings</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span>2-8 hours</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <DollarSign className="w-4 h-4 mr-1" />
                                    <span>₦15,000 - ₦35,000</span>
                                </div>
                            </div>

                            {/* Sort Options */}
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'duration')}
                                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                {adventureExperiences.length > 0 ? (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {adventureExperiences.map((experience, index) => (
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
                            <div className="text-6xl mb-4">🌿</div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                No adventure experiences found
                            </h2>
                            <p className="text-gray-600 max-w-md mx-auto">
                                We're working on adding more amazing outdoor adventures.
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
                            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
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
    title: 'Adventure & Nature Experiences | Dommot',
    description: 'Discover outdoor adventures and nature experiences around Lagos - hiking, wildlife, and eco-tours',
};
