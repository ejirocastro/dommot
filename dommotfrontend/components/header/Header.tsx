'use client';

import React from 'react';
import { TopNavigation } from './TopNavigation';
import { MobileNavTabs } from './MobileNavTabs';
import { SearchBar } from './SearchBar';
import { SearchData } from '../../types';

interface HeaderProps {
    scrollY: number;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    searchData: SearchData;
    setSearchData: React.Dispatch<React.SetStateAction<SearchData>>;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrollY > 20
            ? 'bg-white/95 backdrop-blur-xl border-b border-sky-200/50 shadow-2xl'
            : 'bg-white/90 backdrop-blur-md border-b border-sky-200/30 shadow-lg'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TopNavigation
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
                <MobileNavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar searchData={searchData} setSearchData={setSearchData} />
            </div>
        </header>
    );
};
