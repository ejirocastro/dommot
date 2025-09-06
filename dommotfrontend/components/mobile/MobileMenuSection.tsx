import React from 'react';

interface MobileMenuSectionProps {
    title: string;
    items: string[];
}

const getItemLink = (item: string): string => {
    const linkMap: { [key: string]: string } = {
        'Home': '/',
        'Stays': '/',
        'Experiences': '/experiences',
        'Online Experiences': '/online',
        'Help': '/help',
        'About': '/about',
        'Contact': '/contact',
        'Support': '/support',
        'Community': '/community',
        'Host': '/host',
        'Login': '/login',
        'Sign up': '/signup'
    };
    return linkMap[item] || '#';
};

export const MobileMenuSection: React.FC<MobileMenuSectionProps> = ({ title, items }) => {
    return (
        <div>
            <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
            <ul className="space-y-3 text-gray-600">
                {items.map((item) => (
                    <li key={item}>
                        <a href={getItemLink(item)} className="hover:text-sky-600 transition-colors">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
