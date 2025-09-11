'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/header/Logo';
import {
  Home, Calendar, DollarSign, Star, Users, MessageSquare,
  TrendingUp, Eye, Heart, Settings, Bell, Plus,
  ChevronRight, BarChart3, Clock, CheckCircle,
  AlertTriangle, Edit, Camera, MapPin
} from 'lucide-react';

export default function HostDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock host data
  const hostStats = {
    totalListings: 3,
    activeListings: 2,
    totalBookings: 47,
    totalEarnings: 18750,
    monthlyEarnings: 3200,
    averageRating: 4.8,
    totalReviews: 156,
    responseRate: 98,
    responseTime: '1 hour',
    occupancyRate: 78,
    views: 2340,
    favorites: 189,
    messagesUnread: 3
  };

  const recentBookings = [
    {
      id: '1',
      guest: 'Sarah Johnson',
      property: 'Modern Downtown Apartment',
      checkIn: '2024-01-15',
      checkOut: '2024-01-18',
      status: 'confirmed',
      earnings: 450,
      guestAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b3db?ixlib=rb-4.0.3&w=150&q=80'
    },
    {
      id: '2',
      guest: 'Mike Wilson',
      property: 'Cozy Beach House',
      checkIn: '2024-01-20',
      checkOut: '2024-01-25',
      status: 'pending',
      earnings: 1200,
      guestAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&q=80'
    }
  ];

  const listings = [
    {
      id: '1',
      title: 'Modern Downtown Apartment',
      location: 'Manhattan, New York',
      type: 'Entire apartment',
      status: 'active',
      price: 150,
      rating: 4.9,
      reviews: 67,
      bookings: 23,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=400&q=80',
      views: 1240,
      favorites: 89
    },
    {
      id: '2',
      title: 'Cozy Beach House',
      location: 'Miami Beach, Florida',
      type: 'Entire house',
      status: 'active',
      price: 240,
      rating: 4.7,
      reviews: 45,
      bookings: 18,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&w=400&q=80',
      views: 890,
      favorites: 67
    },
    {
      id: '3',
      title: 'Historic Brownstone',
      location: 'Brooklyn, New York',
      type: 'Entire house',
      status: 'inactive',
      price: 180,
      rating: 5.0,
      reviews: 44,
      bookings: 6,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&w=400&q=80',
      views: 210,
      favorites: 33
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'listings', label: 'Listings', icon: Home },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getListingStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo />
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors">
                <Plus className="w-4 h-4" />
                Add Listing
              </button>
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
                {hostStats.messagesUnread > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {hostStats.messagesUnread}
                  </span>
                )}
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Host Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your listings and track your hosting performance</p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Earnings</p>
                <p className="text-3xl font-bold text-gray-900">${hostStats.totalEarnings.toLocaleString()}</p>
                <p className="text-sm text-green-600 font-medium">+${hostStats.monthlyEarnings} this month</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-900">{hostStats.totalBookings}</p>
                <p className="text-sm text-gray-500">{hostStats.occupancyRate}% occupancy rate</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Average Rating</p>
                <p className="text-3xl font-bold text-gray-900">{hostStats.averageRating}</p>
                <p className="text-sm text-gray-500">{hostStats.totalReviews} reviews</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Response Rate</p>
                <p className="text-3xl font-bold text-gray-900">{hostStats.responseRate}%</p>
                <p className="text-sm text-gray-500">Avg. {hostStats.responseTime}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Tabs */}
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
                  {tab.id === 'messages' && hostStats.messagesUnread > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {hostStats.messagesUnread}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Performance Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center gap-4">
                    <Eye className="w-8 h-8 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{hostStats.views}</p>
                      <p className="text-gray-600">Total views</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center gap-4">
                    <Heart className="w-8 h-8 text-red-500" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{hostStats.favorites}</p>
                      <p className="text-gray-600">Times saved</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center gap-4">
                    <Home className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{hostStats.activeListings}</p>
                      <p className="text-gray-600">Active listings</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Bookings */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
                    <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                      View all <ChevronRight className="w-4 h-4 inline" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <img
                              src={booking.guestAvatar}
                              alt={booking.guest}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="font-medium text-gray-900">{booking.guest}</p>
                              <p className="text-sm text-gray-600">{booking.property}</p>
                              <p className="text-sm text-gray-500">{booking.checkIn} - {booking.checkOut}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">${booking.earnings}</p>
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              booking.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <Plus className="w-5 h-5 text-green-600" />
                          <span className="font-medium">Create new listing</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                      
                      <button className="w-full flex items-center justify-between p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">View analytics</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                      
                      <button className="w-full flex items-center justify-between p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <MessageSquare className="w-5 h-5 text-purple-600" />
                          <span className="font-medium">Message guests</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                      
                      <button className="w-full flex items-center justify-between p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <Settings className="w-5 h-5 text-gray-600" />
                          <span className="font-medium">Account settings</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'listings' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">My Listings</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add New Listing
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {listings.map((listing) => (
                  <div key={listing.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="relative">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${getListingStatusColor(listing.status)}`}>
                          {listing.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 mb-1">{listing.title}</h4>
                        <div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{listing.location}</span>
                        </div>
                        <p className="text-sm text-gray-500">{listing.type}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-gray-500">Rating</p>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-current text-yellow-500" />
                            <span className="font-medium">{listing.rating}</span>
                            <span className="text-gray-500">({listing.reviews})</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-500">Bookings</p>
                          <p className="font-medium">{listing.bookings}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Views</p>
                          <p className="font-medium">{listing.views}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Saved</p>
                          <p className="font-medium">{listing.favorites}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="font-semibold text-lg">${listing.price}/night</span>
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-6">Booking Management</h3>
              <div className="text-center py-12 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Detailed booking management coming soon</p>
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-6">Earnings Analytics</h3>
              <div className="text-center py-12 text-gray-500">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Earnings analytics coming soon</p>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-6">Guest Reviews</h3>
              <div className="text-center py-12 text-gray-500">
                <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Review management coming soon</p>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-6">Messages</h3>
              <div className="text-center py-12 text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Message center coming soon</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-6">Host Settings</h3>
              <div className="text-center py-12 text-gray-500">
                <Settings className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Settings panel coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}