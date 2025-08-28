'use client';

import React, { useState } from 'react';
import {
    SimpleHeader,
    Footer,
    MobileMenu,
    AnimatedBackground
} from '@/components';
import { MessageInbox } from '@/components/messages/MessageInbox';
import { ConversationView } from '@/components/messages/ConversationView';
import { useScrollPosition } from '@/hooks';
import { conversations, currentUser } from '@/data/messages';
import { Conversation } from '@/types/message';

const MessagesPage: React.FC = () => {
    // Mobile navigation state
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    // Messages state
    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
    const [conversationsData, setConversationsData] = useState(conversations);

    // Custom hook for scroll position tracking
    const scrollY = useScrollPosition();

    const handleSelectConversation = (conversation: Conversation) => {
        setSelectedConversation(conversation);
        
        // Mark messages as read
        setConversationsData(prev => 
            prev.map(conv => 
                conv.id === conversation.id 
                    ? { 
                        ...conv, 
                        unreadCount: 0,
                        messages: conv.messages.map(msg => ({ ...msg, isRead: true }))
                      }
                    : conv
            )
        );
    };

    const handleSendMessage = (content: string) => {
        if (!selectedConversation) return;

        const newMessage = {
            id: Date.now(),
            content,
            timestamp: new Date().toISOString(),
            senderId: currentUser.id,
            senderName: currentUser.name,
            senderAvatar: currentUser.avatar,
            isRead: true
        };

        setConversationsData(prev => 
            prev.map(conv => 
                conv.id === selectedConversation.id
                    ? {
                        ...conv,
                        messages: [...conv.messages, newMessage],
                        lastMessage: newMessage
                      }
                    : conv
            )
        );

        // Update selected conversation with new message
        setSelectedConversation(prev => 
            prev ? {
                ...prev,
                messages: [...prev.messages, newMessage],
                lastMessage: newMessage
            } : null
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-sky-100 relative overflow-hidden">
            <AnimatedBackground />

            <SimpleHeader
                scrollY={scrollY}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <main className="max-w-7xl mx-auto pt-20 lg:pt-24 pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                    <div className="flex h-[80vh]">
                        {/* Conversations List */}
                        <div className={`${selectedConversation ? 'hidden lg:block' : 'block'} lg:w-1/3 border-r border-gray-200`}>
                            <MessageInbox 
                                conversations={conversationsData}
                                onSelectConversation={handleSelectConversation}
                                selectedConversation={selectedConversation}
                            />
                        </div>

                        {/* Conversation View */}
                        <div className={`${selectedConversation ? 'block' : 'hidden lg:block'} flex-1`}>
                            {selectedConversation ? (
                                <ConversationView 
                                    conversation={selectedConversation}
                                    currentUser={currentUser}
                                    onSendMessage={handleSendMessage}
                                    onBack={() => setSelectedConversation(null)}
                                />
                            ) : (
                                <div className="hidden lg:flex items-center justify-center h-full bg-gray-50">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                                        <p className="text-gray-500">Choose a conversation from the list to start messaging</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />
        </div>
    );
};

export default MessagesPage;