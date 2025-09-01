'use client';

import React, { useState } from 'react';
import {
    Globe,
    DollarSign,
    Languages,
    MapPin,
    Save
} from 'lucide-react';

export const LanguagesCurrency: React.FC = () => {
    const [settings, setSettings] = useState({
        preferredLanguage: 'English',
        secondaryLanguage: 'None',
        autoTranslate: true,
        preferredCurrency: 'USD',
        paymentCurrencyConversion: 'preferred',
        regionFormat: 'US'
    });

    const languages = [
        'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 
        'Dutch', 'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic'
    ];

    const currencies = [
        'USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CHF', 'CNY', 'KRW', 'BRL'
    ];

    const regions = [
        { code: 'US', name: 'United States' },
        { code: 'UK', name: 'United Kingdom' },
        { code: 'EU', name: 'European Union' },
        { code: 'CA', name: 'Canada' },
        { code: 'AU', name: 'Australia' },
        { code: 'JP', name: 'Japan' }
    ];

    const handleLanguageChange = (field: 'preferredLanguage' | 'secondaryLanguage', value: string) => {
        setSettings(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleCurrencyChange = (field: 'preferredCurrency', value: string) => {
        setSettings(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleToggle = (setting: 'autoTranslate') => {
        setSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    const handleRadioChange = (field: 'paymentCurrencyConversion' | 'regionFormat', value: string) => {
        setSettings(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSaveChanges = () => {
        console.log('Saving changes:', settings);
        // Here you would save the settings to your backend
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-3 mb-3">
                    <Globe className="w-6 h-6 text-gray-700" />
                    <h1 className="text-2xl font-bold text-gray-900">Language & Currency</h1>
                </div>
                <p className="text-gray-600">
                    Set your language and currency preferences.
                </p>
            </div>

            {/* Language Settings */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Languages className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Language Settings</h3>
                    </div>
                </div>
                <div className="p-6 space-y-6">
                    {/* Preferred Language */}
                    <div>
                        <h4 className="text-base font-medium text-gray-900 mb-2">Preferred Language</h4>
                        <p className="text-sm text-gray-600 mb-3">Choose your display language</p>
                        <select
                            value={settings.preferredLanguage}
                            onChange={(e) => handleLanguageChange('preferredLanguage', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        >
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>{lang}</option>
                            ))}
                        </select>
                    </div>

                    {/* Secondary Language */}
                    <div className="border-t border-gray-100 pt-6">
                        <h4 className="text-base font-medium text-gray-900 mb-2">Secondary Language</h4>
                        <p className="text-sm text-gray-600 mb-3">Add an additional language for content suggestions</p>
                        <select
                            value={settings.secondaryLanguage}
                            onChange={(e) => handleLanguageChange('secondaryLanguage', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        >
                            <option value="None">None</option>
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>{lang}</option>
                            ))}
                        </select>
                    </div>

                    {/* Auto-Translate */}
                    <div className="border-t border-gray-100 pt-6">
                        <div className="flex items-center justify-between">
                            <div className="flex-1 mr-6">
                                <h4 className="text-base font-medium text-gray-900 mb-2">Auto-Translate</h4>
                                <p className="text-sm text-gray-600">
                                    Turn on/off automatic translation of listings, reviews, or messages
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className={`text-sm font-medium ${settings.autoTranslate ? 'text-gray-900' : 'text-gray-500'}`}>
                                    {settings.autoTranslate ? 'On' : 'Off'}
                                </span>
                                <button
                                    onClick={() => handleToggle('autoTranslate')}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.autoTranslate ? 'bg-gray-900' : 'bg-gray-200'}`}
                                    role="switch"
                                    aria-checked={settings.autoTranslate}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${settings.autoTranslate ? 'translate-x-6' : 'translate-x-1'}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Currency Settings */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <DollarSign className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Currency Settings</h3>
                    </div>
                </div>
                <div className="p-6 space-y-6">
                    {/* Preferred Currency */}
                    <div>
                        <h4 className="text-base font-medium text-gray-900 mb-2">Preferred Currency</h4>
                        <p className="text-sm text-gray-600 mb-3">Select default currency for prices</p>
                        <select
                            value={settings.preferredCurrency}
                            onChange={(e) => handleCurrencyChange('preferredCurrency', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        >
                            {currencies.map((currency) => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>

                    {/* Payment Currency Conversion */}
                    <div className="border-t border-gray-100 pt-6">
                        <h4 className="text-base font-medium text-gray-900 mb-2">Payment Currency Conversion</h4>
                        <p className="text-sm text-gray-600 mb-4">Show prices in your currency or listing's currency</p>
                        <div className="space-y-3">
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="currencyConversion"
                                    value="preferred"
                                    checked={settings.paymentCurrencyConversion === 'preferred'}
                                    onChange={() => handleRadioChange('paymentCurrencyConversion', 'preferred')}
                                    className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-500"
                                />
                                <span className="text-sm text-gray-700">Your preferred currency</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="currencyConversion"
                                    value="listing"
                                    checked={settings.paymentCurrencyConversion === 'listing'}
                                    onChange={() => handleRadioChange('paymentCurrencyConversion', 'listing')}
                                    className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-500"
                                />
                                <span className="text-sm text-gray-700">Listing's original currency</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Region Format */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Region Format</h3>
                    </div>
                </div>
                <div className="p-6">
                    <h4 className="text-base font-medium text-gray-900 mb-2">Region Format</h4>
                    <p className="text-sm text-gray-600 mb-4">Adjust date, time, and number format based on region</p>
                    <select
                        value={settings.regionFormat}
                        onChange={(e) => handleRadioChange('regionFormat', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    >
                        {regions.map((region) => (
                            <option key={region.code} value={region.code}>{region.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Apply Changes */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 mr-6">
                            <h4 className="text-base font-medium text-gray-900 mb-2">Apply Changes</h4>
                            <p className="text-sm text-gray-600">
                                Save and update across all devices
                            </p>
                        </div>
                        <button
                            onClick={handleSaveChanges}
                            className="flex items-center space-x-2 px-6 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
                        >
                            <Save className="w-4 h-4" />
                            <span>Save Changes</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};