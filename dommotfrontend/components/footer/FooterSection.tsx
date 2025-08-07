import React from 'react';

interface FooterSectionProps {
    title: string;
    links: string[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
    return (
        <div>
            <h3 className="font-semibold mb-4 text-sky-300">{title}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
                {links.map((link) => (
                    <li key={link}>
                        <a href="#" className="hover:text-sky-300 transition-colors">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};