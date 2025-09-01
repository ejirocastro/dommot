'use client';

import React, { useState } from 'react';
import { AccountSettingsSidebar } from './AccountSettingsSidebar';
import { PersonalInformation } from './PersonalInformation';
import { LoginSecurity } from './LoginSecurity';
import { Privacy } from './Privacy';
import { Notifications } from './Notifications';
import { LanguagesCurrency } from './LanguagesCurrency';
import { Logo } from '@/components/header/Logo';

export type SettingsSection =
  | 'personal-information'
  | 'login-security'
  | 'privacy'
  | 'notifications'
  | 'taxes'
  | 'payments'
  | 'languages-currency'
  | 'travel-work'
  | 'hosting-tools';

export const AccountSettings: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SettingsSection>('personal-information');

  const renderContent = () => {
    switch (activeSection) {
      case 'personal-information':
        return <PersonalInformation />;
      case 'login-security':
        return <LoginSecurity />;
      case 'privacy':
        return <Privacy />;
      case 'notifications':
        return <Notifications />;
      case 'taxes':
        return <div className="p-6">Taxes content coming soon...</div>;
      case 'payments':
        return <div className="p-6">Payments content coming soon...</div>;
      case 'languages-currency':
        return <LanguagesCurrency />;
      case 'travel-work':
        return <div className="p-6">Travel for Work content coming soon...</div>;
      case 'hosting-tools':
        return <div className="p-6">Professional Hosting Tools content coming soon...</div>;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="absolute top-4 left-4">
        <Logo />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account settings</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        <div className="flex gap-8">
          <AccountSettingsSidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <div className="flex-1 bg-white rounded-2xl shadow-lg border border-sky-100">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};