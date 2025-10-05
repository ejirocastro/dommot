/**
 * TopNavigation Component
 * 
 * Primary navigation bar component that handles routing, tab management, and user interactions
 * across the Dommot platform. Features responsive design with desktop-optimized navigation
 * tabs and comprehensive menu functionality with smooth animations and visual feedback.
 * 
 * Key Features:
 * - Dynamic tab routing with Next.js Link integration
 * - Pathname-based active tab detection for accurate navigation state
 * - Glass morphism design with backdrop blur effects
 * - Animated tab transitions with gradient backgrounds and glow effects
 * - Mobile menu toggle functionality
 * - Responsive visibility controls for different screen sizes
 * - Host promotion button for business development
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Zap, Menu } from 'lucide-react';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';

/**
 * TopNavigationProps - Props interface for the TopNavigation component
 *
 * @interface TopNavigationProps
 * @property {string} activeTab - Currently active navigation tab identifier
 * @property {function} setActiveTab - State setter for updating the active tab
 * @property {boolean} mobileMenuOpen - Current state of mobile menu visibility
 * @property {function} setMobileMenuOpen - State setter for mobile menu toggle
 * @property {function} onOpenAuthModal - Callback to open auth modal with specified mode
 */
interface TopNavigationProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onOpenAuthModal?: (mode: 'login' | 'signup') => void;
}

/**
 * TopNavigation - Primary navigation bar with routing and user controls
 * 
 * Renders the main navigation interface including brand logo, navigation tabs,
 * language selection, and user menu. Implements intelligent tab detection based
 * on current pathname and provides seamless navigation experience.
 * 
 * @param {TopNavigationProps} props - Component props containing navigation state and handlers
 * @returns {JSX.Element} Rendered top navigation component
 */
export const TopNavigation: React.FC<TopNavigationProps> = ({
    activeTab,
    setActiveTab,
    mobileMenuOpen,
    setMobileMenuOpen,
    onOpenAuthModal
}) => {
    // Get current pathname for active tab detection
    const pathname = usePathname();
    
    // State for user dropdown menu
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    /**
     * Maps navigation tabs to their corresponding route paths
     * @param {string} tab - Tab identifier ('stays', 'experiences', 'online')
     * @returns {string} Route path for the specified tab
     */
    const getTabHref = (tab: string) => {
        switch (tab) {
            case 'online':
                return '/online';       // Online services page
            case 'stays':
                return '/';             // Homepage for stays (main listings)
            case 'experiences':
                return '/experiences';  // Experiences page
            default:
                return '/';             // Default to homepage
        }
    };

    /**
     * Determines if a tab is currently active based on pathname
     * @param {string} tab - Tab identifier to check
     * @returns {boolean} True if tab matches current route or active state
     */
    const isActiveTab = (tab: string) => {
        // Route-based active detection for accurate navigation state
        if (tab === 'online' && pathname === '/online') return true;
        if (tab === 'stays' && pathname === '/') return true;
        if (tab === 'experiences' && pathname === '/experiences') return true;
        return activeTab === tab; // Fallback to state-based detection
    };

    return (
        // Main navigation container with responsive height and flexbox layout
        <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Brand logo component */}
            <Logo />

            {/* Center Navigation Tabs - Desktop only with glass morphism effect */}
            <nav className="hidden lg:flex items-center bg-white/70 backdrop-blur-md rounded-full p-1.5 border border-sky-200/50 shadow-lg" aria-label="Main navigation">
                {/* Dynamic tab generation with routing and active state management */}
                {['stays', 'experiences', 'online'].map((tab) => (
                    <Link
                        key={tab}
                        href={getTabHref(tab)}
                        aria-current={isActiveTab(tab) ? 'page' : undefined}
                        className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 capitalize relative ${
                            // Active tab styling with gradient and scale transform
                            isActiveTab(tab)
                                ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg transform scale-105'
                                // Inactive tab styling with hover effects
                                : 'text-gray-600 hover:text-sky-700 hover:bg-white/80 hover:shadow-md'
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {/* Special label handling for online services and experiences */}
                        {tab === 'online' ? 'Services' : tab === 'experiences' ? 'Lifestyle' : tab}
                        
                        {/* Active tab glow effect */}
                        {isActiveTab(tab) && (
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full blur opacity-50 animate-pulse"></div>
                        )}
                    </Link>
                ))}
            </nav>

            {/* Right Menu Section - User controls and actions */}
            <div className="flex items-center space-x-2 lg:space-x-3">
                {/* Host promotion button - Extra large screens only */}
                <button aria-label="List your home on Dommot" className="hidden xl:flex items-center space-x-2 text-sm font-medium text-sky-800 hover:bg-sky-50 px-4 py-2.5 rounded-full transition-all duration-300 border border-transparent hover:border-sky-200 hover:shadow-lg group">
                    <span>DOMMOT your home</span>
                    <Zap className="w-4 h-4 group-hover:text-sky-600 transition-colors" />
                </button>

                {/* Language/Region selector button */}
                <button aria-label="Select language and region" className="p-3 hover:bg-sky-50 rounded-full transition-all duration-300 hover:shadow-lg">
                    <Globe className="w-5 h-5 text-sky-700" />
                </button>

                {/* Mobile menu toggle button - Mobile only */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                    aria-expanded={mobileMenuOpen}
                    className="lg:hidden p-3 hover:bg-sky-50 rounded-full transition-all duration-300 hover:shadow-lg"
                >
                    <Menu className="w-5 h-5 text-sky-700" />
                </button>
                
                {/* User dropdown menu */}
                <UserMenu
                    isOpen={userMenuOpen}
                    setIsOpen={setUserMenuOpen}
                    onOpenAuthModal={onOpenAuthModal}
                />
            </div>
        </div>
    );
};