'use client';

import React, { useState } from 'react';
import {
    Header,
    Footer,
    MobileMenu,
    AnimatedBackground
} from '@/components';
import {
    ServiceGrid,
    OnlineCategoriesSection
} from '@/components/onlineServices';
import { useScrollPosition } from '@/hooks';
import { onlineCategories, onlineServices } from '@/data';
import { SearchData } from '@/types';

const OnlineExperiencesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('online');
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
        <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 relative overflow-hidden">
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

            <OnlineCategoriesSection scrollY={scrollY} categories={onlineCategories} />

            <ServiceGrid
                services={onlineServices}
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

export default OnlineExperiencesPage;