'use client';

import React, { useState } from 'react';
import {
    Bell,
    Mail,
    Smartphone,
    MessageSquare,
    AppWindow,
    Volume2,
    Clock,
    AtSign,
    Shield
} from 'lucide-react';

export const Notifications: React.FC = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        pushNotifications: true,
        smsNotifications: false,
        inAppNotifications: true,
        soundVibration: true,
        mentionsTags: true,
        securityAlerts: true,
        notificationFrequency: 'real-time' as 'real-time' | 'daily' | 'weekly'
    });

    const handleToggle = (setting: keyof Omit<typeof settings, 'notificationFrequency'>) => {
        if (setting === 'securityAlerts') return; // Always on
        setSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    const handleFrequencyChange = (frequency: 'real-time' | 'daily' | 'weekly') => {
        setSettings(prev => ({
            ...prev,
            notificationFrequency: frequency
        }));
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-3 mb-3">
                    <Bell className="w-6 h-6 text-gray-700" />
                    <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                </div>
                <p className="text-gray-600">
                    Control how and when you receive notifications.
                </p>
            </div>

            {/* Email Notifications */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Email Notifications</h3>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 mr-6">
                            <p className="text-sm text-gray-600">
                                Choose updates you want by email
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`text-sm font-medium ${settings.emailNotifications ? 'text-gray-900' : 'text-gray-500'}`}>
                                {settings.emailNotifications ? 'On' : 'Off'}
                            </span>
                            <button
                                onClick={() => handleToggle('emailNotifications')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.emailNotifications ? 'bg-gray-900' : 'bg-gray-200'}`}
                                role="switch"
                                aria-checked={settings.emailNotifications}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Push Notifications */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Smartphone className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Push Notifications</h3>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 mr-6">
                            <p className="text-sm text-gray-600">
                                Enable/disable app & browser push alerts
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`text-sm font-medium ${settings.pushNotifications ? 'text-gray-900' : 'text-gray-500'}`}>
                                {settings.pushNotifications ? 'On' : 'Off'}
                            </span>
                            <button
                                onClick={() => handleToggle('pushNotifications')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.pushNotifications ? 'bg-gray-900' : 'bg-gray-200'}`}
                                role="switch"
                                aria-checked={settings.pushNotifications}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SMS Notifications */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <MessageSquare className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">SMS Notifications</h3>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 mr-6">
                            <p className="text-sm text-gray-600">
                                Manage text message alerts
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`text-sm font-medium ${settings.smsNotifications ? 'text-gray-900' : 'text-gray-500'}`}>
                                {settings.smsNotifications ? 'On' : 'Off'}
                            </span>
                            <button
                                onClick={() => handleToggle('smsNotifications')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.smsNotifications ? 'bg-gray-900' : 'bg-gray-200'}`}
                                role="switch"
                                aria-checked={settings.smsNotifications}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* In-App Notifications */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <AppWindow className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">In-App Notifications</h3>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 mr-6">
                            <p className="text-sm text-gray-600">
                                Control what shows in your notification center
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`text-sm font-medium ${settings.inAppNotifications ? 'text-gray-900' : 'text-gray-500'}`}>
                                {settings.inAppNotifications ? 'On' : 'Off'}
                            </span>
                            <button
                                onClick={() => handleToggle('inAppNotifications')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.inAppNotifications ? 'bg-gray-900' : 'bg-gray-200'}`}
                                role="switch"
                                aria-checked={settings.inAppNotifications}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${settings.inAppNotifications ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sound & Vibration */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Volume2 className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Sound & Vibration</h3>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 mr-6">
                            <p className="text-sm text-gray-600">
                                Customize alert tones
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`text-sm font-medium ${settings.soundVibration ? 'text-gray-900' : 'text-gray-500'}`}>
                                {settings.soundVibration ? 'On' : 'Off'}
                            </span>
                            <button
                                onClick={() => handleToggle('soundVibration')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.soundVibration ? 'bg-gray-900' : 'bg-gray-200'}`}
                                role="switch"
                                aria-checked={settings.soundVibration}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${settings.soundVibration ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Frequency */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Notification Frequency</h3>
                    </div>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <p className="text-sm text-gray-600 mb-4">
                            Real-time, daily digest, or weekly summary
                        </p>
                        <div className="space-y-3">
                            {['real-time', 'daily', 'weekly'].map((frequency) => (
                                <label key={frequency} className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="frequency"
                                        value={frequency}
                                        checked={settings.notificationFrequency === frequency}
                                        onChange={() => handleFrequencyChange(frequency as 'real-time' | 'daily' | 'weekly')}
                                        className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-500"
                                    />
                                    <span className="text-sm text-gray-700 capitalize">
                                        {frequency === 'real-time' ? 'Real-time' : frequency}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mentions & Tags */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <AtSign className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Mentions & Tags</h3>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 mr-6">
                            <p className="text-sm text-gray-600">
                                Alerts when someone tags or mentions you
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`text-sm font-medium ${settings.mentionsTags ? 'text-gray-900' : 'text-gray-500'}`}>
                                {settings.mentionsTags ? 'On' : 'Off'}
                            </span>
                            <button
                                onClick={() => handleToggle('mentionsTags')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.mentionsTags ? 'bg-gray-900' : 'bg-gray-200'}`}
                                role="switch"
                                aria-checked={settings.mentionsTags}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${settings.mentionsTags ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Alerts */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Security Alerts</h3>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 mr-6">
                            <p className="text-sm text-gray-600">
                                Always on (for login attempts, password changes)
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-900">
                                Always On
                            </span>
                            <button
                                disabled
                                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-900 opacity-50 cursor-not-allowed"
                                role="switch"
                                aria-checked={true}
                            >
                                <span
                                    className="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 translate-x-6"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};