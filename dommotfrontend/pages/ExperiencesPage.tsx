/**
 * ExperiencesPage Component
 * 
 * Dedicated page for experiences and activities offered on the Dommot platform.
 * Provides users with access to various experiences including restaurants,
 * clubs, nature activities, cultural tours, and entertainment offerings.
 * 
 * Features:
 * - Experience discovery and browsing
 * - Category-based experience filtering with horizontal scrolling
 * - Interactive experience cards with image galleries and favorites
 * - Responsive design optimized for experience-based content
 * - Seamless navigation between stays and experiences
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
    AnimatedBackground,
    ChatAssistant
} from '@/components';
import {
    ExperienceGrid,
    ExperienceCategoriesSection
} from '@/components/experiences';
import { useScrollPosition } from '@/hooks';
import { experiences, experienceCategories } from '@/data';
import { SearchData } from '@/types';

/**
 * ExperiencesPage - Main experiences page component
 * 
 * Manages the complete experiences section including experience listings,
 * category filters, and user interactions. Provides a dedicated interface
 * for users to discover and book various experiences and activities.
 */
const ExperiencesPage: React.FC = () => {
    // Navigation state - tracks active tab, defaulted to 'experiences' for this page
    const [activeTab, setActiveTab] = useState<string>('experiences');
    
    // Search functionality state - maintains search criteria for experience filtering
    const [searchData, setSearchData] = useState<SearchData>({
        where: '',      // Location/experience area search query
        checkIn: '',    // Experience date selection
        checkOut: '',   // Experience end date selection (if applicable)
        guests: 0,      // Number of participants for group experiences
        infants: 0,     // Number of infant participants
        pets: 0         // Number of pets (for pet-related experiences)
    });
    
    // Experience image carousel state - tracks current image for each experience listing
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
    
    // User favorites tracking - stores experience IDs marked as favorites by the user
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

            {/* Experience categories section with horizontal scrolling filters */}
            <ExperienceCategoriesSection scrollY={scrollY} categories={experienceCategories} />

            {/* Main experience listings grid with category-based organization */}
            <ExperienceGrid
                experiences={experiences}
                categories={experienceCategories}
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

            {/* AI Chat Assistant */}
            <ChatAssistant />
        </div>
    );
};

export default ExperiencesPage;