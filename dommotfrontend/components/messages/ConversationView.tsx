'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, MoreVertical, Phone, Video } from 'lucide-react';
import { Conversation, MessageUser } from '@/types/message';

interface ConversationViewProps {
    conversation: Conversation;
    currentUser: MessageUser;
    onSendMessage: (content: string) => void;
    onBack: () => void;
}

export const ConversationView: React.FC<ConversationViewProps> = ({
    conversation,
    currentUser,
    onSendMessage,
    onBack
}) => {
    const [newMessage, setNewMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Auto scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [conversation.messages]);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [newMessage]);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            onSendMessage(newMessage.trim());
            setNewMessage('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const formatMessageTime = (timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
    };

    const formatMessageDate = (timestamp: string) => {
        const date = new Date(timestamp);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return date.toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    };

    const shouldShowDateDivider = (currentMessage: any, previousMessage?: any) => {
        if (!previousMessage) return true;
        
        const currentDate = new Date(currentMessage.timestamp).toDateString();
        const previousDate = new Date(previousMessage.timestamp).toDateString();
        
        return currentDate !== previousDate;
    };

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        {/* Mobile back button */}
                        <button
                            onClick={onBack}
                            className="lg:hidden p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-600" />
                        </button>

                        <img
                            src={conversation.participantAvatar}
                            alt={conversation.participantName}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                {conversation.participantName}
                            </h2>
                            {conversation.property && (
                                <p className="text-sm text-gray-600">
                                    {conversation.property.title}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Phone className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Video className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Property card if available */}
                {conversation.property && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center space-x-3">
                        <img
                            src={conversation.property.image}
                            alt={conversation.property.title}
                            className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="font-medium text-gray-900">
                                {conversation.property.title}
                            </h3>
                            <p className="text-sm text-gray-600">Property Discussion</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {conversation.messages.map((message, index) => {
                    const previousMessage = index > 0 ? conversation.messages[index - 1] : undefined;
                    const showDateDivider = shouldShowDateDivider(message, previousMessage);
                    const isCurrentUser = message.senderId === currentUser.id;

                    return (
                        <div key={message.id}>
                            {/* Date divider */}
                            {showDateDivider && (
                                <div className="flex justify-center my-6">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                        {formatMessageDate(message.timestamp)}
                                    </span>
                                </div>
                            )}

                            {/* Message */}
                            <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                                    isCurrentUser ? 'flex-row-reverse space-x-reverse' : ''
                                }`}>
                                    {!isCurrentUser && (
                                        <img
                                            src={message.senderAvatar}
                                            alt={message.senderName}
                                            className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                                        />
                                    )}
                                    
                                    <div className={`px-4 py-2 rounded-2xl ${
                                        isCurrentUser 
                                            ? 'bg-sky-600 text-white' 
                                            : 'bg-gray-100 text-gray-900'
                                    }`}>
                                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                        <p className={`text-xs mt-1 ${
                                            isCurrentUser ? 'text-sky-100' : 'text-gray-500'
                                        }`}>
                                            {formatMessageTime(message.timestamp)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
                
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="flex items-end space-x-2 max-w-xs lg:max-w-md">
                            <img
                                src={conversation.participantAvatar}
                                alt={conversation.participantName}
                                className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="px-4 py-2 bg-gray-100 rounded-2xl">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-end space-x-3">
                    <div className="flex-1 relative">
                        <textarea
                            ref={textareaRef}
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            rows={1}
                            className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none resize-none max-h-32"
                            style={{ minHeight: '40px' }}
                        />
                    </div>
                    
                    <button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className={`p-2 rounded-full transition-colors ${
                            newMessage.trim()
                                ? 'bg-sky-600 text-white hover:bg-sky-700'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};