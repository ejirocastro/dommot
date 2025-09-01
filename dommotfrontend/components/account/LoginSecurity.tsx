'use client';

import React, { useState } from 'react';
import {
    Edit,
    Shield,
    Smartphone,
    Monitor,
    Bell,
    AlertTriangle,
    Trash2,
    Eye,
    EyeOff,
    X,
    Check,
    Lock,
    Key,
    CheckCircle,
    Clock,
    MapPin,
    Tablet
} from 'lucide-react';

interface ConnectedDevice {
    id: string;
    name: string;
    type: 'desktop' | 'mobile' | 'tablet';
    location: string;
    lastActive: string;
    current: boolean;
}

interface DeactivateModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (password: string) => void;
}

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (confirmText: string, password: string) => void;
}

const DeactivateModal: React.FC<DeactivateModalProps> = ({ isOpen, onClose, onConfirm }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    if (!isOpen) return null;

    const handleConfirm = () => {
        if (password) {
            onConfirm(password);
            setPassword('');
            setShowPassword(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                            <Lock className="w-5 h-5 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Deactivate Account</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="mb-8">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 mb-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <AlertTriangle className="w-4 h-4 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-amber-900 mb-3">
                                    What happens when you deactivate?
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    <div className="flex items-center space-x-3 text-sm text-amber-800">
                                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                        <span>Your listings will be hidden from search results</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-sm text-amber-800">
                                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                        <span>New bookings will be disabled</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-sm text-amber-800">
                                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                        <span>You won't be able to log in</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-sm text-amber-800">
                                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                        <span>Your profile will be temporarily hidden</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-6">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <p className="text-sm text-gray-700 font-medium">
                            You can reactivate your account at any time by contacting our support team.
                        </p>
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                            Confirm with your password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <button
                        onClick={onClose}
                        className="flex-1 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:shadow-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        disabled={!password}
                        className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-xl transition-all duration-200 hover:shadow-lg disabled:shadow-none"
                    >
                        Deactivate Account
                    </button>
                </div>
            </div>
        </div>
    );
};

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onConfirm }) => {
    const [confirmText, setConfirmText] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const requiredText = 'DELETE MY ACCOUNT';

    if (!isOpen) return null;

    const canConfirm = confirmText === requiredText && password;

    const handleConfirm = () => {
        if (canConfirm) {
            onConfirm(confirmText, password);
            setConfirmText('');
            setPassword('');
            setShowPassword(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <Trash2 className="w-5 h-5 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-red-600">Delete Account</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="mb-8">
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl p-6 mb-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <AlertTriangle className="w-4 h-4 text-red-600" />
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-red-900 mb-3">
                                    This action cannot be undone!
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    <div className="flex items-center space-x-3 text-sm text-red-800">
                                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                        <span>All your data will be permanently deleted</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-sm text-red-800">
                                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                        <span>Your listings will be removed forever</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-sm text-red-800">
                                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                        <span>Your booking history will be lost</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-sm text-red-800">
                                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                        <span>This cannot be reversed or recovered</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-3">
                                Type <span className="font-mono bg-gray-100 px-2 py-1 rounded text-red-600">"{requiredText}"</span> to confirm
                            </label>
                            <input
                                type="text"
                                value={confirmText}
                                onChange={(e) => setConfirmText(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200 font-mono text-sm"
                                placeholder={requiredText}
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-semibold text-gray-900 mb-3">
                                Confirm with your password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <button
                        onClick={onClose}
                        className="flex-1 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:shadow-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        disabled={!canConfirm}
                        className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-xl transition-all duration-200 hover:shadow-lg disabled:shadow-none"
                    >
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export const LoginSecurity: React.FC = () => {
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
    const [twoFactorMethod, setTwoFactorMethod] = useState<'app' | 'sms'>('app');
    const [loginAlertsEnabled, setLoginAlertsEnabled] = useState(true);
    const [showDeactivateModal, setShowDeactivateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const connectedDevices: ConnectedDevice[] = [
        {
            id: '1',
            name: 'MacBook Pro',
            type: 'desktop',
            location: 'San Francisco, CA',
            lastActive: '2 minutes ago',
            current: true
        },
        {
            id: '2',
            name: 'iPhone 15 Pro',
            type: 'mobile',
            location: 'San Francisco, CA',
            lastActive: '1 hour ago',
            current: false
        },
        {
            id: '3',
            name: 'Chrome on Windows',
            type: 'desktop',
            location: 'New York, NY',
            lastActive: '3 days ago',
            current: false
        }
    ];

    const getDeviceIcon = (type: string, current: boolean) => {
        const iconClass = `w-5 h-5 ${current ? 'text-emerald-600' : 'text-gray-500'}`;
        switch (type) {
            case 'mobile':
                return <Smartphone className={iconClass} />;
            case 'tablet':
                return <Tablet className={iconClass} />;
            default:
                return <Monitor className={iconClass} />;
        }
    };

    const handleRevokeDevice = (deviceId: string) => {
        console.log(`Revoke device: ${deviceId}`);
    };

    const handleDeactivateAccount = (password: string) => {
        console.log('Deactivate account with password:', password);
        setShowDeactivateModal(false);
        // Handle deactivation logic
    };

    const handleDeleteAccount = (confirmText: string, password: string) => {
        console.log('Delete account with confirmation:', confirmText, 'and password:', password);
        setShowDeleteModal(false);
        // Handle deletion logic
    };

    return (
        <div className="p-8 max-w-4xl">
            <div className="mb-10">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-sky-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Login & Security</h2>
                </div>
                <p className="text-gray-600 text-lg">
                    Manage your login information, password, and security settings to keep your account safe.
                </p>
            </div>

            <div className="space-y-8">
                {/* Login Information */}
                <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                            <Edit className="w-3 h-3 text-sky-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Login Information</h3>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-semibold text-sm">@</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-1">Email address</p>
                                    <p className="text-gray-900 font-semibold">john.smith@example.com</p>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        <span className="text-xs text-emerald-600 font-medium">Verified</span>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center space-x-2 px-5 py-2.5 text-sm font-medium text-sky-700 hover:text-sky-800 bg-white hover:bg-sky-50 rounded-xl transition-all duration-200 border border-sky-200 hover:border-sky-300 hover:shadow-sm">
                                <Edit className="w-4 h-4" />
                                <span>Edit</span>
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <Smartphone className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-1">Phone number</p>
                                    <p className="text-gray-900 font-semibold">+1 (555) 123-4567</p>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        <span className="text-xs text-emerald-600 font-medium">Verified</span>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center space-x-2 px-5 py-2.5 text-sm font-medium text-sky-700 hover:text-sky-800 bg-white hover:bg-sky-50 rounded-xl transition-all duration-200 border border-sky-200 hover:border-sky-300 hover:shadow-sm">
                                <Edit className="w-4 h-4" />
                                <span>Edit</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Password */}
                <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                            <Key className="w-3 h-3 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Password</h3>
                    </div>
                    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                <Lock className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-1">Password</p>
                                <div className="flex items-center space-x-2">
                                    <p className="text-gray-500 text-sm">••••••••••••</p>
                                    <div className="flex items-center space-x-1">
                                        <Clock className="w-3 h-3 text-gray-400" />
                                        <span className="text-xs text-gray-500">Updated 3 months ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="flex items-center space-x-2 px-5 py-2.5 text-sm font-medium text-sky-700 hover:text-sky-800 bg-white hover:bg-sky-50 rounded-xl transition-all duration-200 border border-sky-200 hover:border-sky-300 hover:shadow-sm">
                            <Key className="w-4 h-4" />
                            <span>Change Password</span>
                        </button>
                    </div>
                </section>

                {/* Two-Factor Authentication */}
                <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                            <Shield className="w-3 h-3 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Two-Factor Authentication</h3>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Shield className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-2">Secure your account</p>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Add an extra layer of security to your account with two-factor authentication.
                                    </p>
                                    {!twoFactorEnabled && (
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                            <span className="text-xs text-amber-700 font-medium">Recommended for enhanced security</span>
                                        </div>
                                    )}
                                    {twoFactorEnabled && (
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                                            <span className="text-xs text-emerald-700 font-medium">Two-factor authentication enabled</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm ${twoFactorEnabled ? 'bg-emerald-600 shadow-emerald-200' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 shadow-sm ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>

                        {twoFactorEnabled && (
                            <div className="mt-6 pt-6 border-t border-emerald-200">
                                <p className="text-sm font-semibold text-gray-900 mb-4">Choose your authentication method:</p>
                                <div className="space-y-3">
                                    <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-white/50 transition-colors">
                                        <input
                                            type="radio"
                                            value="app"
                                            checked={twoFactorMethod === 'app'}
                                            onChange={(e) => setTwoFactorMethod(e.target.value as 'app' | 'sms')}
                                            className="text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                                        />
                                        <div className="flex items-center space-x-3">
                                            <Smartphone className="w-4 h-4 text-gray-600" />
                                            <div>
                                                <span className="text-sm font-medium text-gray-900">Authenticator app</span>
                                                <span className="ml-2 px-2 py-0.5 text-xs bg-emerald-100 text-emerald-700 rounded-full">Recommended</span>
                                            </div>
                                        </div>
                                    </label>
                                    <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-white/50 transition-colors">
                                        <input
                                            type="radio"
                                            value="sms"
                                            checked={twoFactorMethod === 'sms'}
                                            onChange={(e) => setTwoFactorMethod(e.target.value as 'app' | 'sms')}
                                            className="text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                                        />
                                        <div className="flex items-center space-x-3">
                                            <span className="text-lg">📱</span>
                                            <span className="text-sm font-medium text-gray-900">SMS to phone number</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Connected Devices */}
                <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                            <Monitor className="w-3 h-3 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Connected Devices</h3>
                    </div>
                    <div className="mb-6">
                        <div className="flex items-center space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Shield className="w-4 h-4 text-blue-600" />
                            </div>
                            <p className="text-sm text-blue-800 font-medium">
                                These devices are currently signed in to your account. Remove any devices that you don't recognize for better security.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {connectedDevices.map((device) => (
                            <div key={device.id} className="group flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200">
                                <div className="flex items-center space-x-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${device.current ? 'bg-emerald-100' : 'bg-gray-200'}`}>
                                        {getDeviceIcon(device.type, device.current)}
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <p className="font-semibold text-gray-900 text-base">{device.name}</p>
                                            {device.current && (
                                                <span className="px-3 py-1 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-full border border-emerald-200">
                                                    Current Session
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                            <div className="flex items-center space-x-1">
                                                <MapPin className="w-3 h-3" />
                                                <span>{device.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-3 h-3" />
                                                <span>Active {device.lastActive}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {!device.current && (
                                    <button
                                        onClick={() => handleRevokeDevice(device.id)}
                                        className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 border border-red-200 hover:border-red-300 opacity-0 group-hover:opacity-100"
                                    >
                                        Revoke Access
                                    </button>
                                )}
                                {device.current && (
                                    <div className="px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200">
                                        This Device
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Security Alerts */}
                <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Bell className="w-3 h-3 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Security Alerts</h3>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Bell className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-2">Login attempt notifications</p>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Get notified via email when someone attempts to log into your account from a new device or location.
                                    </p>
                                    {loginAlertsEnabled && (
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-yellow-600" />
                                            <span className="text-xs text-yellow-700 font-medium">Security notifications enabled</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={() => setLoginAlertsEnabled(!loginAlertsEnabled)}
                                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 shadow-sm ${loginAlertsEnabled ? 'bg-yellow-600 shadow-yellow-200' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 shadow-sm ${loginAlertsEnabled ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Account Actions */}
                <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-3 h-3 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Danger Zone</h3>
                    </div>
                    <div className="space-y-6">
                        {/* Deactivate Account */}
                        <div className="group p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 hover:border-amber-300 rounded-2xl transition-all duration-200">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Lock className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-amber-900 mb-2 text-lg">Deactivate Account</h4>
                                        <p className="text-sm text-amber-800 mb-3">
                                            Temporarily suspend your account and hide your profile from public view. Your data will be preserved and you can reactivate at any time.
                                        </p>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-amber-600" />
                                            <span className="text-xs text-amber-700 font-medium">Reversible action</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowDeactivateModal(true)}
                                    className="px-5 py-2.5 text-sm font-semibold text-amber-700 bg-amber-100 hover:bg-amber-200 rounded-xl transition-all duration-200 border border-amber-300 hover:border-amber-400 hover:shadow-sm"
                                >
                                    Deactivate
                                </button>
                            </div>
                        </div>

                        {/* Delete Account */}
                        <div className="group p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 hover:border-red-300 rounded-2xl transition-all duration-200">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Trash2 className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-2 text-lg">Delete Account</h4>
                                        <p className="text-sm text-red-800 mb-3">
                                            Permanently delete your account and all associated data including listings, bookings, and personal information. This action cannot be reversed.
                                        </p>
                                        <div className="flex items-center space-x-2">
                                            <AlertTriangle className="w-4 h-4 text-red-600" />
                                            <span className="text-xs text-red-700 font-medium">Irreversible action</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowDeleteModal(true)}
                                    className="px-5 py-2.5 text-sm font-semibold text-red-700 bg-red-100 hover:bg-red-200 rounded-xl transition-all duration-200 border border-red-300 hover:border-red-400 hover:shadow-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Modals */}
            <DeactivateModal
                isOpen={showDeactivateModal}
                onClose={() => setShowDeactivateModal(false)}
                onConfirm={handleDeactivateAccount}
            />

            <DeleteModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDeleteAccount}
            />
        </div>
    );
};
