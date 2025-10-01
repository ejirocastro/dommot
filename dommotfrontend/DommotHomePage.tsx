/**
 * DommotHomePage Component
 * 
 * Main landing page component for the Dommot property rental platform.
 * Provides a comprehensive interface for users to search, browse, and interact
 * with property listings in a responsive layout similar to Airbnb.
 * 
 * Features:
 * - Property search functionality with location, dates, and guest filters
 * - Category-based property browsing with horizontal scrolling
 * - Interactive property listings with image galleries and favorites
 * - Responsive design with mobile-first approach
 * - Smooth scrolling animations and visual effects
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {
    Header,
    CategoriesSection,
    ListingsGrid,
    Footer,
    MobileMenu,
    AnimatedBackground
} from './components';
import { useScrollPosition } from './hooks';
import { categories, listings } from './data';
import { SearchData } from './types';

// Code split heavy ChatAssistant component - load only when needed
const ChatAssistant = dynamic(() => import('./components/chat/ChatAssistant'), {
    ssr: false, // Don't render on server
    loading: () => null // No loading indicator needed for chat
});

/**
 * DommotHomePage - Main home page component
 * 
 * Orchestrates the entire home page layout including header navigation,
 * category filters, property listings, and mobile responsive features.
 * Manages global state for search filters, image navigation, and user interactions.
 */
const DommotHomePage: React.FC = () => {
    // Navigation state - tracks which main tab is currently active (stays, experiences, etc.)
    const [activeTab, setActiveTab] = useState<string>('stays');
    
    // Search form data - stores user's search criteria for property filtering
    const [searchData, setSearchData] = useState<SearchData>({
        where: '',      // Destination/location search query
        checkIn: '',    // Check-in date selection
        checkOut: '',   // Check-out date selection
        guests: 0,      // Number of adult guests
        infants: 0,     // Number of infant guests
        pets: 0         // Number of pets
    });
    
    // Image carousel state - tracks current image index for each property listing
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
    
    // User favorites - stores set of property IDs that user has marked as favorites
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    
    // Mobile navigation state - controls visibility of mobile hamburger menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    // Custom hook to track scroll position for dynamic header styling
    const scrollY = useScrollPosition();

    return (
        /* Main container with gradient background and responsive layout */
        <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-sky-100 relative">
            {/* Animated background effects for visual enhancement */}
            <AnimatedBackground />

            {/* Main navigation header with search bar and menu controls */}
            <Header
                scrollY={scrollY}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                searchData={searchData}
                setSearchData={setSearchData}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            {/* Category filter section with horizontal scrolling tabs */}
            <CategoriesSection scrollY={scrollY} categories={categories} />

            {/* Main property listings grid with horizontal scrolling rows */}
            <ListingsGrid
                listings={listings}
                categories={categories}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                favorites={favorites}
                setFavorites={setFavorites}
            />

            {/* Site footer with links and information */}
            <Footer />

            {/* Mobile-only navigation menu overlay */}
            <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            {/* AI Chat Assistant */}
            <ChatAssistant />
        </div>
    );
};

export default DommotHomePage;