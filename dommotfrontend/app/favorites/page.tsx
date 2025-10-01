'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, ChevronLeft, Grid, List, Star, MapPin, Calendar, Trash2, Share, Eye } from 'lucide-react';
import { SimpleHeader } from '../../components';
import { listings, experiences, onlineServices } from '../../data';

interface FavoriteItem {
    id: number;
    type: 'listing' | 'experience' | 'service';
    title: string;
    image: string;
    price: number;
    rating: number;
    location?: string;
    badge?: string;
    addedDate: string;
}

export default function FavoritesPage() {
    const router = useRouter();
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
    const [activeTab, setActiveTab] = useState<'all' | 'listings' | 'experiences' | 'services'>('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check authentication
        const userData = localStorage.getItem('user');
        if (!userData) {
            router.push('/login?redirect=/favorites');
            return;
        }

        loadFavorites();
    }, [router]);

    const loadFavorites = () => {
        setLoading(true);

        // Load favorites from localStorage
        const listingFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const experienceFavorites = JSON.parse(localStorage.getItem('experienceFavorites') || '[]');
        const serviceFavorites = JSON.parse(localStorage.getItem('serviceFavorites') || '[]');

        const favoriteItems: FavoriteItem[] = [];

        // Add listing favorites
        listingFavorites.forEach((id: number) => {
            const listing = listings.find(l => l.id === id);
            if (listing) {
                favoriteItems.push({
                    id: listing.id,
                    type: 'listing',
                    title: listing.title,
                    image: listing.images[0],
                    price: listing.price,
                    rating: listing.rating,
                    location: listing.distance,
                    badge: listing.badge,
                    addedDate: new Date().toISOString() // Mock date
                });
            }
        });

        // Add experience favorites
        experienceFavorites.forEach((id: number) => {
            const experience = experiences.find(e => e.id === id);
            if (experience) {
                favoriteItems.push({
                    id: experience.id,
                    type: 'experience',
                    title: experience.title,
                    image: experience.images[0],
                    price: experience.price,
                    rating: experience.rating,
                    location: experience.location,
                    badge: experience.badge,
                    addedDate: new Date().toISOString() // Mock date
                });
            }
        });

        // Add service favorites
        serviceFavorites.forEach((id: number) => {
            const service = onlineServices.find(s => s.id === id);
            if (service) {
                favoriteItems.push({
                    id: service.id,
                    type: 'service',
                    title: service.title,
                    image: service.images[0],
                    price: service.price,
                    rating: service.rating,
                    badge: service.badge,
                    addedDate: new Date().toISOString() // Mock date
                });
            }
        });

        setFavorites(favoriteItems);
        setLoading(false);
    };

    const removeFavorite = (id: number, type: 'listing' | 'experience' | 'service') => {
        let storageKey = '';
        switch (type) {
            case 'listing':
                storageKey = 'favorites';
                break;
            case 'experience':
                storageKey = 'experienceFavorites';
                break;
            case 'service':
                storageKey = 'serviceFavorites';
                break;
        }

        const currentFavorites = JSON.parse(localStorage.getItem(storageKey) || '[]');
        const updatedFavorites = currentFavorites.filter((favId: number) => favId !== id);
        localStorage.setItem(storageKey, JSON.stringify(updatedFavorites));

        setFavorites(prev => prev.filter(item => !(item.id === id && item.type === type)));
    };

    const getFilteredFavorites = () => {
        if (activeTab === 'all') return favorites;
        return favorites.filter(item => {
            switch (activeTab) {
                case 'listings':
                    return item.type === 'listing';
                case 'experiences':
                    return item.type === 'experience';
                case 'services':
                    return item.type === 'service';
                default:
                    return true;
            }
        });
    };

    const getBadgeColor = (type: string) => {
        switch (type) {
            case 'listing':
                return 'bg-pink-100 text-pink-800';
            case 'experience':
                return 'bg-blue-100 text-blue-800';
            case 'service':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const navigateToDetail = (item: FavoriteItem) => {
        switch (item.type) {
            case 'listing':
                router.push(`/listings/${item.id}`);
                break;
            case 'experience':
                router.push(`/experiences/${item.id}`);
                break;
            case 'service':
                router.push(`/services/${item.id}`);
                break;
        }
    };

    const filteredFavorites = getFilteredFavorites();

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <SimpleHeader />
                <div className="flex items-center justify-center h-96">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <SimpleHeader />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back
                        </button>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                                <Heart className="w-8 h-8 text-pink-500 mr-3" />
                                My Favorites
                            </h1>
                            <p className="text-gray-600 mt-1">{filteredFavorites.length} saved item{filteredFavorites.length !== 1 ? 's' : ''}</p>
                        </div>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                    <div className="flex space-x-2">
                        {[
                            { key: 'all', label: 'All', count: favorites.length },
                            { key: 'listings', label: 'Stays', count: favorites.filter(f => f.type === 'listing').length },
                            { key: 'experiences', label: 'Experiences', count: favorites.filter(f => f.type === 'experience').length },
                            { key: 'services', label: 'Services', count: favorites.filter(f => f.type === 'service').length }
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key as any)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${activeTab === tab.key
                                        ? 'bg-pink-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <span>{tab.label}</span>
                                <span className={`px-2 py-0.5 text-xs rounded-full ${activeTab === tab.key ? 'bg-white/20' : 'bg-white'
                                    }`}>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Favorites Content */}
                {filteredFavorites.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                        <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h3>
                        <p className="text-gray-600 mb-6">
                            {activeTab === 'all'
                                ? 'Start exploring and save items you love'
                                : `No ${activeTab} saved yet`}
                        </p>
                        <button
                            onClick={() => router.push('/')}
                            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                            Start Exploring
                        </button>
                    </div>
                ) : (
                    <div className={viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        : 'space-y-4'
                    }>
                        {filteredFavorites.map((item) => (
                            <div
                                key={`${item.type}-${item.id}`}
                                className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all ${viewMode === 'list' ? 'flex' : ''
                                    }`}
                            >
                                {/* Image */}
                                <div className={`relative ${viewMode === 'list' ? 'w-48 h-32' : 'aspect-[4/3]'
                                    }`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <button
                                        onClick={() => removeFavorite(item.id, item.type)}
                                        className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                    >
                                        <Heart className="w-4 h-4 text-pink-500 fill-current" />
                                    </button>
                                    {item.badge && (
                                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getBadgeColor(item.type)}`}>
                                                    {item.type}
                                                </span>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                                                    {item.rating}
                                                </div>
                                            </div>
                                            <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                                                {item.title}
                                            </h3>
                                            {item.location && (
                                                <div className="flex items-center text-xs text-gray-600 mb-2">
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    {item.location}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-bold text-gray-900">₦{item.price.toLocaleString()}</span>
                                            <span className="text-xs text-gray-600">
                                                {item.type === 'listing' ? ' / night' : item.type === 'experience' ? ' / person' : ' / service'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center space-x-2 mt-4 pt-3 border-t border-gray-100">
                                        <button
                                            onClick={() => navigateToDetail(item)}
                                            className="flex-1 flex items-center justify-center space-x-1 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                                        >
                                            <Eye className="w-3 h-3" />
                                            <span>View</span>
                                        </button>
                                        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                                            <Share className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => removeFavorite(item.id, item.type)}
                                            className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
