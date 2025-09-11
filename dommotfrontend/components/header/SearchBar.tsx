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

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Calendar } from 'lucide-react';
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
    const router = useRouter();
    const [nights, setNights] = useState<number>(0);
    const [showGuestDropdown, setShowGuestDropdown] = useState<boolean>(false);
    const guestDropdownRef = useRef<HTMLDivElement>(null);

    // Calculate nights when check-in or check-out dates change
    useEffect(() => {
        if (searchData.checkIn && searchData.checkOut) {
            const checkInDate = new Date(searchData.checkIn);
            const checkOutDate = new Date(searchData.checkOut);

            if (checkOutDate > checkInDate) {
                const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
                const nightsCount = Math.ceil(timeDifference / (1000 * 3600 * 24));
                setNights(nightsCount);
            } else {
                setNights(0);
            }
        } else {
            setNights(0);
        }
    }, [searchData.checkIn, searchData.checkOut]);

    // Handle clicking outside guest dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target as Node)) {
                setShowGuestDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Format date for display (Airbnb style)
    const formatDate = (dateString: string) => {
        if (!dateString) return 'Add dates';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    // Handle search button click
    const handleSearch = () => {
        const params = new URLSearchParams();

        if (searchData.where.trim()) {
            params.set('where', searchData.where.trim());
        }
        if (searchData.checkIn) params.set('checkIn', searchData.checkIn);
        if (searchData.checkOut) params.set('checkOut', searchData.checkOut);
        if (searchData.guests >= 1) params.set('guests', searchData.guests.toString());
        if (searchData.infants > 0) params.set('infants', searchData.infants.toString());
        if (searchData.pets > 0) params.set('pets', searchData.pets.toString());

        router.push(`/search?${params.toString()}`);
    };

    return (
        /* Search bar container with responsive padding */
        <div className="pb-4 lg:pb-6">
            {/* Main search container with backdrop blur and hover effects */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center bg-white/90 backdrop-blur-md border-2 border-sky-200/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 relative"
                style={{ overflow: 'visible' }}>

                {/* Mobile Search Layout - Enhanced with date and guest selection */}
                <div className="lg:hidden">
                    <div className="p-4 space-y-4">
                        {/* Location */}
                        <div>
                            <div className="text-xs font-semibold text-sky-800 mb-1">Where to?</div>
                            <input
                                type="text"
                                placeholder="Search destinations"
                                className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none font-medium border-b border-gray-200 pb-2"
                                value={searchData.where}
                                onChange={(e) => setSearchData({ ...searchData, where: e.target.value })}
                            />
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-xs font-semibold text-sky-800 mb-1">Check in</div>
                                <input
                                    type="date"
                                    className="w-full text-sm text-gray-700 bg-transparent outline-none font-medium border-b border-gray-200 pb-2"
                                    value={searchData.checkIn}
                                    onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-sky-800 mb-1">Check out</div>
                                <input
                                    type="date"
                                    className="w-full text-sm text-gray-700 bg-transparent outline-none font-medium border-b border-gray-200 pb-2"
                                    value={searchData.checkOut}
                                    onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                                    min={searchData.checkIn || new Date().toISOString().split('T')[0]}
                                />
                            </div>
                        </div>

                        {/* Guests */}
                        <div>
                            <div className="text-xs font-semibold text-sky-800 mb-2">Guests</div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">
                                    {searchData.guests >= 1
                                        ? `${searchData.guests} guest${searchData.guests > 1 ? 's' : ''}`
                                        : 'Add guests'
                                    }
                                </span>
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => setSearchData(prev => ({
                                            ...prev,
                                            guests: Math.max(1, prev.guests - 1)
                                        }))}
                                        className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors disabled:opacity-50"
                                        disabled={searchData.guests <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="w-8 text-center text-sm">{searchData.guests}</span>
                                    <button
                                        onClick={() => setSearchData(prev => ({
                                            ...prev,
                                            guests: prev.guests + 1
                                        }))}
                                        className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={handleSearch}
                            className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <Search className="w-5 h-5" />
                                <span>Search</span>
                            </div>
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

                    {/* Check-in date field - Simple clickable version */}
                    <div className="flex-[1]">
                        <div className="w-full px-6 py-4 hover:bg-sky-50/50 transition-all duration-300 group border-r border-sky-100/50 relative">
                            <div className="text-xs font-semibold text-sky-800 mb-1 group-hover:text-sky-700 transition-colors">
                                Check in
                            </div>
                            <input
                                type="date"
                                className="w-full text-sm font-medium text-gray-700 bg-transparent border-0 outline-none cursor-pointer"
                                value={searchData.checkIn}
                                onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                                min={new Date().toISOString().split('T')[0]}
                                style={{
                                    colorScheme: 'light',
                                    fontSize: '14px',
                                    fontFamily: 'inherit'
                                }}
                                onFocus={(e) => e.target.showPicker?.()}
                            />
                        </div>
                    </div>

                    {/* Check-out date field - Simple clickable version */}
                    <div className="flex-[1]">
                        <div className="w-full px-6 py-4 hover:bg-sky-50/50 transition-all duration-300 group border-r border-sky-100/50 relative">
                            <div className="text-xs font-semibold text-sky-800 mb-1 group-hover:text-sky-700 transition-colors">
                                Check out {nights > 0 && <span className="text-gray-500">• {nights} nights</span>}
                            </div>
                            <input
                                type="date"
                                className="w-full text-sm font-medium text-gray-700 bg-transparent border-0 outline-none cursor-pointer"
                                value={searchData.checkOut}
                                onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                                min={searchData.checkIn || new Date().toISOString().split('T')[0]}
                                style={{
                                    colorScheme: 'light',
                                    fontSize: '14px',
                                    fontFamily: 'inherit'
                                }}
                                onFocus={(e) => e.target.showPicker?.()}
                            />
                        </div>
                    </div>

                    {/* Guest selection field - Medium size for guest picker */}
                    <div className="flex-[1.3] relative" ref={guestDropdownRef} style={{ overflow: 'visible' }}>
                        <div
                            className="w-full px-6 py-4 hover:bg-sky-50/50 transition-all duration-300 group cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowGuestDropdown(prev => !prev);
                            }}
                        >
                            <div className="text-xs font-semibold text-sky-800 mb-1 group-hover:text-sky-700 transition-colors">
                                Who
                            </div>
                            <div className="text-sm font-medium text-gray-700">
                                {searchData.guests >= 1
                                    ? `${searchData.guests} guest${searchData.guests > 1 ? 's' : ''}`
                                    : 'Add guests'
                                }
                                {searchData.infants > 0 && `, ${searchData.infants} infant${searchData.infants > 1 ? 's' : ''}`}
                                {searchData.pets > 0 && `, ${searchData.pets} pet${searchData.pets > 1 ? 's' : ''}`}
                            </div>
                        </div>

                        {/* Guest selection dropdown */}
                        {showGuestDropdown && (
                            <div
                                className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 space-y-4 mt-1"
                                style={{
                                    zIndex: 10000,
                                    minWidth: '320px',
                                    width: 'max-content'
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Adults */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-gray-900">Adults</div>
                                        <div className="text-sm text-gray-500">Ages 13 or above</div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSearchData(prev => ({
                                                    ...prev,
                                                    guests: Math.max(1, prev.guests - 1)
                                                }));
                                            }}
                                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors disabled:opacity-50"
                                            disabled={searchData.guests <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{searchData.guests}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSearchData(prev => ({
                                                    ...prev,
                                                    guests: prev.guests + 1
                                                }));
                                            }}
                                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Infants */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-gray-900">Infants</div>
                                        <div className="text-sm text-gray-500">Under 2</div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSearchData(prev => ({
                                                    ...prev,
                                                    infants: Math.max(0, prev.infants - 1)
                                                }));
                                            }}
                                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors disabled:opacity-50"
                                            disabled={searchData.infants <= 0}
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{searchData.infants}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSearchData(prev => ({
                                                    ...prev,
                                                    infants: prev.infants + 1
                                                }));
                                            }}
                                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Pets */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-gray-900">Pets</div>
                                        <div className="text-sm text-gray-500">Bringing a service animal?</div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSearchData(prev => ({
                                                    ...prev,
                                                    pets: Math.max(0, prev.pets - 1)
                                                }));
                                            }}
                                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors disabled:opacity-50"
                                            disabled={searchData.pets <= 0}
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{searchData.pets}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSearchData(prev => ({
                                                    ...prev,
                                                    pets: prev.pets + 1
                                                }));
                                            }}
                                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Desktop search button with enhanced animations */}
                    <div className="flex items-center justify-center pr-2">
                        <button
                            onClick={handleSearch}
                            className="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};