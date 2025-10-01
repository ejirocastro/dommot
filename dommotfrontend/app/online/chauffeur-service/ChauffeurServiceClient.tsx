'use client';
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Filter, MapPin, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { onlineServices } from '@/data/onlineServices';
import { ServiceCard } from '@/components/onlineServices';
import { Logo } from '@/components/header/Logo';

export default function ChauffeurServiceClient() {
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const [sortBy, setSortBy] = useState<'price' | 'rating' | 'newest'>('rating');
    const categoryServices = useMemo(() => onlineServices.filter(svc => svc.category === 'Chauffeur Service'), []);
    const sortedServices = useMemo(() => {
        const sorted = [...categoryServices];
        switch (sortBy) {
            case 'price': return sorted.sort((a, b) => a.price - b.price);
            case 'rating': return sorted.sort((a, b) => b.rating - a.rating);
            case 'newest': return sorted.sort((a, b) => b.id - a.id);
            default: return sorted;
        }
    }, [categoryServices, sortBy]);
    const handleImageNext = (id: number) => setCurrentImageIndex(prev => {
        const svc = sortedServices.find(s => s.id === id);
        if (!svc) return prev;
        const current = prev[id] || 0;
        return { ...prev, [id]: current >= svc.images.length - 1 ? 0 : current + 1 };
    });
    const handleImagePrev = (id: number) => setCurrentImageIndex(prev => {
        const svc = sortedServices.find(s => s.id === id);
        if (!svc) return prev;
        const current = prev[id] || 0;
        return { ...prev, [id]: current <= 0 ? svc.images.length - 1 : current - 1 };
    });
    const toggleFavorite = (id: number) => setFavorites(prev => {
        const newFavorites = new Set(prev);
        newFavorites.has(id) ? newFavorites.delete(id) : newFavorites.add(id);
        return newFavorites;
    });
    return (
        <div className="min-h-screen bg-white">
            <div className="absolute top-4 left-4 z-30"><Logo /></div>
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="ml-32"><button onClick={() => router.back()} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"><ArrowLeft className="w-5 h-5" /><span className="text-sm font-medium">Back</span></button></div>
                        <div className="flex items-center space-x-2"><MapPin className="w-5 h-5 text-sky-600" /><h1 className="text-lg font-semibold text-gray-900">Chauffeur Service</h1></div>
                        <div className="flex items-center space-x-3">
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
                                <option value="rating">Highest Rated</option><option value="price">Lowest Price</option><option value="newest">Newest</option>
                            </select>
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg px-3 py-2 transition-colors"><Filter className="w-4 h-4" /><span className="text-sm font-medium">Filters</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4"><span className="text-2xl">🚗</span><div><h2 className="text-2xl font-bold text-gray-900">Chauffeur Service</h2><p className="text-gray-600">{sortedServices.length} services available</p></div></div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600"><Star className="w-4 h-4 text-yellow-400 fill-current" /><span className="font-medium">{sortedServices.length > 0 ? (sortedServices.reduce((sum, svc) => sum + svc.rating, 0) / sortedServices.length).toFixed(2) : '0.00'}</span><span>avg rating</span></div>
                </div>
                {sortedServices.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{sortedServices.map((service, index) => (<div key={service.id} className="w-full"><ServiceCard service={service} index={index} currentImageIndex={currentImageIndex[service.id] || 0} isFavorite={favorites.has(service.id)} onImageNext={() => handleImageNext(service.id)} onImagePrev={() => handleImagePrev(service.id)} onToggleFavorite={() => toggleFavorite(service.id)} /></div>))}</div>
                ) : (<div className="text-center py-12"><MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" /><h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3><p className="text-gray-600">Try adjusting your filters or check back later.</p></div>)}
                {sortedServices.length > 0 && (<div className="mt-12 text-center"><button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">Load More Services</button></div>)}
            </div>
        </div>
    );
}
