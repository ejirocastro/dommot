'use client';

import React from 'react';
import { 
  User, 
  Shield, 
  Lock, 
  Bell, 
  Receipt, 
  CreditCard, 
  Globe, 
  Briefcase, 
  Home 
} from 'lucide-react';
import { SettingsSection } from './AccountSettings';

interface AccountSettingsSidebarProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

export const AccountSettingsSidebar: React.FC<AccountSettingsSidebarProps> = ({
  activeSection,
  onSectionChange
}) => {
  const menuItems = [
    {
      id: 'personal-information' as SettingsSection,
      label: 'Personal information',
      icon: User,
    },
    {
      id: 'login-security' as SettingsSection,
      label: 'Login & security',
      icon: Shield,
    },
    {
      id: 'privacy' as SettingsSection,
      label: 'Privacy',
      icon: Lock,
    },
    {
      id: 'notifications' as SettingsSection,
      label: 'Notifications',
      icon: Bell,
    },
    {
      id: 'taxes' as SettingsSection,
      label: 'Taxes',
      icon: Receipt,
    },
    {
      id: 'payments' as SettingsSection,
      label: 'Payments',
      icon: CreditCard,
    },
    {
      id: 'languages-currency' as SettingsSection,
      label: 'Languages & currency',
      icon: Globe,
    },
    {
      id: 'travel-work' as SettingsSection,
      label: 'Travel for work',
      icon: Briefcase,
    },
    {
      id: 'hosting-tools' as SettingsSection,
      label: 'Professional hosting tools',
      icon: Home,
    },
  ];

  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg border border-sky-100 p-6 h-fit">
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-sky-50 text-sky-700 border border-sky-200 shadow-sm'
                  : 'text-gray-700 hover:text-sky-700 hover:bg-sky-25 hover:shadow-sm'
              }`}
            >
              <IconComponent className={`w-5 h-5 transition-colors duration-300 ${
                isActive ? 'text-sky-600' : 'text-gray-500 group-hover:text-sky-600'
              }`} />
              <span className="text-left flex-1">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};