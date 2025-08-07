import React from 'react';

interface MobileMenuSectionProps {
    title: string;
    items: string[];
}

export const MobileMenuSection: React.FC<MobileMenuSectionProps> = ({ title, items }) => {
    return (
        <div>
            <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
            <ul className="space-y-3 text-gray-600">
                {items.map((item) => (
                    <li key={item}>
                        <a href="#" className="hover:text-sky-600 transition-colors">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
