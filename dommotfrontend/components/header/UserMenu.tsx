/**
 * UserMenu Component
 * 
 * Dropdown menu component for user account actions, inspired by Airbnb's design
 * but maintaining Dommot's visual identity. Features smooth animations, click-outside
 * functionality, and comprehensive menu options for user account management.
 * 
 * Key Features:
 * - Airbnb-style dropdown with right alignment
 * - Click outside to close functionality
 * - Smooth entrance/exit animations
 * - Glass morphism design consistent with site theme
 * - Comprehensive menu options (Wishlists, Trips, Messages, etc.)
 * - Responsive hover states and visual feedback
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React, { useRef, useEffect } from 'react';
import { Menu, User, Heart, Plane, MessageSquare, Bell, UserCircle, Settings, Home, UserPlus, HelpCircle, LogOut } from 'lucide-react';

/**
 * UserMenuProps - Props interface for the UserMenu component
 * 
 * @interface UserMenuProps
 * @property {boolean} isOpen - Controls visibility of the dropdown menu
 * @property {function} setIsOpen - State setter for toggling menu visibility
 */
interface UserMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * UserMenu - Dropdown menu component for user account actions
 * 
 * Renders a user avatar button with a dropdown menu containing navigation
 * options for user account management. Implements click-outside functionality
 * and smooth animations for enhanced user experience.
 * 
 * @param {UserMenuProps} props - Component props containing dropdown state and handlers
 * @returns {JSX.Element} Rendered user menu component with dropdown
 */
export const UserMenu: React.FC<UserMenuProps> = ({ isOpen, setIsOpen }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    /**
     * Handle click outside functionality to close dropdown
     */
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                buttonRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setIsOpen]);

    /**
     * Toggle dropdown visibility
     */
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    /**
     * Menu items configuration with icons and labels
     */
    const menuItems: Array<{
        icon: React.ComponentType<{className?: string}>;
        label: string;
        href: string;
        divider?: boolean;
        danger?: boolean;
    }> = [
        // Travel & Booking Section
        { icon: Heart, label: 'Wishlists', href: '#' },
        { icon: Plane, label: 'Trips', href: '#' },
        
        // Communication Section
        { icon: MessageSquare, label: 'Messages', href: '#', divider: true },
        { icon: Bell, label: 'Notifications', href: '#' },
        
        // Account Section
        { icon: UserCircle, label: 'Profile', href: '#', divider: true },
        { icon: Settings, label: 'Settings', href: '#' },
        
        // Hosting Section
        { icon: Home, label: 'Become a host', href: '#', divider: true },
        { icon: UserPlus, label: 'Refer a host', href: '#' },
        
        // Support Section
        { icon: HelpCircle, label: 'Help centre', href: '#', divider: true },
        
        // Logout Section
        { icon: LogOut, label: 'Logout', href: '#', divider: true, danger: true },
    ];

    return (
        <div className="relative">
            {/* User menu trigger button */}
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="flex items-center space-x-2 border-2 border-sky-200/50 rounded-full p-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-sky-300"
            >
                {/* Hamburger menu icon */}
                <Menu className="w-4 h-4 text-sky-700" />
                
                {/* User avatar with gradient background */}
                <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-4 h-4 text-white" />
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute right-0 top-full mt-3 w-60 bg-white/95 backdrop-blur-xl border border-sky-200/30 rounded-3xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300 ring-1 ring-black/5"
                >
                    {menuItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <React.Fragment key={item.label}>
                                {item.divider && (
                                    <div className="border-t border-sky-100/60 my-2 mx-3"></div>
                                )}
                                <a
                                    href={item.href}
                                    className={`flex items-center space-x-3 mx-2 px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 group cursor-pointer ${
                                        item.danger 
                                            ? 'text-red-600 hover:text-red-700 hover:bg-red-50/80 hover:shadow-lg hover:shadow-red-100/50 hover:scale-[1.02] transform'
                                            : 'text-gray-700 hover:text-sky-700 hover:bg-sky-50/80 hover:shadow-lg hover:shadow-sky-100/50 hover:scale-[1.02] transform'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <IconComponent className={`w-4 h-4 transition-all duration-300 ${
                                        item.danger 
                                            ? 'text-red-500 group-hover:text-red-600 group-hover:scale-110'
                                            : 'text-sky-600 group-hover:text-sky-700 group-hover:scale-110'
                                    }`} />
                                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">{item.label}</span>
                                </a>
                            </React.Fragment>
                        );
                    })}
                </div>
            )}
        </div>
    );
};