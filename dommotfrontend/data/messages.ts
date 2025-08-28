import { Conversation, Message, MessageUser } from '../types/message';

export const currentUser: MessageUser = {
  id: 1,
  name: 'You',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
};

export const conversations: Conversation[] = [
  {
    id: 1,
    participantId: 2,
    participantName: 'Sarah Johnson',
    participantAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face',
    unreadCount: 2,
    property: {
      id: 1,
      title: 'Modern Apartment in Lagos',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=200&h=150&fit=crop'
    },
    lastMessage: {
      id: 3,
      content: 'Perfect! I\'ll prepare everything for your arrival. Looking forward to hosting you!',
      timestamp: '2024-01-15T14:30:00Z',
      senderId: 2,
      senderName: 'Sarah Johnson',
      senderAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face',
      isRead: false
    },
    messages: [
      {
        id: 1,
        content: 'Hi! I\'m interested in booking your apartment for next week. Is it available from March 15-18?',
        timestamp: '2024-01-15T10:00:00Z',
        senderId: 1,
        senderName: 'You',
        senderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        isRead: true
      },
      {
        id: 2,
        content: 'Hello! Yes, those dates are available. The apartment is perfect for your stay. Would you like to know more about the amenities?',
        timestamp: '2024-01-15T12:15:00Z',
        senderId: 2,
        senderName: 'Sarah Johnson',
        senderAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face',
        isRead: true
      },
      {
        id: 3,
        content: 'Perfect! I\'ll prepare everything for your arrival. Looking forward to hosting you!',
        timestamp: '2024-01-15T14:30:00Z',
        senderId: 2,
        senderName: 'Sarah Johnson',
        senderAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face',
        isRead: false
      }
    ]
  },
  {
    id: 2,
    participantId: 3,
    participantName: 'Michael Chen',
    participantAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    unreadCount: 0,
    property: {
      id: 2,
      title: 'Cozy Studio in Victoria Island',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&h=150&fit=crop'
    },
    lastMessage: {
      id: 6,
      content: 'Thank you for the great stay! The place was exactly as described.',
      timestamp: '2024-01-14T18:45:00Z',
      senderId: 1,
      senderName: 'You',
      senderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      isRead: true
    },
    messages: [
      {
        id: 4,
        content: 'Welcome! I hope you enjoy your stay. Let me know if you need anything.',
        timestamp: '2024-01-12T09:00:00Z',
        senderId: 3,
        senderName: 'Michael Chen',
        senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        isRead: true
      },
      {
        id: 5,
        content: 'Hi! Do you know where I can find extra towels?',
        timestamp: '2024-01-13T16:20:00Z',
        senderId: 1,
        senderName: 'You',
        senderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        isRead: true
      },
      {
        id: 6,
        content: 'Thank you for the great stay! The place was exactly as described.',
        timestamp: '2024-01-14T18:45:00Z',
        senderId: 1,
        senderName: 'You',
        senderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        isRead: true
      }
    ]
  },
  {
    id: 3,
    participantId: 4,
    participantName: 'Emma Williams',
    participantAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    unreadCount: 1,
    property: {
      id: 3,
      title: 'Luxury Villa in Lekki',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=150&fit=crop'
    },
    lastMessage: {
      id: 8,
      content: 'The pool area is available 24/7. Enjoy your stay!',
      timestamp: '2024-01-13T20:15:00Z',
      senderId: 4,
      senderName: 'Emma Williams',
      senderAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      isRead: false
    },
    messages: [
      {
        id: 7,
        content: 'Hi Emma! What are the pool hours for the villa?',
        timestamp: '2024-01-13T19:30:00Z',
        senderId: 1,
        senderName: 'You',
        senderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        isRead: true
      },
      {
        id: 8,
        content: 'The pool area is available 24/7. Enjoy your stay!',
        timestamp: '2024-01-13T20:15:00Z',
        senderId: 4,
        senderName: 'Emma Williams',
        senderAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        isRead: false
      }
    ]
  }
];