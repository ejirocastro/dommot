/**
 * Banana Island Stays Page
 * 
 * Dedicated page showing all property listings in Banana Island, Lagos.
 * Provides a comprehensive view of all available accommodations in this exclusive area
 * with filtering, sorting, and detailed property information.
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { ArrowLeft, Filter, MapPin, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { listings } from '@/data/listings';
import { ListingCard } from '@/components/listings/ListingCard';
import { Logo } from '@/components/header/Logo';

/**
 * BananaIslandStaysPage - Main component for Banana Island property listings
 */
const BananaIslandStaysPage: React.FC = () => {
    const router = useRouter();

    // State management
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const [sortBy, setSortBy] = useState<'price' | 'rating' | 'newest'>('rating');

    // Filter listings for Banana Island
    const bananaIslandListings = useMemo(() => {
        return listings.filter(listing =>
            listing.category === "Stays in Banana Island" ||
            listing.title.toLowerCase().includes('banana island') ||
            listing.location.toLowerCase().includes('banana island')
        );
    }, []);

    // Sort listings
    const sortedListings = useMemo(() => {
        const sorted = [...bananaIslandListings];
        switch (sortBy) {
            case 'price':
                return sorted.sort((a, b) => a.price - b.price);
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'newest':
                return sorted.sort((a, b) => b.id - a.id);
            default:
                return sorted;
        }
    }, [bananaIslandListings, sortBy]);

    // Image navigation handlers
    const handleImageNext = (listingId: number) => {
        setCurrentImageIndex(prev => {
            const listing = sortedListings.find(l => l.id === listingId);
            if (!listing) return prev;

            const current = prev[listingId] || 0;
            const next = current >= listing.images.length - 1 ? 0 : current + 1;
            return { ...prev, [listingId]: next };
        });
    };

    const handleImagePrev = (listingId: number) => {
        setCurrentImageIndex(prev => {
            const listing = sortedListings.find(l => l.id === listingId);
            if (!listing) return prev;

            const current = prev[listingId] || 0;
            const prev_index = current <= 0 ? listing.images.length - 1 : current - 1;
            return { ...prev, [listingId]: prev_index };
        });
    };

    // Favorites handler
    const toggleFavorite = (listingId: number) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(listingId)) {
                newFavorites.delete(listingId);
            } else {
                newFavorites.add(listingId);
            }
            return newFavorites;
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Logo */}
            <div className="absolute top-4 left-4 z-30">
                <Logo />
            </div>

            {/* Header Section */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="ml-32">
                            <button
                                onClick={() => router.back()}
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span className="text-sm font-medium">Back</span>
                            </button>
                        </div>

                        <div className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5 text-sky-600" />
                            <h1 className="text-lg font-semibold text-gray-900">Stays in Banana Island</h1>
                        </div>

                        <div className="flex items-center space-x-3">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'newest')}
                                className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            >
                                <option value="rating">Highest Rated</option>
                                <option value="price">Lowest Price</option>
                                <option value="newest">Newest</option>
                            </select>

                            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg px-3 py-2 transition-colors">
                                <Filter className="w-4 h-4" />
                                <span className="text-sm font-medium">Filters</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Stats Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl">🍌</span>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Stays in Banana Island, Lagos</h2>
                            <p className="text-gray-600">{sortedListings.length} exclusive properties available</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">
                            {sortedListings.length > 0
                                ? (sortedListings.reduce((sum, listing) => sum + listing.rating, 0) / sortedListings.length).toFixed(2)
                                : '0.00'
                            }
                        </span>
                        <span>avg rating</span>
                    </div>
                </div>

                {/* Listings Grid */}
                {sortedListings.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sortedListings.map((listing, index) => (
                            <div key={listing.id} className="w-full">
                                <ListingCard
                                    listing={listing}
                                    index={index}
                                    currentImageIndex={currentImageIndex[listing.id] || 0}
                                    isFavorite={favorites.has(listing.id)}
                                    onImageNext={() => handleImageNext(listing.id)}
                                    onImagePrev={() => handleImagePrev(listing.id)}
                                    onToggleFavorite={() => toggleFavorite(listing.id)}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
                        <p className="text-gray-600">Check back soon for exclusive Banana Island properties.</p>
                    </div>
                )}

                {sortedListings.length > 0 && (
                    <div className="mt-12 text-center">
                        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                            Load More Properties
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BananaIslandStaysPage;
