'use client';

import React from 'react';

interface MobileNavTabsProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const MobileNavTabs: React.FC<MobileNavTabsProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="lg:hidden pb-4">
            <div className="flex items-center bg-white/70 backdrop-blur-md rounded-full p-1 border border-sky-200/50 shadow-lg">
                {['stays', 'experiences', 'online'].map((tab) => (
                    <button
                        key={tab}
                        className={`flex-1 px-3 py-2 text-xs font-medium rounded-full transition-all duration-300 capitalize ${activeTab === tab
                            ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg'
                            : 'text-gray-600 hover:text-sky-700 hover:bg-white/80'
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === 'online' ? 'Online' : tab}
                    </button>
                ))}
            </div>
        </div>
    );
};