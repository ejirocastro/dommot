'use client';

import React, { useState } from 'react';
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

const DommotHomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('stays');
    const [searchData, setSearchData] = useState<SearchData>({
        where: '',
        checkIn: '',
        checkOut: '',
        guests: 0,
        infants: 0,
        pets: 0
    });
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const scrollY = useScrollPosition();

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-sky-100 relative overflow-hidden">
            <AnimatedBackground />

            <Header
                scrollY={scrollY}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                searchData={searchData}
                setSearchData={setSearchData}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <CategoriesSection scrollY={scrollY} categories={categories} />

            <ListingsGrid
                listings={listings}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                favorites={favorites}
                setFavorites={setFavorites}
            />

            <Footer />

            <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />
        </div>
    );
};

export default DommotHomePage;