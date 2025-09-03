'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    User, MapPin, Globe, Calendar, Star, Home, MessageCircle,
    Shield, CheckCircle, Award, Heart, Plane, Clock, Users,
    Camera, Edit3, Share2, Flag, MoreHorizontal, Verified, X, Sparkles
} from 'lucide-react';

const ModernProfilePage = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [isEditing, setIsEditing] = useState(false);

    // Mock user data - in real app this would come from API/database
    const user = {
        id: '1',
        name: 'Sarah Johnson',
        displayName: 'Sarah J.',
        bio: "Hi, I'm Sarah. I love hosting guests and sharing the best experiences my city has to offer. As a New York native, I know all the hidden gems and can help you discover the authentic side of the city.",
        profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        location: 'New York, United States',
        languages: ['English', 'French', 'Yoruba', 'Spanish'],
        joinDate: '2019',
        joinedDateFull: 'December 2019',
        userType: 'lifestyle_host' as 'guest' | 'host' | 'lifestyle_host',
        isVerified: true,
        verifications: [
            { type: 'email', isVerified: true, label: 'Email verified' },
            { type: 'phone', isVerified: true, label: 'Phone number verified' },
            { type: 'identity', isVerified: true, label: 'Government ID verified' },
            { type: 'work_email', isVerified: false, label: 'Work email verified' },
            { type: 'social_media', isVerified: true, label: 'Social media linked' },
        ],
        socialMedia: {
            instagram: '@sarahj_nyc',
            linkedin: 'sarah-johnson-host',
            twitter: '@sarahjnyc'
        }
    };

    const hostStats = {
        responseRate: 98,
        responseTime: 'within 1 hour',
        acceptanceRate: 87,
        hostingSince: '2020',
        hostingSinceFull: 'January 2020',
        totalListings: 5,
        totalReviews: 247,
        averageRating: 4.9,
        isSuperhost: true,
        completedStays: 312,
    };

    const lifestyleHostStats = {
        totalExperiences: 12,
        totalExperienceReviews: 156,
        averageExperienceRating: 4.9,
        specialties: ['Clubs & Nightlife', 'Fine Dining', 'Art & Museums', 'Boat Cruises', 'Cinemas'],
        aboutHost: 'Local NYC insider with 6+ years of experience curating exclusive lifestyle experiences. I specialize in connecting visitors with the authentic pulse of New York City.',
        hostingSince: '2019',
        hostingSinceFull: 'March 2019',
        experiencesOffered: [
            {
                id: '1',
                title: 'Exclusive Rooftop Dining Experience',
                category: 'Fine Dining',
                images: ['https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c'],
                price: 180,
                duration: '3 hours',
                rating: 4.9,
                reviewCount: 34,
                description: 'Experience NYC from above at our exclusive rooftop restaurant with skyline views.'
            },
            {
                id: '2',
                title: 'Underground Jazz Club Night',
                category: 'Clubs & Nightlife',
                images: ['https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f'],
                price: 120,
                duration: '4 hours',
                rating: 4.8,
                reviewCount: 28,
                description: 'Discover the hidden jazz scene in Greenwich Village with insider access.'
            },
            {
                id: '3',
                title: 'Private Art Gallery Tour',
                category: 'Art & Museums',
                images: ['https://images.unsplash.com/photo-1544967082-d9759e6a59c0'],
                price: 95,
                duration: '2.5 hours',
                rating: 5.0,
                reviewCount: 19,
                description: 'Curated contemporary art tour with gallery owner introductions.'
            }
        ]
    };

    const [editedUser, setEditedUser] = useState(user);

    const getTabsForUserType = () => {
        const baseTabs = [
            { id: 'about', label: 'About', icon: User },
            { id: 'reviews', label: 'Reviews', icon: Star },
        ];

        if (user.userType === 'host') {
            return [
                ...baseTabs.slice(0, 1),
                { id: 'listings', label: 'Listings', icon: Home },
                ...baseTabs.slice(1),
            ];
        } else if (user.userType === 'lifestyle_host') {
            return [
                ...baseTabs.slice(0, 1),
                { id: 'experiences', label: 'Experiences', icon: Star },
                ...baseTabs.slice(1),
            ];
        } else {
            return [
                ...baseTabs.slice(0, 1),
                { id: 'trips', label: 'Trips', icon: Plane },
                { id: 'wishlists', label: 'Wishlists', icon: Heart },
                ...baseTabs.slice(1),
            ];
        }
    };

    const tabs = getTabsForUserType();

    const handleEditToggle = () => {
        if (isEditing) {
            setEditedUser(user);
        }
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        console.log('Saving changes:', editedUser);
        Object.assign(user, editedUser);
        setIsEditing(false);
    };

    const handleInputChange = (field: string, value: any) => {
        setEditedUser(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleArrayInputChange = (field: string, value: string) => {
        setEditedUser(prev => ({
            ...prev,
            [field]: value.split(',').map((item: string) => item.trim()).filter((item: string) => item)
        }));
    };

    const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setEditedUser(prev => ({
                    ...prev,
                    profilePicture: e.target?.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const currentUser = isEditing ? editedUser : user;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">

            {/* Professional Header */}
            <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200/60 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-5">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center group hover:scale-[1.02] transition-all duration-200">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                    <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                                        <div className="w-3 h-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">
                                    DOMMOT
                                </h1>
                                <p className="text-xs text-slate-500 font-medium">Premium Experiences</p>
                            </div>
                        </Link>

                        <div className="flex items-center gap-4">
                            {!isEditing && (
                                <button
                                    onClick={handleEditToggle}
                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    <Edit3 className="w-4 h-4" />
                                    Edit Profile
                                </button>
                            )}
                            <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all duration-200">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all duration-200">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Hero Profile Section */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/40 overflow-hidden mb-8">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white/30 to-blue-50/50"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100/20 to-blue-100/20 rounded-full blur-3xl"></div>

                    <div className="relative p-10">
                        <div className="flex flex-col lg:flex-row lg:items-start gap-10">

                            {/* Profile Picture */}
                            <div className="relative flex-shrink-0 mx-auto lg:mx-0">
                                <div className="relative">
                                    <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-white/70 shadow-2xl">
                                        <img
                                            src={currentUser?.profilePicture || user.profilePicture}
                                            alt={currentUser?.name || user.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {isEditing && (
                                        <>
                                            <input
                                                type="file"
                                                id="profilePictureInput"
                                                accept="image/*"
                                                onChange={handleProfilePictureChange}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="profilePictureInput"
                                                className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                                            >
                                                <Camera className="w-8 h-8 text-white" />
                                            </label>
                                        </>
                                    )}
                                    {user.isVerified && (
                                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-2 ring-4 ring-white shadow-lg">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                    )}
                                </div>

                                {/* Online Status */}
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                    Online now
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="flex-1 min-w-0 text-center lg:text-left">
                                {isEditing ? (
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <input
                                                type="text"
                                                value={currentUser?.name || ''}
                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                                className="text-3xl font-bold w-full p-4 border border-slate-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                                                placeholder="Your full name"
                                            />
                                            <input
                                                type="text"
                                                value={currentUser?.displayName || ''}
                                                onChange={(e) => handleInputChange('displayName', e.target.value)}
                                                className="w-full p-4 border border-slate-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                                                placeholder="Display name"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            value={currentUser?.location || ''}
                                            onChange={(e) => handleInputChange('location', e.target.value)}
                                            className="w-full p-4 border border-slate-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                                            placeholder="Your location"
                                        />
                                        <textarea
                                            value={currentUser?.bio || ''}
                                            onChange={(e) => handleInputChange('bio', e.target.value)}
                                            className="w-full p-4 border border-slate-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none resize-none transition-all"
                                            placeholder="Tell people about yourself..."
                                            rows={5}
                                        />
                                        <input
                                            type="text"
                                            value={currentUser?.languages?.join(', ') || ''}
                                            onChange={(e) => handleArrayInputChange('languages', e.target.value)}
                                            className="w-full p-4 border border-slate-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                                            placeholder="Languages (comma separated)"
                                        />
                                        <div className="flex gap-4">
                                            <button
                                                onClick={handleSave}
                                                className="flex-1 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                                            >
                                                Save Changes
                                            </button>
                                            <button
                                                onClick={handleEditToggle}
                                                className="flex-1 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-semibold transition-all duration-200"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div>
                                            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">{currentUser?.name}</h1>
                                            {currentUser?.displayName && (
                                                <p className="text-xl text-slate-600 font-medium">@{currentUser.displayName.toLowerCase().replace(' ', '')}</p>
                                            )}
                                        </div>

                                        {/* Location and Join Date */}
                                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-5 h-5 text-slate-400" />
                                                <span className="font-medium">{currentUser?.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-5 h-5 text-slate-400" />
                                                <span className="font-medium">Member since {lifestyleHostStats.hostingSinceFull}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Globe className="w-5 h-5 text-slate-400" />
                                                <span className="font-medium">{currentUser?.languages?.join(', ')}</span>
                                            </div>
                                        </div>

                                        {/* Bio */}
                                        {currentUser?.bio && (
                                            <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-100">
                                                <p className="text-slate-700 leading-relaxed text-lg">{currentUser.bio}</p>
                                            </div>
                                        )}

                                        {/* Badges and Social */}
                                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                            {/* User Type Badge */}
                                            {user.userType === 'lifestyle_host' && (
                                                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                                                    <Star className="w-5 h-5" />
                                                    Lifestyle Host
                                                </span>
                                            )}

                                            {/* Verification Badge */}
                                            {user.isVerified && (
                                                <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                                                    <Verified className="w-4 h-4" />
                                                    Identity Verified
                                                </span>
                                            )}

                                            {/* Social Media */}
                                            {user.socialMedia && (
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm text-slate-500 font-medium">Connected:</span>
                                                    <div className="flex gap-2">
                                                        {user.socialMedia.instagram && (
                                                            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm shadow-md">
                                                                📷
                                                            </div>
                                                        )}
                                                        {user.socialMedia.linkedin && (
                                                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm shadow-md">
                                                                💼
                                                            </div>
                                                        )}
                                                        {user.socialMedia.twitter && (
                                                            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white text-sm shadow-md">
                                                                🐦
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modern Navigation Tabs */}
                <div className="mb-8">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/40">
                        <div className="flex gap-2 overflow-x-auto">
                            {tabs.map((tab) => {
                                const IconComponent = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 whitespace-nowrap ${activeTab === tab.id
                                                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                                            }`}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/40 p-8">
                    {activeTab === 'about' && (
                        <div className="space-y-10">
                            {/* About Section */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-slate-900">About {user.name.split(" ")[0]}</h3>
                                        <p className="text-slate-600">Get to know your host</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-slate-50 via-blue-50/30 to-slate-50 rounded-2xl p-8 mb-8 border border-slate-100">
                                    <p className="text-slate-700 leading-relaxed text-xl font-medium">
                                        {user.bio || "This user hasn't written a bio yet."}
                                    </p>
                                </div>

                                {/* Languages Spoken */}
                                <div className="mb-10">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                        <Globe className="w-6 h-6 text-indigo-500" />
                                        Languages Spoken
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {user.languages.map((language) => (
                                            <span key={language} className="bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800 px-6 py-3 rounded-xl font-semibold border border-blue-200 shadow-sm">
                                                {language}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Lifestyle Host Information */}
                            {user.userType === 'lifestyle_host' && (
                                <div className="relative bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100/50 rounded-3xl p-8 border border-violet-200/50 shadow-lg overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
                                    <div className="relative">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl">
                                                <Star className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900">Lifestyle Curator</h3>
                                                <p className="text-violet-700 font-medium">Experience host since {lifestyleHostStats.hostingSinceFull}</p>
                                            </div>
                                        </div>

                                        <p className="text-slate-700 leading-relaxed mb-8 text-lg font-medium bg-white/50 rounded-2xl p-6 border border-white/50">
                                            {lifestyleHostStats.aboutHost}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50">
                                                <div className="text-3xl font-bold text-violet-600 mb-2">{lifestyleHostStats.totalExperiences}</div>
                                                <div className="text-slate-600 font-medium">Curated Experiences</div>
                                            </div>
                                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50">
                                                <div className="text-3xl font-bold text-violet-600 mb-2">{lifestyleHostStats.averageExperienceRating}/5</div>
                                                <div className="text-slate-600 font-medium">Average Rating</div>
                                            </div>
                                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50">
                                                <div className="text-3xl font-bold text-violet-600 mb-2">{lifestyleHostStats.totalExperienceReviews}</div>
                                                <div className="text-slate-600 font-medium">Guest Reviews</div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                                <Award className="w-6 h-6 text-violet-500" />
                                                Experience Specialties
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {lifestyleHostStats.specialties.map((specialty) => (
                                                    <span key={specialty} className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 px-6 py-3 rounded-xl font-semibold border border-violet-200 shadow-sm">
                                                        {specialty}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'experiences' && user.userType === 'lifestyle_host' && (
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center">
                                    <Star className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-900">Premium Experiences</h3>
                                    <p className="text-slate-600">{lifestyleHostStats.totalExperiences} curated experiences • ⭐ {lifestyleHostStats.averageExperienceRating} avg rating</p>
                                </div>
                            </div>

                            {/* Experience Categories */}
                            <div className="mb-10">
                                <h4 className="text-xl font-bold text-slate-900 mb-6">Categories</h4>
                                <div className="flex flex-wrap gap-4">
                                    {lifestyleHostStats.specialties.map((category) => (
                                        <span key={category} className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 px-6 py-4 rounded-2xl font-semibold border border-violet-200 shadow-sm">
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {lifestyleHostStats.experiencesOffered.map((experience) => (
                                    <div key={experience.id} className="bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                                        <div className="aspect-[4/3] rounded-t-3xl overflow-hidden">
                                            <img
                                                src={experience.images[0]}
                                                alt={experience.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <h4 className="font-bold text-slate-900 text-lg line-clamp-2 flex-1">{experience.title}</h4>
                                                <div className="flex flex-col items-end ml-3">
                                                    <span className="text-2xl font-bold text-violet-600">${experience.price}</span>
                                                    <span className="text-sm text-slate-500">per person</span>
                                                </div>
                                            </div>

                                            <p className="text-slate-600 text-sm mb-4 line-clamp-2">{experience.description}</p>

                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center gap-4 text-sm text-slate-600">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{experience.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="font-semibold">{experience.rating}</span>
                                                        <span>({experience.reviewCount})</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                                                    {experience.category}
                                                </span>
                                                <button className="text-violet-600 hover:text-violet-700 font-semibold text-sm hover:underline">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center">
                                    <Star className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-900">Guest Reviews</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            <span className="font-bold text-xl text-slate-900">{lifestyleHostStats.averageExperienceRating}</span>
                                        </div>
                                        <span className="text-slate-600">({lifestyleHostStats.totalExperienceReviews} reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Sample reviews */}
                                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-200">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                                M
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-slate-900">Michael Chen</h5>
                                                <p className="text-sm text-slate-600">March 2024</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed">
                                        "Sarah's rooftop dining experience was absolutely incredible! The views were breathtaking and she knew all the best spots. Highly recommend for anyone visiting NYC."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-200">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                                                A
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-slate-900">Anna Rodriguez</h5>
                                                <p className="text-sm text-slate-600">February 2024</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed">
                                        "The jazz club experience was magical! Sarah knows the city inside out and took us to places we never would have found. A truly authentic NYC night out!"
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Trust & Performance Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

                    {/* Trust & Security */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/40 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100/30 to-green-100/30 rounded-full blur-2xl"></div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Trust & Security</h3>
                                    <p className="text-slate-600 font-medium">Verified identity and secure profile</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {user.verifications.map((verification) => (
                                    <div key={verification.type} className={`flex items-center gap-4 p-4 rounded-2xl border ${verification.isVerified
                                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                                            : 'bg-slate-50 border-slate-200 text-slate-600'
                                        }`}>
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${verification.isVerified ? 'bg-emerald-500' : 'bg-slate-400'
                                            }`}>
                                            {verification.isVerified ? (
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            ) : (
                                                <X className="w-5 h-5 text-white" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-lg">
                                                {verification.label}
                                            </div>
                                            <div className="text-sm opacity-80">
                                                {verification.isVerified ? 'Verified and secure' : 'Pending verification'}
                                            </div>
                                        </div>
                                        {verification.isVerified && (
                                            <div className="text-emerald-500">
                                                <Verified className="w-6 h-6" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/40 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100/30 to-blue-100/30 rounded-full blur-2xl"></div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Performance</h3>
                                    <p className="text-slate-600 font-medium">Key metrics and achievements</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                                            <Star className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-lg">Curated Experiences</div>
                                            <div className="text-slate-600">Premium lifestyle</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-violet-600">{lifestyleHostStats.totalExperiences}</div>
                                        <div className="text-sm text-slate-500">unique experiences</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-lg">Excellence Rating</div>
                                            <div className="text-slate-600">Guest satisfaction</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-amber-600">⭐ {lifestyleHostStats.averageExperienceRating}</div>
                                        <div className="text-sm text-slate-500">{lifestyleHostStats.totalExperienceReviews} reviews</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                                            <Users className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-lg">Specialization</div>
                                            <div className="text-slate-600">Expertise areas</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-cyan-600">{lifestyleHostStats.specialties.length}</div>
                                        <div className="text-sm text-slate-500">categories</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernProfilePage;
