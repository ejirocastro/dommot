'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { ListingCard } from '@/components/listings';
import { AnimatedBackground } from '@/components/common';
import { useScrollPosition } from '@/hooks';
import { listings, categories } from '@/data';
import { SearchData, Listing } from '@/types';
import { MapPin, Filter, Grid, List } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const scrollY = useScrollPosition();
  const [activeTab, setActiveTab] = useState('Stays');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [searchData, setSearchData] = useState<SearchData>({
    where: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    infants: 0,
    pets: 0,
  });

  const [categoryListings, setCategoryListings] = useState<Listing[]>([]);
  const [categoryInfo, setCategoryInfo] = useState<{name: string, icon: string} | null>(null);

  useEffect(() => {
    // Handle async params and decode the category parameter from URL
    params.then((resolvedParams) => {
      const decodedCategory = decodeURIComponent(resolvedParams.category);
    
    // Find matching category info by converting category name to URL slug
    const categoryToSlug = (name: string): string => {
      return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };
    
    const matchingCategory = categories.find(cat => 
      categoryToSlug(cat.name) === decodedCategory.toLowerCase()
    );

    if (matchingCategory) {
      setCategoryInfo({
        name: matchingCategory.name,
        icon: matchingCategory.icon
      });
    } else {
      // Fallback for direct category matches
      const categoryName = decodedCategory.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      setCategoryInfo({
        name: `Stays in ${categoryName}`,
        icon: '🏠'
      });
    }

    // Filter listings based on category
    let filtered = listings;
    
    // Convert URL slug back to category name for matching
    const categorySlugToCategoryName = (slug: string): string => {
      return slug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    };

    const reconstructedCategoryName = categorySlugToCategoryName(decodedCategory);
    
    // Try to match with exact category names first
    if (matchingCategory) {
      filtered = listings.filter(listing => 
        listing.category === matchingCategory.name
      );
    } else {
      // Filter by location/area for categories like "stays-in-lekki"
      const areaName = reconstructedCategoryName.toLowerCase().replace('stays in ', '');
      
      filtered = listings.filter(listing => {
        const matchesCategory = listing.category.toLowerCase().includes(reconstructedCategoryName.toLowerCase());
        const matchesLocation = listing.location.toLowerCase().includes(areaName);
        const matchesTitle = listing.title.toLowerCase().includes(areaName);
        
        return matchesCategory || matchesLocation || matchesTitle;
      });
    }

    setCategoryListings(filtered);
    });
  }, [params]);

  const getCategoryDescription = (categoryName: string) => {
    if (categoryName.includes('Lekki')) return 'Beautiful beachfront properties with stunning ocean views';
    if (categoryName.includes('Victoria Island')) return 'Prime business district with luxury accommodations';
    if (categoryName.includes('Ikoyi')) return 'Upscale residential area with premium properties';
    if (categoryName.includes('Banana Island')) return 'Exclusive island community with luxury estates';
    if (categoryName.includes('Eko Atlantic')) return 'Modern waterfront city with contemporary living';
    if (categoryName.includes('Maryland')) return 'Family-friendly neighborhood with comfortable homes';
    return 'Discover amazing stays in this beautiful area';
  };

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

      <div className="pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Clean Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-3">
              {categoryInfo?.name || 'Properties'}
            </h1>
            <p className="text-gray-600">
              {categoryListings.length} properties
            </p>
          </div>
        </div>

        {/* Listings */}
        {categoryListings.length > 0 ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryListings.map((listing, index) => (
                <div key={listing.id}>
                  <ListingCard
                    listing={listing}
                    index={index}
                    currentImageIndex={currentImageIndex[listing.id] || 0}
                    isFavorite={favorites.has(listing.id)}
                    onImageNext={() => {
                      setCurrentImageIndex(prev => {
                        const current = prev[listing.id] || 0;
                        const next = current >= listing.images.length - 1 ? 0 : current + 1;
                        return { ...prev, [listing.id]: next };
                      });
                    }}
                    onImagePrev={() => {
                      setCurrentImageIndex(prev => {
                        const current = prev[listing.id] || 0;
                        const prev_index = current <= 0 ? listing.images.length - 1 : current - 1;
                        return { ...prev, [listing.id]: prev_index };
                      });
                    }}
                    onToggleFavorite={() => {
                      setFavorites(prev => {
                        const newFavorites = new Set(prev);
                        if (newFavorites.has(listing.id)) {
                          newFavorites.delete(listing.id);
                        } else {
                          newFavorites.add(listing.id);
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
              <div className="text-6xl mb-4">🏠</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                No stays found in this category
              </h2>
              <p className="text-gray-600 mb-8">
                We couldn't find any properties matching this category. Try exploring other areas or check back later.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 transition-colors"
                >
                  Browse All Stays
                </a>
                <a
                  href="/search"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Try Search
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}