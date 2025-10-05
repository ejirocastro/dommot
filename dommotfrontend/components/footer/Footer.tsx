import React from 'react';
import { FooterContent } from './FooterContent';
import { FooterBottom } from './FooterBottom';

export const Footer: React.FC = () => {
    return (
        <footer role="contentinfo" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/10 to-sky-800/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <FooterContent />
                <FooterBottom />
            </div>
        </footer>
    );
};
