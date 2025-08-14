/**
 * MobileNavTabs Component
 * 
 * Mobile-specific navigation tab component that provides touch-optimized navigation
 * between different platform sections. Features a modern pill-style design with
 * animated transitions and backdrop blur effects for enhanced visual appeal.
 * 
 * Key Features:
 * - Mobile-only visibility (hidden on desktop with lg:hidden)
 * - Smooth tab transitions with gradient active states
 * - Backdrop blur and glass morphism design
 * - Touch-friendly button sizing and spacing
 * - Dynamic active tab highlighting with shadow effects
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React from 'react';

/**
 * MobileNavTabsProps - Props interface for the MobileNavTabs component
 * 
 * @interface MobileNavTabsProps
 * @property {string} activeTab - Currently active tab identifier ('stays', 'experiences', 'online')
 * @property {function} setActiveTab - State setter function for updating the active tab
 */
interface MobileNavTabsProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * MobileNavTabs - Mobile navigation tab selector
 * 
 * Renders a horizontal tab selector optimized for mobile interfaces.
 * Provides seamless navigation between stays, experiences, and online services
 * with visual feedback and smooth animations.
 * 
 * @param {MobileNavTabsProps} props - Component props containing active tab state and setter
 * @returns {JSX.Element} Rendered mobile navigation tabs
 */
export const MobileNavTabs: React.FC<MobileNavTabsProps> = ({ activeTab, setActiveTab }) => {
    return (
        // Mobile-only container with bottom padding for spacing
        <div className="lg:hidden pb-4">
            {/* Glass morphism container with backdrop blur and border */}
            <div className="flex items-center bg-white/70 backdrop-blur-md rounded-full p-1 border border-sky-200/50 shadow-lg">
                {/* Dynamic tab generation from available navigation options */}
                {['stays', 'experiences', 'online'].map((tab) => (
                    <button
                        key={tab}
                        className={`flex-1 px-3 py-2 text-xs font-medium rounded-full transition-all duration-300 capitalize ${
                            // Active tab styling with gradient background and shadow
                            activeTab === tab
                                ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg'
                                // Inactive tab styling with hover effects
                                : 'text-gray-600 hover:text-sky-700 hover:bg-white/80'
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {/* Special case for 'online' tab to show proper capitalization */}
                        {tab === 'online' ? 'Online' : tab}
                    </button>
                ))}
            </div>
        </div>
    );
};