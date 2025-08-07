'use client';

import React from 'react';
import { SearchFieldProps } from '../../types';

export const SearchField: React.FC<SearchFieldProps> = ({
    label,
    placeholder,
    value,
    onChange,
    hasBorder
}) => {
    return (
        <div className={`flex-1 px-6 py-4 hover:bg-sky-50/50 transition-all duration-300 group ${hasBorder ? 'border-r border-sky-100/50' : ''}`}>
            <div className="text-xs font-semibold text-sky-800 mb-1 group-hover:text-sky-700 transition-colors">{label}</div>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none font-medium"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};