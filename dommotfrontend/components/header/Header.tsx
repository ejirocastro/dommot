/**
 * Header Component
 * 
 * Main header component that provides navigation, search functionality, and responsive design
 * across the entire Dommot platform. Features dynamic styling based on scroll position
 * and comprehensive mobile support with collapsible navigation elements.
 * 
 * Key Features:
 * - Sticky positioning with scroll-based styling transitions
 * - Responsive design with mobile-specific navigation tabs
 * - Integrated search bar with advanced filtering options
 * - Mobile hamburger menu integration
 * - Backdrop blur effects and dynamic shadows
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { TopNavigation } from './TopNavigation';
import { MobileNavTabs } from './MobileNavTabs';
import { SearchBar } from './SearchBar';
import { SearchData } from '../../types';

/**
 * HeaderProps - Props interface for the Header component
 * 
 * @interface HeaderProps
 * @property {number} scrollY - Current vertical scroll position for dynamic styling
 * @property {string} activeTab - Currently active navigation tab identifier
 * @property {function} setActiveTab - State setter for updating active tab
 * @property {SearchData} searchData - Current search form data and filters
 * @property {function} setSearchData - State setter for updating search data
 * @property {boolean} mobileMenuOpen - Mobile menu visibility state
 * @property {function} setMobileMenuOpen - State setter for mobile menu visibility
 */
interface HeaderProps {
    scrollY: number;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    searchData: SearchData;
    setSearchData: React.Dispatch<React.SetStateAction<SearchData>>;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Header - Main site navigation header
 * 
 * Renders the complete header structure including logo, navigation tabs,
 * search functionality, and mobile menu controls. Implements dynamic styling
 * based on scroll position for enhanced user experience.
 * 
 * @param {HeaderProps} props - Component props containing state and handlers
 * @returns {JSX.Element} Rendered header component
 */
export const Header: React.FC<HeaderProps> = ({
    scrollY,
    activeTab,
    setActiveTab,
    searchData,
    setSearchData,
    mobileMenuOpen,
    setMobileMenuOpen
}) => {
    return (
        /* Main header element with sticky positioning and dynamic styling */
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
            // Dynamic styling based on scroll position for enhanced visual feedback
            scrollY > 20
                ? 'bg-white/95 backdrop-blur-xl border-b border-sky-200/50 shadow-2xl'  // Scrolled state - more opaque with stronger shadow
                : 'bg-white/90 backdrop-blur-md border-b border-sky-200/30 shadow-lg'   // Default state - semi-transparent with light shadow
            }`}>
            {/* Content container with responsive padding and max-width constraints */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top navigation bar with logo, main tabs, and mobile menu trigger */}
                <TopNavigation
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
                
                {/* Mobile-only navigation tabs for improved touch navigation */}
                <MobileNavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                
                {/* Main search bar with location, dates, and guest filtering */}
                <SearchBar searchData={searchData} setSearchData={setSearchData} />
            </div>
        </header>
    );
};
