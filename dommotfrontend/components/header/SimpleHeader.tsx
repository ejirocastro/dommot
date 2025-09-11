'use client';

import React, { useState } from 'react';
import { Globe, Menu } from 'lucide-react';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';

/**
 * SimpleHeader Component
 * 
 * Simplified header for pages that don't need search or navigation tabs.
 * Used for pages like messages, profile, settings, etc.
 * Only shows logo and user menu.
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

interface SimpleHeaderProps {
    scrollY?: number;
    mobileMenuOpen?: boolean;
    setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SimpleHeader: React.FC<SimpleHeaderProps> = ({
    scrollY = 0,
    mobileMenuOpen = false,
    setMobileMenuOpen = () => {}
}) => {
    // State for user dropdown menu
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            scrollY > 20 
                ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-sky-100/50' 
                : 'bg-white/80 backdrop-blur-sm shadow-sm'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Brand logo component */}
                    <Logo />

                    {/* Right Menu Section - User controls and actions */}
                    <div className="flex items-center space-x-2 lg:space-x-3">
                        {/* Language/Region selector button */}
                        <button className="p-3 hover:bg-sky-50 rounded-full transition-all duration-300 hover:shadow-lg">
                            <Globe className="w-5 h-5 text-sky-700" />
                        </button>

                        {/* Mobile menu toggle button - Mobile only */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-3 hover:bg-sky-50 rounded-full transition-all duration-300 hover:shadow-lg"
                        >
                            <Menu className="w-5 h-5 text-sky-700" />
                        </button>
                        
                        {/* User dropdown menu */}
                        <UserMenu 
                            isOpen={userMenuOpen} 
                            setIsOpen={setUserMenuOpen} 
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};