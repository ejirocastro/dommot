import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadMoreButton: React.FC = () => {
    return (
        <div className="flex justify-center mt-12">
            <button className="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <div className="flex items-center space-x-2">
                    <span>Show more places</span>
                    <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
            </button>
        </div>
    );
};
