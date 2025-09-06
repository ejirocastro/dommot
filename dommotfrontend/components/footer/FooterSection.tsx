import React from 'react';

interface FooterSectionProps {
    title: string;
    links: string[];
}

const getLinkUrl = (link: string): string => {
    const linkMap: { [key: string]: string } = {
        'Home': '/',
        'About': '/about',
        'Careers': '/careers',
        'Press': '/press',
        'Blog': '/blog',
        'Terms': '/terms',
        'Privacy': '/privacy',
        'Help': '/help',
        'Support': '/support',
        'Community': '/community',
        'Hosting': '/host',
        'Host': '/host',
        'Host an experience': '/host/create-experience',
        'Invite friends': '/refer',
        'Gift cards': '/gift-cards',
        'Trust & Safety': '/trust-safety',
        'Accessibility': '/accessibility'
    };
    return linkMap[link] || '#';
};

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
    return (
        <div>
            <h3 className="font-semibold mb-4 text-sky-300">{title}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
                {links.map((link) => (
                    <li key={link}>
                        <a href={getLinkUrl(link)} className="hover:text-sky-300 transition-colors">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};