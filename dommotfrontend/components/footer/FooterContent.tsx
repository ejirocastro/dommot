import React from 'react';
import { FooterSection } from './FooterSection';

export const FooterContent: React.FC = () => {
    const footerSections = [
        {
            title: "Support",
            links: ["Help Center", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options"]
        },
        {
            title: "Hosting",
            links: ["DOMMOT your home", "AirCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibly"]
        },
        {
            title: "DOMMOT",
            links: ["Newsroom", "New features", "Careers", "Investors", "Gift cards"]
        },
        {
            title: "Connect",
            links: ["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
                <FooterSection key={section.title} title={section.title} links={section.links} />
            ))}
        </div>
    );
};