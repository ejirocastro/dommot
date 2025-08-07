import React from 'react';
import { Filter } from 'lucide-react';

export const FilterButtons: React.FC = () => {
    return (
        <div className="hidden lg:flex items-center space-x-3 ml-6 flex-shrink-0">
            <button className="flex items-center space-x-2 border-2 border-sky-200/50 rounded-xl px-4 py-3 hover:border-sky-400 hover:bg-sky-50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg">
                <Filter className="w-4 h-4 text-sky-700" />
                <span className="text-sm font-medium text-sky-800">Filters</span>
            </button>
            <button className="flex items-center space-x-2 border-2 border-sky-200/50 rounded-xl px-4 py-3 hover:border-sky-400 hover:bg-sky-50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg">
                <span className="text-sm font-medium text-sky-800">Display total</span>
            </button>
        </div>
    );
};
