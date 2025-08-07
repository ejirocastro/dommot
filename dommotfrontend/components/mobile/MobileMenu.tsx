'use client';

import React from 'react';
import { X } from 'lucide-react';
import { MobileMenuSection } from './MobileMenuSection';

interface MobileMenuProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
    if (!mobileMenuOpen) return null;

    const menuSections = [
        {
            title: "Book",
            items: ["Stays", "Experiences", "Services"]
        },
        {
            title: "Host",
            items: ["DOMMOT your home", "Host an experience"]
        },
        {
            title: "Support",
            items: ["Help Center", "Contact us"]
        }
    ];

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden">
            <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {menuSections.map((section) => (
                            <MobileMenuSection key={section.title} title={section.title} items={section.items} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
