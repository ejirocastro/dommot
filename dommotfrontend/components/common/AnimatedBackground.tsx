/**
 * AnimatedBackground Component
 * 
 * Ambient animated background component that creates visual depth and atmosphere
 * through floating gradient orbs with pulse animations. Provides subtle visual
 * enhancement without interfering with content readability or user interactions.
 * 
 * Key Features:
 * - Three layered gradient orbs with different positioning and delays
 * - Pulse animations with staggered timing for dynamic movement
 * - Blur effects for soft, ambient lighting
 * - Pointer events disabled to prevent interaction interference
 * - Absolute positioning for background layer placement
 * - Sky color palette for brand consistency
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';

/**
 * AnimatedBackground - Ambient background animation component
 * 
 * Renders multiple animated gradient orbs positioned strategically across
 * the background to create visual depth and atmospheric effects. Uses
 * CSS animations and blur effects for smooth, subtle movement.
 * 
 * @returns {JSX.Element} Rendered animated background component
 */
export const AnimatedBackground: React.FC = () => {
    return (
        // Full-screen container with overflow hidden and no pointer events
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Top-right gradient orb - first animation layer */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-300/15 to-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Bottom-left gradient orb - second animation layer with delay */}
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-sky-200/15 to-sky-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Center gradient orb - third animation layer with longer delay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-sky-100/10 to-sky-300/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
    );
};