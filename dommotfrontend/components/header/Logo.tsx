/**
 * Logo Component
 * 
 * Brand logo component for the Dommot platform featuring animated gradient backgrounds,
 * sparkle effects, and responsive typography. Provides visual brand identity across
 * all platform interfaces with engaging animations and modern styling.
 * 
 * Key Features:
 * - Animated gradient background with pulsing glow effect
 * - Rotating sparkle icon animation
 * - Responsive text sizing (xl on mobile, 2xl on desktop)
 * - Modern gradient text with clipping for brand consistency
 * - Blur and shadow effects for depth and visual interest
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

/**
 * Logo - Brand logo with animated effects
 * 
 * Renders the complete Dommot brand logo including animated background,
 * circular brand symbol, sparkle animation, and gradient typography.
 * Designed to be visually striking while maintaining accessibility.
 * 
 * @returns {JSX.Element} Rendered logo component
 */
export const Logo: React.FC = () => {
    return (
        // Clickable logo container that routes to home page
        <Link 
            href="/" 
            className="flex items-center flex-shrink-0 hover:opacity-90 transition-opacity duration-200 cursor-pointer"
        >
            {/* Icon container with animated background effects */}
            <div className="relative">
                {/* Animated glow effect background - creates depth and visual interest */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl blur opacity-75 animate-pulse"></div>
                
                {/* Main icon background with gradient and proper positioning */}
                <div className="relative flex items-center bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 p-2.5 rounded-2xl shadow-lg">
                    {/* Brand symbol - circular design representing completeness and unity */}
                    <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16 1C7.163 1 0 8.163 0 17s7.163 16 16 16 16-7.163 16-16S24.837 1 16 1zm0 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 24.732 2 17 8.268 3 16 3z" />
                    </svg>
                    
                    {/* Animated sparkle icon for dynamism and premium feel */}
                    <Sparkles className="w-3 h-3 text-white ml-1 animate-spin" />
                </div>
            </div>
            
            {/* Brand text with Airbnb-style sizing and gradient styling */}
            <span className="ml-3 text-lg lg:text-xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
                DOMMOT
            </span>
        </Link>
    );
};
