import React from 'react';
import { Globe } from 'lucide-react';

export const FooterBottom: React.FC = () => {
    return (
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>© 2024 DOMMOT, Inc.</span>
                <a href="#" className="hover:text-sky-300 transition-colors">Privacy</a>
                <a href="#" className="hover:text-sky-300 transition-colors">Terms</a>
                <a href="#" className="hover:text-sky-300 transition-colors">Sitemap</a>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-sky-300 transition-colors">
                    <Globe className="w-4 h-4" />
                    <span>English (US)</span>
                </button>
                <button className="text-sm text-gray-400 hover:text-sky-300 transition-colors">$ USD</button>
            </div>
        </div>
    );
};