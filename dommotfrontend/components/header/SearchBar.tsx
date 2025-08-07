import React from 'react';
import { Search } from 'lucide-react';
import { SearchField } from './SearchField';
import { SearchData } from '../../types';

interface SearchBarProps {
    searchData: SearchData;
    setSearchData: React.Dispatch<React.SetStateAction<SearchData>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchData, setSearchData }) => {
    return (
        <div className="pb-4 lg:pb-6">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center bg-white/90 backdrop-blur-md border-2 border-sky-200/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Mobile Search Layout */}
                <div className="lg:hidden">
                    <div className="flex items-center p-4">
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
                        <button className="ml-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Desktop Search Layout */}
                <div className="hidden lg:flex flex-1">
                    <SearchField
                        label="Where"
                        placeholder="Search destinations"
                        value={searchData.where}
                        onChange={(e) => setSearchData({ ...searchData, where: e.target.value })}
                        hasBorder={true}
                    />
                    <SearchField
                        label="Check in"
                        placeholder="Add dates"
                        value={searchData.checkIn}
                        onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                        hasBorder={true}
                    />
                    <SearchField
                        label="Check out"
                        placeholder="Add dates"
                        value={searchData.checkOut}
                        onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                        hasBorder={true}
                    />
                    <SearchField
                        label="Who"
                        placeholder="Add guests"
                        hasBorder={false}
                    />
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