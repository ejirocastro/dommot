'use client';

import React, { useState } from 'react';
import { Logo } from '../../components/header/Logo';
import {
  User, MapPin, Calendar, Star, Home,
  CheckCircle, Award, Heart, Plane, Users,
  Camera, Edit3, Verified, X
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
    languages: ['English', 'French', 'Spanish'],
    joinDate: '2019',
    joinedDateFull: 'December 2019',
    userType: 'lifestyle_host' as 'guest' | 'host' | 'lifestyle_host',
    isVerified: true,
    verifications: [
      { type: 'email', isVerified: true, label: 'Email verified' },
      { type: 'phone', isVerified: true, label: 'Phone number verified' },
      { type: 'identity', isVerified: true, label: 'Government ID verified' },
      { type: 'work_email', isVerified: false, label: 'Work email verified' },
    ],
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
    listings: [
      {
        id: '1',
        title: 'Luxury Manhattan Penthouse',
        location: 'Upper East Side, Manhattan',
        type: 'Entire apartment',
        price: 320,
        rating: 4.9,
        reviewCount: 89,
        images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00']
      }
    ]
  };

  const lifestyleHostStats = {
    totalExperiences: 12,
    totalExperienceReviews: 156,
    averageExperienceRating: 4.9,
    specialties: ['Clubs & Nightlife', 'Fine Dining', 'Art & Museums', 'Boat Cruises'],
    aboutHost: 'Local NYC insider with 6+ years of experience curating exclusive lifestyle experiences.',
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
        description: 'Experience NYC from above at our exclusive rooftop restaurant.'
      }
    ]
  };

  const guestStats = {
    tripsCompleted: 15,
    reviewsWritten: 12,
    wishlistsCount: 4,
    memberSince: '2020',
    memberSinceFull: 'August 2020',
    aboutGuest: 'Passionate traveler who loves exploring new cultures and meeting people.',
    travelStyle: ['Cultural Explorer', 'Food Enthusiast', 'Art Lover'],
    favoriteDestinations: ['Tokyo', 'Barcelona', 'Santorini', 'Bali', 'NYC'],
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

  // Handle edit toggle
  const handleEditToggle = () => {
    if (isEditing) {
      setEditedUser(user);
    }
    setIsEditing(!isEditing);
  };

  // Handle save changes
  const handleSave = () => {
    console.log('Saving changes:', editedUser);
    Object.assign(user, editedUser);
    setIsEditing(false);
  };

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle array input changes (like languages)
  const handleArrayInputChange = (field: string, value: string) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value.split(',').map((item: string) => item.trim()).filter((item: string) => item)
    }));
  };

  // Handle profile picture change
  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
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
    <div className="min-h-screen bg-white">
      {/* Airbnb-style Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="w-full px-6 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            {!isEditing && (
              <button
                onClick={handleEditToggle}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
              >
                <Edit3 className="w-4 h-4" />
                Edit profile
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content - Airbnb Layout */}
      <main className="max-w-screen-lg mx-auto px-6 py-8">
        
        {/* Profile Hero Section - Airbnb Style */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden">
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
                    className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <Camera className="w-6 h-6 text-white" />
                  </label>
                </>
              )}
              
              {user.isVerified && (
                <div className="absolute -bottom-1 -right-1 bg-sky-500 rounded-full p-1 border-2 border-white">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={currentUser?.name || ''}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="text-2xl font-semibold w-full p-2 border-b border-gray-300 focus:border-sky-500 outline-none bg-transparent"
                    placeholder="Your name"
                  />
                  <input
                    type="text"
                    value={currentUser?.location || ''}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:border-sky-500 outline-none"
                    placeholder="Location"
                  />
                  <textarea
                    value={currentUser?.bio || ''}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:border-sky-500 outline-none resize-none"
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                  <input
                    type="text"
                    value={currentUser?.languages?.join(', ') || ''}
                    onChange={(e) => handleArrayInputChange('languages', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:border-sky-500 outline-none"
                    placeholder="Languages you speak"
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded font-medium transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleEditToggle}
                      className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">{currentUser?.name}</h1>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{currentUser?.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined in {user.joinDate}</span>
                      </div>
                    </div>
                    
                    {/* Verification Badge */}
                    {user.isVerified && (
                      <div className="flex items-center gap-2 mb-4">
                        <Verified className="w-4 h-4 text-sky-500" />
                        <span className="text-sm text-gray-700">Identity verified</span>
                      </div>
                    )}
                  </div>

                  {/* Bio */}
                  {currentUser?.bio && (
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed">{currentUser.bio}</p>
                    </div>
                  )}

                  {/* Languages */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Speaks {user.languages.join(', ')}</h3>
                  </div>

                  {/* User Type Badge */}
                  <div className="flex gap-3">
                    {user.userType === 'host' && hostStats.isSuperhost && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                        <Award className="w-4 h-4" />
                        Superhost
                      </span>
                    )}
                    {user.userType === 'lifestyle_host' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        <Star className="w-4 h-4" />
                        Experience host
                      </span>
                    )}
                    {user.userType === 'guest' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
                        <Users className="w-4 h-4" />
                        Guest
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Airbnb-style Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex gap-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 pb-4 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-sky-500 text-sky-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'about' && (
            <div className="space-y-8">
              
              {/* About Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">About {user.name.split(" ")[0]}</h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {user.bio || "This user hasn't written a bio yet."}
                    </p>
                  </div>

                  {/* What I Do Section */}
                  {user.userType === 'lifestyle_host' && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What I do</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {lifestyleHostStats.aboutHost}
                      </p>
                    </div>
                  )}

                  {user.userType === 'guest' && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">My travel style</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {guestStats.aboutGuest}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Verification Section - Airbnb Style */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-semibold mb-6">{user.name.split(" ")[0]}'s confirmed information</h3>
                <div className="space-y-3">
                  {user.verifications.map((verification) => (
                    <div key={verification.type} className="flex items-center gap-3">
                      {verification.isVerified ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )}
                      <span className={verification.isVerified ? 'text-gray-900' : 'text-gray-500'}>
                        {verification.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'listings' && user.userType === 'host' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">{user.name.split(" ")[0]}'s listings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hostStats.listings.map((listing) => (
                  <div key={listing.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-[4/3]">
                      <img
                        src={listing.images[0]}
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 truncate flex-1">{listing.title}</h4>
                        <div className="flex items-center gap-1 ml-2">
                          <Star className="w-4 h-4 fill-current text-black" />
                          <span className="text-sm">{listing.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{listing.type}</p>
                      <p className="text-gray-600 text-sm mb-3">{listing.location}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">${listing.price} night</span>
                        <span className="text-sm text-gray-500">({listing.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experiences' && user.userType === 'lifestyle_host' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Experiences</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lifestyleHostStats.experiencesOffered.map((experience) => (
                  <div key={experience.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-[4/3]">
                      <img
                        src={experience.images[0]}
                        alt={experience.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 truncate flex-1">{experience.title}</h4>
                        <div className="flex items-center gap-1 ml-2">
                          <Star className="w-4 h-4 fill-current text-black" />
                          <span className="text-sm">{experience.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{experience.category}</p>
                      <p className="text-gray-600 text-sm mb-3">{experience.duration}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">From ${experience.price}</span>
                        <span className="text-sm text-gray-500">({experience.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Reviews</h2>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current text-black" />
                  <span className="text-lg font-semibold">
                    {user.userType === 'host' ? hostStats.averageRating : 
                     user.userType === 'lifestyle_host' ? lifestyleHostStats.averageExperienceRating : '4.9'}
                  </span>
                  <span className="text-gray-600">
                    ({user.userType === 'host' ? hostStats.totalReviews : 
                      user.userType === 'lifestyle_host' ? lifestyleHostStats.totalExperienceReviews : 
                      guestStats.reviewsWritten} reviews)
                  </span>
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-medium">
                      M
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Michael</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600 text-sm">March 2024</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        "Sarah was an incredible host! The experience was unforgettable and she went above and beyond to make our visit special."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-medium">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Anna</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600 text-sm">February 2024</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        "Amazing experience with Sarah! Communication was excellent, everything was perfect. Highly recommend!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trips' && user.userType === 'guest' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Trips</h2>
              <div className="text-center py-12 text-gray-500">
                <Plane className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No trips yet</p>
              </div>
            </div>
          )}

          {activeTab === 'wishlists' && user.userType === 'guest' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Wishlists</h2>
              <div className="text-center py-12 text-gray-500">
                <Heart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No wishlists yet</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ModernProfilePage;