'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { ListingsGrid } from '@/components/listings';
import { AnimatedBackground } from '@/components/common';
import { useScrollPosition } from '@/hooks';
import { listings, categories } from '@/data';
import { SearchData } from '@/types';

export default function SearchPage() {
  const router = useRouter();
  const scrollY = useScrollPosition();
  const [activeTab, setActiveTab] = useState('Stays');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  
  const [searchData, setSearchData] = useState<SearchData>({
    where: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    infants: 0,
    pets: 0,
  });

  const [filteredListings, setFilteredListings] = useState(listings);
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    const applyFilters = () => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        setSearchParams(params);
        
        const location = params.get('where') || '';
        const checkIn = params.get('checkIn') || '';
        const checkOut = params.get('checkOut') || '';
        const guests = parseInt(params.get('guests') || '1');
        const infants = parseInt(params.get('infants') || '0');
        const pets = parseInt(params.get('pets') || '0');

        setSearchData({
          where: location,
          checkIn,
          checkOut,
          guests,
          infants,
          pets,
        });

        // Apply filters
        let filtered = [...listings];
        
        // Filter by location/destination
        if (location) {
          filtered = filtered.filter(listing => {
            const matchesLocation = listing.location?.toLowerCase().includes(location.toLowerCase()) ?? false;
            const matchesTitle = listing.title.toLowerCase().includes(location.toLowerCase());
            const matchesCategory = listing.category.toLowerCase().includes(location.toLowerCase());
            
            return matchesLocation || matchesTitle || matchesCategory;
          });
        }

        // Filter by guest capacity
        if (guests > 1) {
          filtered = filtered.filter(listing => listing.guests >= guests);
        }

        setFilteredListings(filtered);
      }
    };

    applyFilters();

    // Listen for URL changes (back/forward navigation)
    const handlePopState = () => {
      applyFilters();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
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

      <div className="pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {searchData.where ? `Stays in ${searchData.where}` : 'Search Results'}
            </h1>
            
            {/* Search Summary */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
              <span className="text-lg font-medium">
                {filteredListings.length} {filteredListings.length === 1 ? 'stay' : 'stays'} found
              </span>
              
              {searchData.checkIn && searchData.checkOut && (
                <span className="flex items-center gap-1 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm">
                  📅 {searchData.checkIn} - {searchData.checkOut}
                  {(() => {
                    const checkIn = new Date(searchData.checkIn);
                    const checkOut = new Date(searchData.checkOut);
                    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24));
                    return nights > 0 ? ` (${nights} nights)` : '';
                  })()}
                </span>
              )}
              
              {searchData.guests > 1 && (
                <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  👥 {searchData.guests} guests
                </span>
              )}
            </div>

            {/* Filter Tags */}
            {(searchData.where || searchData.checkIn || searchData.guests > 1) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchData.where && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    📍 {searchData.where}
                    <button 
                      onClick={() => {
                        const newParams = new URLSearchParams(window.location.search);
                        newParams.delete('where');
                        window.location.search = newParams.toString();
                      }}
                      className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                    >
                      ✕
                    </button>
                  </span>
                )}
                
                <button
                  onClick={() => router.push('/')}
                  className="text-sky-600 hover:text-sky-800 text-sm font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {filteredListings.length > 0 ? (
          <ListingsGrid
            listings={filteredListings}
            categories={categories}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ) : searchData.where ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                No stays found for "{searchData.where}"
              </h2>
              <p className="text-gray-600 mb-8">
                We couldn't find any properties matching your search. Try one of these popular destinations:
              </p>
              
              {/* Popular Destinations */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
                {[
                  'Victoria Island',
                  'Lekki',
                  'Ikoyi', 
                  'Lagos',
                  'Abuja',
                  'Port Harcourt'
                ].map((destination) => (
                  <button
                    key={destination}
                    onClick={() => router.push(`/search?where=${encodeURIComponent(destination)}`)}
                    className="p-3 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200 hover:border-sky-300 transition-colors text-sky-700 hover:text-sky-800 font-medium"
                  >
                    {destination}
                  </button>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 transition-colors"
                >
                  Browse All Stays
                </a>
                <button
                  onClick={() => router.push('/search')}
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            </div>
          </div>
        ) : (
          <ListingsGrid
            listings={filteredListings}
            categories={categories}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        )}
      </div>
    </div>
  );
}