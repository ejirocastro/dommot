/**
 * OnlineExperiencesPage Component
 * 
 * Dedicated page for online services and experiences offered on the Dommot platform.
 * Provides users with access to various online services including consultations,
 * virtual experiences, digital services, and remote assistance offerings.
 * 
 * Features:
 * - Online service discovery and browsing
 * - Category-based service filtering with horizontal scrolling
 * - Interactive service cards with image galleries and favorites
 * - Responsive design optimized for service-based content
 * - Seamless navigation between stays and online experiences
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React, { useState } from 'react';
import {
    Header,
    Footer,
    MobileMenu,
    AnimatedBackground
} from '@/components';
import {
    ServiceGrid,
    OnlineCategoriesSection
} from '@/components/onlineServices';
import { useScrollPosition } from '@/hooks';
import { onlineServices, onlineCategories } from '@/data';
import { SearchData } from '@/types';

/**
 * OnlineExperiencesPage - Main online services page component
 * 
 * Manages the complete online experiences section including service listings,
 * category filters, and user interactions. Provides a dedicated interface
 * for users to discover and book various online services and virtual experiences.
 */
const OnlineExperiencesPage: React.FC = () => {
    // Navigation state - tracks active tab, defaulted to 'online' for this page
    const [activeTab, setActiveTab] = useState<string>('online');
    
    // Search functionality state - maintains search criteria for service filtering
    const [searchData, setSearchData] = useState<SearchData>({
        where: '',      // Location/service area search query
        checkIn: '',    // Service start date selection
        checkOut: '',   // Service end date selection (if applicable)
        guests: 0,      // Number of participants for group services
        infants: 0,     // Number of infant participants
        pets: 0         // Number of pets (for pet-related services)
    });
    
    // Service image carousel state - tracks current image for each service listing
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
    
    // User favorites tracking - stores service IDs marked as favorites by the user
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    
    // Mobile navigation state - controls mobile menu visibility and interactions
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    // Custom hook for scroll position tracking to enable dynamic UI effects
    const scrollY = useScrollPosition();

    return (
        /* Main page container with consistent gradient background design */
        <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-sky-100 relative overflow-hidden">
            {/* Animated background elements for visual appeal */}
            <AnimatedBackground />

            {/* Shared header component with navigation and search functionality */}
            <Header
                scrollY={scrollY}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                searchData={searchData}
                setSearchData={setSearchData}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            {/* Online services category section with horizontal scrolling filters */}
            <OnlineCategoriesSection scrollY={scrollY} categories={onlineCategories} />

            {/* Main service listings grid with category-based organization */}
            <ServiceGrid
                services={onlineServices}
                categories={onlineCategories}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                favorites={favorites}
                setFavorites={setFavorites}
            />

            {/* Shared footer component with site-wide links and information */}
            <Footer />

            {/* Mobile navigation menu overlay for responsive design */}
            <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />
        </div>
    );
};

export default OnlineExperiencesPage;