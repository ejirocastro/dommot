'use client';

import React, { useState } from 'react';
import {
    Eye,
    Search,
    MessageCircle,
    Share2,
    Download,
    X,
    Shield,
    AlertTriangle,
    UserX
} from 'lucide-react';

interface BlockedUser {
    id: number;
    name: string;
    username: string;
    avatar: string;
    blockedDate: string;
}

interface DataDownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const DataDownloadModal: React.FC<DataDownloadModalProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full p-6 shadow-lg border border-gray-200 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <Download className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Request Your Data Copy</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="mb-6">
                    <p className="text-sm text-gray-600">
                        Request a complete copy of your personal data. Processing takes 24-48 hours and you'll receive a secure download link via email.
                    </p>
                </div>

                <div className="flex space-x-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                        Request Data Export
                    </button>
                </div>
            </div>
        </div>
    );
};

export const Privacy: React.FC = () => {
    const [settings, setSettings] = useState({
        profileVisibility: true,
        showContactInfo: false,
        searchable: true,
        showOnlineStatus: false,
        allowDirectMessages: true,
        shareActivityData: false,
        thirdPartyIntegrations: true,
        marketingEmails: true,
        systemNotifications: true,
    });

    const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([
        { id: 1, name: 'John Smith', username: '@johnsmith', avatar: '👤', blockedDate: '2024-01-15' },
        { id: 2, name: 'Sarah Wilson', username: '@sarahw', avatar: '👤', blockedDate: '2024-01-20' },
    ]);

    const [showDataModal, setShowDataModal] = useState(false);

    const handleToggle = (setting: keyof typeof settings) => {
        setSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    const handleUnblockUser = (userId: number) => {
        setBlockedUsers(prev => prev.filter(user => user.id !== userId));
    };

    const handleDataDownload = () => {
        setShowDataModal(false);
        // Here you would trigger the actual data export process
        console.log('Data export requested');
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-6 h-6 text-gray-700" />
                    <h1 className="text-2xl font-bold text-gray-900">Privacy & Safety</h1>
                </div>
                <p className="text-gray-600">
                    Control how your information is shared and who can interact with you on our platform.
                </p>
            </div>

            {/* Profile Visibility Section */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Eye className="w-5 h-5 text-gray-600" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Profile Visibility</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Control who can see your profile and personal information
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex items-start justify-between">
                        <div className="flex-1 mr-6">
                            <h4 className="text-base font-medium text-gray-900 mb-2">Public Profile</h4>
                            <p className="text-sm text-gray-600">
                                Show your basic profile (name, photo, bio) to other users.
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`text-sm font-medium ${settings.profileVisibility ? 'text-gray-900' : 'text-gray-500'}`}>
                                {settings.profileVisibility ? 'Public' : 'Private'}
                            </span>
                            <button
                                onClick={() => handleToggle('profileVisibility')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.profileVisibility ? 'bg-gray-900' : 'bg-gray-200'
                                    }`}
                                role="switch"
                                aria-checked={settings.profileVisibility}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${settings.profileVisibility ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 mr-6">
                                <h4 className="text-base font-medium text-gray-900 mb-2">Contact Information Display</h4>
                                <p className="text-sm text-gray-600">
                                    Show email and phone on your profile to verified users with confirmed bookings.
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className={`text-sm font-medium ${settings.showContactInfo ? 'text-gray-900' : 'text-gray-500'}`}>
                                    {settings.showContactInfo ? 'Visible' : 'Hidden'}
                                </span>
                                <button
                                    onClick={() => handleToggle('showContactInfo')}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.showContactInfo ? 'bg-gray-900' : 'bg-gray-200'
                                        }`}
                                    role="switch"
                                    aria-checked={settings.showContactInfo}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${settings.showContactInfo ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Discovery Section */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Search className="w-5 h-5 text-gray-600" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Search & Discovery</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Manage how others can find and interact with you
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-8 space-y-8">
                    <div className="flex items-start justify-between">
                        <div className="flex-1 mr-6">
                            <h4 className="text-base font-semibold text-gray-900 mb-2">Searchable Profile</h4>
                            <p className="text-sm text-gray-600">
                                Allow your profile to appear in search results.
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`text-sm font-medium ${settings.searchable ? 'text-gray-900' : 'text-gray-500'}`}>
                                {settings.searchable ? 'Discoverable' : 'Hidden'}
                            </span>
                            <button
                                onClick={() => handleToggle('searchable')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.searchable ? 'bg-gray-900' : 'bg-gray-200'
                                    }`}
                                role="switch"
                                aria-checked={settings.searchable}
                                aria-label="Toggle profile searchability"
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${settings.searchable ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-8">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 mr-6">
                                <h4 className="text-base font-semibold text-gray-900 mb-2">Online Status Indicator</h4>
                                <p className="text-sm text-gray-600">
                                    Show when you're currently active on the platform.
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className={`text-sm font-medium ${settings.showOnlineStatus ? 'text-gray-900' : 'text-gray-500'}`}>
                                    {settings.showOnlineStatus ? 'Visible' : 'Hidden'}
                                </span>
                                <button
                                    onClick={() => handleToggle('showOnlineStatus')}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.showOnlineStatus ? 'bg-gray-900' : 'bg-gray-200'
                                        }`}
                                    role="switch"
                                    aria-checked={settings.showOnlineStatus}
                                    aria-label="Toggle online status visibility"
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${settings.showOnlineStatus ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-8">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 mr-6">
                                <h4 className="text-base font-semibold text-gray-900 mb-2">Direct Messages</h4>
                                <p className="text-sm text-gray-600">
                                    Allow verified users to send you direct messages.
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className={`text-sm font-medium ${settings.allowDirectMessages ? 'text-gray-900' : 'text-gray-500'}`}>
                                    {settings.allowDirectMessages ? 'Allowed' : 'Restricted'}
                                </span>
                                <button
                                    onClick={() => handleToggle('allowDirectMessages')}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.allowDirectMessages ? 'bg-gray-900' : 'bg-gray-200'
                                        }`}
                                    role="switch"
                                    aria-checked={settings.allowDirectMessages}
                                    aria-label="Toggle direct messages"
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${settings.allowDirectMessages ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Sharing & Analytics Section */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Share2 className="w-5 h-5 text-gray-600" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Data Usage & Analytics</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Control how we use your data to improve our services
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-8 space-y-8">
                    <div className="flex items-start justify-between">
                        <div className="flex-1 mr-6">
                            <h4 className="text-base font-semibold text-gray-900 mb-2">Usage Analytics</h4>
                            <p className="text-sm text-gray-600">
                                Share anonymized usage data to help improve the platform.
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`text-sm font-medium ${settings.shareActivityData ? 'text-gray-900' : 'text-gray-500'}`}>
                                {settings.shareActivityData ? 'Enabled' : 'Disabled'}
                            </span>
                            <button
                                onClick={() => handleToggle('shareActivityData')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.shareActivityData ? 'bg-gray-900' : 'bg-gray-200'
                                    }`}
                                role="switch"
                                aria-checked={settings.shareActivityData}
                                aria-label="Toggle usage analytics"
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${settings.shareActivityData ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-8">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 mr-6">
                                <h4 className="text-base font-semibold text-gray-900 mb-2">Third-Party Integrations</h4>
                                <p className="text-sm text-gray-600">
                                    Allow partner services to access limited account info for enhanced features.
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className={`text-sm font-medium ${settings.thirdPartyIntegrations ? 'text-gray-900' : 'text-gray-500'}`}>
                                    {settings.thirdPartyIntegrations ? 'Allowed' : 'Restricted'}
                                </span>
                                <button
                                    onClick={() => handleToggle('thirdPartyIntegrations')}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.thirdPartyIntegrations ? 'bg-gray-900' : 'bg-gray-200'
                                        }`}
                                    role="switch"
                                    aria-checked={settings.thirdPartyIntegrations}
                                    aria-label="Toggle third-party integrations"
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${settings.thirdPartyIntegrations ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Communication Preferences Section */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <MessageCircle className="w-5 h-5 text-gray-600" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Communication Preferences</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Choose what types of emails and notifications you'd like to receive
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-8 space-y-8">
                    <div className="flex items-start justify-between">
                        <div className="flex-1 mr-6">
                            <h4 className="text-base font-semibold text-gray-900 mb-2">Marketing & Promotional Emails</h4>
                            <p className="text-sm text-gray-600">
                                Receive emails about new features, offers, and platform updates.
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`text-sm font-medium ${settings.marketingEmails ? 'text-gray-900' : 'text-gray-500'}`}>
                                {settings.marketingEmails ? 'Subscribed' : 'Unsubscribed'}
                            </span>
                            <button
                                onClick={() => handleToggle('marketingEmails')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.marketingEmails ? 'bg-gray-900' : 'bg-gray-200'
                                    }`}
                                role="switch"
                                aria-checked={settings.marketingEmails}
                                aria-label="Toggle marketing emails"
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${settings.marketingEmails ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-8">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 mr-6">
                                <h4 className="text-base font-semibold text-gray-900 mb-2">System Notifications</h4>
                                <p className="text-sm text-gray-600">
                                    Essential notifications about account security and bookings.
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className={`text-sm font-medium ${settings.systemNotifications ? 'text-gray-900' : 'text-gray-500'}`}>
                                    {settings.systemNotifications ? 'Enabled' : 'Limited'}
                                </span>
                                <button
                                    onClick={() => handleToggle('systemNotifications')}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${settings.systemNotifications ? 'bg-gray-900' : 'bg-gray-200'
                                        }`}
                                    role="switch"
                                    aria-checked={settings.systemNotifications}
                                    aria-label="Toggle system notifications"
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${settings.systemNotifications ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blocked Users Section */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <UserX className="w-5 h-5 text-gray-600" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Blocked Users</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Manage users you've blocked from contacting you
                                </p>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {blockedUsers.length} blocked
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    {blockedUsers.length === 0 ? (
                        <div className="text-center py-12">
                            <UserX className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <h4 className="text-lg font-semibold text-gray-500 mb-2">No blocked users</h4>
                            <p className="text-sm text-gray-400">
                                Users you block will appear here and won't be able to contact you or see your profile.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <div className="space-y-4">
                                {blockedUsers.map((user) => (
                                    <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                                                {user.avatar}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{user.name}</h4>
                                                <p className="text-sm text-gray-500">{user.username}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span className="text-xs text-gray-400">
                                                Blocked {new Date(user.blockedDate).toLocaleDateString()}
                                            </span>
                                            <button
                                                onClick={() => handleUnblockUser(user.id)}
                                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-all duration-200"
                                            >
                                                Unblock
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Data Export Section */}
            <div className="bg-white border border-gray-200 rounded-lg">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Download className="w-5 h-5 text-gray-600" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Your Data Rights</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Access, download, or request deletion of your personal data
                            </p>
                        </div>
                    </div>
                </div>


                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-gray-200 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <Download className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                    <h4 className="text-base font-medium text-gray-900 mb-2">Download Your Data</h4>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Get a complete copy of all your personal data.
                                    </p>
                                    <button
                                        onClick={() => setShowDataModal(true)}
                                        className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
                                    >
                                        Request Data Export
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <AlertTriangle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                    <h4 className="text-base font-medium text-gray-900 mb-2">Delete Your Account</h4>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Permanently delete your account and all data.
                                    </p>
                                    <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors">
                                        Contact Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Download Modal */}
            <DataDownloadModal
                isOpen={showDataModal}
                onClose={() => setShowDataModal(false)}
                onConfirm={handleDataDownload}
            />
        </div>
    );
};
