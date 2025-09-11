'use client';

import React, { useState } from 'react';
import { Globe, Menu } from 'lucide-react';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';

/**
 * BasicHeader Component
 * 
 * Minimal header for auth pages and other simple pages.
 * Does not require any props and manages its own state.
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

export const BasicHeader: React.FC = () => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand logo component */}
                    <Logo />

                    {/* Right Menu Section - User controls and actions */}
                    <div className="flex items-center space-x-2 lg:space-x-3">
                        {/* Language/Region selector button */}
                        <button className="p-2 hover:bg-sky-50 rounded-full transition-all duration-300">
                            <Globe className="w-5 h-5 text-sky-700" />
                        </button>

                        {/* Mobile menu toggle button - Mobile only */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 hover:bg-sky-50 rounded-full transition-all duration-300"
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
