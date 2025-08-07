'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, User, Globe, Zap } from 'lucide-react';
import { Logo } from './Logo';

interface TopNavigationProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
    activeTab,
    setActiveTab,
    mobileMenuOpen,
    setMobileMenuOpen
}) => {
    const pathname = usePathname();

    const getTabHref = (tab: string) => {
        switch (tab) {
            case 'online':
                return '/online';
            case 'stays':
                return '/';
            case 'experiences':
                return '/experiences';
            default:
                return '/';
        }
    };

    const isActiveTab = (tab: string) => {
        if (tab === 'online' && pathname === '/online') return true;
        if (tab === 'stays' && pathname === '/') return true;
        if (tab === 'experiences' && pathname === '/experiences') return true;
        return activeTab === tab; // fallback to your original logic
    };

    return (
        <div className="flex justify-between items-center h-16 lg:h-20">
            <Logo />

            {/* Center Navigation Tabs - Hidden on mobile */}
            <div className="hidden lg:flex items-center bg-white/70 backdrop-blur-md rounded-full p-1.5 border border-sky-200/50 shadow-lg">
                {['stays', 'experiences', 'online'].map((tab) => (
                    <Link
                        key={tab}
                        href={getTabHref(tab)}
                        className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 capitalize relative ${isActiveTab(tab)
                            ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg transform scale-105'
                            : 'text-gray-600 hover:text-sky-700 hover:bg-white/80 hover:shadow-md'
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === 'online' ? 'Services' : tab}
                        {isActiveTab(tab) && (
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full blur opacity-50 animate-pulse"></div>
                        )}
                    </Link>
                ))}
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-2 lg:space-x-3">
                <button className="hidden xl:flex items-center space-x-2 text-sm font-medium text-sky-800 hover:bg-sky-50 px-4 py-2.5 rounded-full transition-all duration-300 border border-transparent hover:border-sky-200 hover:shadow-lg group">
                    <span>DOMMOT your home</span>
                    <Zap className="w-4 h-4 group-hover:text-sky-600 transition-colors" />
                </button>
                <button className="p-3 hover:bg-sky-50 rounded-full transition-all duration-300 hover:shadow-lg">
                    <Globe className="w-5 h-5 text-sky-700" />
                </button>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="flex items-center space-x-2 border-2 border-sky-200/50 rounded-full p-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-sky-300"
                >
                    <Menu className="w-4 h-4 text-sky-700" />
                    <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center shadow-lg">
                        <User className="w-4 h-4 text-white" />
                    </div>
                </button>
            </div>
        </div>
    );
};