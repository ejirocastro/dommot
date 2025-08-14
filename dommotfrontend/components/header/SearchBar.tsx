/**
 * SearchBar Component
 * 
 * Advanced search interface component providing location, date, and guest filtering
 * functionality with responsive design optimized for both desktop and mobile users.
 * Features dynamic layouts, smooth animations, and Airbnb-inspired design patterns.
 * 
 * Key Features:
 * - Responsive design with separate mobile and desktop layouts
 * - Real-time search input handling with controlled components
 * - Optimized field proportions for better user experience
 * - Smooth hover effects and button animations
 * - Integration with global search state management
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';
import { Search } from 'lucide-react';
import { SearchField } from './SearchField';
import { SearchData } from '../../types';

/**
 * SearchBarProps - Props interface for SearchBar component
 * 
 * @interface SearchBarProps
 * @property {SearchData} searchData - Current search form data including location, dates, and guests
 * @property {function} setSearchData - State setter function for updating search criteria
 */
interface SearchBarProps {
    searchData: SearchData;
    setSearchData: React.Dispatch<React.SetStateAction<SearchData>>;
}

/**
 * SearchBar - Main search interface component
 * 
 * Renders a comprehensive search bar with location, date, and guest selection fields.
 * Automatically adapts layout for mobile and desktop viewports, providing optimal
 * user experience across all devices.
 * 
 * @param {SearchBarProps} props - Component props containing search state and handlers
 * @returns {JSX.Element} Rendered search bar component
 */
export const SearchBar: React.FC<SearchBarProps> = ({ searchData, setSearchData }) => {
    return (
        /* Search bar container with responsive padding */
        <div className="pb-4 lg:pb-6">
            {/* Main search container with backdrop blur and hover effects */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center bg-white/90 backdrop-blur-md border-2 border-sky-200/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                
                {/* Mobile Search Layout - Simplified single-field interface */}
                <div className="lg:hidden">
                    <div className="flex items-center p-4">
                        {/* Mobile search input field */}
                        <div className="flex-1">
                            <div className="text-xs font-semibold text-sky-800 mb-1">Where to?</div>
                            <input
                                type="text"
                                placeholder="Search destinations"
                                className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none font-medium"
                                value={searchData.where}
                                onChange={(e) => setSearchData({ ...searchData, where: e.target.value })}
                            />
                        </div>
                        {/* Mobile search button with gradient styling */}
                        <button className="ml-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Desktop Search Layout - Multi-field interface with optimized proportions */}
                <div className="hidden lg:flex flex-1">
                    {/* Location search field - Largest field for destination input */}
                    <div className="flex-[2]">
                        <SearchField
                            label="Where"
                            placeholder="Search destinations"
                            value={searchData.where}
                            onChange={(e) => setSearchData({ ...searchData, where: e.target.value })}
                            hasBorder={true}
                        />
                    </div>
                    
                    {/* Check-in date field - Compact sizing for date input */}
                    <div className="flex-[1]">
                        <SearchField
                            label="Check in"
                            placeholder="Add dates"
                            value={searchData.checkIn}
                            onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                            hasBorder={true}
                        />
                    </div>
                    
                    {/* Check-out date field - Matching size with check-in */}
                    <div className="flex-[1]">
                        <SearchField
                            label="Check out"
                            placeholder="Add dates"
                            value={searchData.checkOut}
                            onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                            hasBorder={true}
                        />
                    </div>
                    
                    {/* Guest selection field - Medium size for guest picker */}
                    <div className="flex-[1.3]">
                        <SearchField
                            label="Who"
                            placeholder="Add guests"
                            hasBorder={false}
                        />
                    </div>
                    
                    {/* Desktop search button with enhanced animations */}
                    <div className="flex items-center justify-center pr-2">
                        <button className="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};