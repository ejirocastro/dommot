'use client';

import React from 'react';
import { Search, MessageSquare } from 'lucide-react';
import { Conversation } from '@/types/message';

interface MessageInboxProps {
    conversations: Conversation[];
    onSelectConversation: (conversation: Conversation) => void;
    selectedConversation: Conversation | null;
}

export const MessageInbox: React.FC<MessageInboxProps> = ({
    conversations,
    onSelectConversation,
    selectedConversation
}) => {
    const formatTime = (timestamp: string) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
        
        if (diffInHours < 24) {
            return date.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true 
            });
        } else if (diffInHours < 168) { // Less than a week
            return date.toLocaleDateString('en-US', { weekday: 'short' });
        } else {
            return date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
            });
        }
    };

    const truncateMessage = (message: string, maxLength: number = 60) => {
        return message.length > maxLength ? message.substring(0, maxLength) + '...' : message;
    };

    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 bg-white">
                <div className="flex items-center mb-4">
                    <MessageSquare className="w-6 h-6 text-sky-600 mr-3" />
                    <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
                </div>
                
                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search messages..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                    />
                </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
                {conversations.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center p-6">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <MessageSquare className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                        <p className="text-gray-500 text-sm">Start a conversation with a host or guest</p>
                    </div>
                ) : (
                    conversations.map((conversation) => (
                        <div
                            key={conversation.id}
                            onClick={() => onSelectConversation(conversation)}
                            className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                                selectedConversation?.id === conversation.id ? 'bg-sky-50 border-sky-200' : ''
                            }`}
                        >
                            <div className="flex items-start space-x-3">
                                {/* Avatar */}
                                <div className="relative flex-shrink-0">
                                    <img
                                        src={conversation.participantAvatar}
                                        alt={conversation.participantName}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    {conversation.unreadCount > 0 && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                                            {conversation.unreadCount > 9 ? '9+' : conversation.unreadCount}
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className={`text-sm font-medium truncate ${
                                            conversation.unreadCount > 0 ? 'text-gray-900' : 'text-gray-900'
                                        }`}>
                                            {conversation.participantName}
                                        </h3>
                                        <span className="text-xs text-gray-500 flex-shrink-0">
                                            {formatTime(conversation.lastMessage.timestamp)}
                                        </span>
                                    </div>

                                    {/* Property info if available */}
                                    {conversation.property && (
                                        <div className="flex items-center space-x-2 mb-1">
                                            <img
                                                src={conversation.property.image}
                                                alt={conversation.property.title}
                                                className="w-6 h-6 rounded object-cover"
                                            />
                                            <span className="text-xs text-gray-600 truncate">
                                                {conversation.property.title}
                                            </span>
                                        </div>
                                    )}

                                    {/* Last message */}
                                    <p className={`text-sm truncate ${
                                        conversation.unreadCount > 0 ? 'text-gray-900 font-medium' : 'text-gray-600'
                                    }`}>
                                        {conversation.lastMessage.senderId === 1 ? 'You: ' : ''}
                                        {truncateMessage(conversation.lastMessage.content)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};