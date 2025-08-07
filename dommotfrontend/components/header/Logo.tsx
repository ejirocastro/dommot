import React from 'react';
import { Sparkles } from 'lucide-react';

export const Logo: React.FC = () => {
    return (
        <div className="flex items-center flex-shrink-0">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl blur opacity-75 animate-pulse"></div>
                <div className="relative flex items-center bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 p-2.5 rounded-2xl shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16 1C7.163 1 0 8.163 0 17s7.163 16 16 16 16-7.163 16-16S24.837 1 16 1zm0 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 24.732 2 17 8.268 3 16 3z" />
                    </svg>
                    <Sparkles className="w-3 h-3 text-white ml-1 animate-spin" />
                </div>
            </div>
            <span className="ml-3 text-xl lg:text-2xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
                DOMMOT
            </span>
        </div>
    );
};
