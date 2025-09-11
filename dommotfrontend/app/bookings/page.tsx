'use client';

import React, { useState } from 'react';
import { Logo } from '../../components/header/Logo';
import {
  Calendar, MapPin, Clock, Users, Star,
  Filter, Search, ChevronDown, Eye, MessageSquare,
  CheckCircle, AlertCircle, XCircle, RefreshCw
} from 'lucide-react';

export default function BookingsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Mock bookings data
  const bookings = [
    {
      id: '1',
      property: 'Modern Downtown Apartment',
      location: 'Manhattan, New York',
      guest: 'John Smith',
      guestAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&q=80',
      checkIn: '2024-01-15',
      checkOut: '2024-01-18',
      nights: 3,
      guests: 2,
      status: 'confirmed',
      total: 450,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=400&q=80',
      rating: 4.9,
      bookingDate: '2024-01-10',
      code: 'BK001'
    },
    {
      id: '2', 
      property: 'Cozy Beachside Villa',
      location: 'Miami Beach, Florida',
      guest: 'Sarah Johnson',
      guestAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b3db?ixlib=rb-4.0.3&w=150&q=80',
      checkIn: '2024-01-20',
      checkOut: '2024-01-25',
      nights: 5,
      guests: 4,
      status: 'pending',
      total: 1200,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&w=400&q=80',
      rating: 4.8,
      bookingDate: '2024-01-12',
      code: 'BK002'
    },
    {
      id: '3',
      property: 'Historic Brownstone',
      location: 'Brooklyn, New York',
      guest: 'Mike Wilson',
      guestAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&q=80',
      checkIn: '2024-01-28',
      checkOut: '2024-01-30',
      nights: 2,
      guests: 1,
      status: 'upcoming',
      total: 280,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&w=400&q=80',
      rating: 5.0,
      bookingDate: '2024-01-14',
      code: 'BK003'
    },
    {
      id: '4',
      property: 'Luxury Penthouse Suite',
      location: 'Los Angeles, California',
      guest: 'Emily Davis',
      guestAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&q=80',
      checkIn: '2024-01-05',
      checkOut: '2024-01-08',
      nights: 3,
      guests: 2,
      status: 'completed',
      total: 750,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&w=400&q=80',
      rating: 4.7,
      bookingDate: '2024-01-01',
      code: 'BK004'
    },
    {
      id: '5',
      property: 'Rustic Mountain Cabin',
      location: 'Aspen, Colorado',
      guest: 'David Brown',
      guestAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=150&q=80',
      checkIn: '2024-01-02',
      checkOut: '2024-01-04',
      nights: 2,
      guests: 3,
      status: 'cancelled',
      total: 400,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&w=400&q=80',
      rating: null,
      bookingDate: '2023-12-28',
      code: 'BK005'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      case 'upcoming': return <Clock className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <RefreshCw className="w-4 h-4" />;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (activeFilter === 'all') return true;
    return booking.status === activeFilter;
  });

  const filterOptions = [
    { value: 'all', label: 'All Bookings', count: bookings.length },
    { value: 'confirmed', label: 'Confirmed', count: bookings.filter(b => b.status === 'confirmed').length },
    { value: 'pending', label: 'Pending', count: bookings.filter(b => b.status === 'pending').length },
    { value: 'upcoming', label: 'Upcoming', count: bookings.filter(b => b.status === 'upcoming').length },
    { value: 'completed', label: 'Completed', count: bookings.filter(b => b.status === 'completed').length },
    { value: 'cancelled', label: 'Cancelled', count: bookings.filter(b => b.status === 'cancelled').length }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo />
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
          <p className="text-gray-600 mt-2">Manage all your property bookings and reservations</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === option.value
                      ? 'bg-sky-100 text-sky-700 border border-sky-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                  <span className="bg-white rounded-full px-2 py-0.5 text-xs">
                    {option.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex gap-3 ml-auto">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bookings..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-sky-500 focus:outline-none"
                />
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:border-sky-500 focus:outline-none"
                >
                  <option value="date">Sort by Date</option>
                  <option value="guest">Sort by Guest</option>
                  <option value="amount">Sort by Amount</option>
                  <option value="status">Sort by Status</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Property Image */}
                <div className="w-full lg:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={booking.image}
                    alt={booking.property}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Booking Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{booking.property}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{booking.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">#{booking.code}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">${booking.total}</p>
                      <p className="text-sm text-gray-600">{booking.nights} nights</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {/* Guest Info */}
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Guest</p>
                      <div className="flex items-center gap-2">
                        <img
                          src={booking.guestAvatar}
                          alt={booking.guest}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-700">{booking.guest}</span>
                      </div>
                    </div>

                    {/* Dates */}
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Stay Dates</p>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Calendar className="w-4 h-4" />
                        <span>{booking.checkIn} - {booking.checkOut}</span>
                      </div>
                    </div>

                    {/* Guests */}
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Guests</p>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Users className="w-4 h-4" />
                        <span>{booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-700 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      Message Guest
                    </button>
                    {booking.rating && (
                      <div className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 bg-gray-50 rounded-lg">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <span>{booking.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500 text-lg">No bookings found</p>
            <p className="text-gray-400">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}