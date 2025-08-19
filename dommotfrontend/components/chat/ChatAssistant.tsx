import React, { useState, useCallback } from 'react';
import { ChatMessage, ChatState } from '@/types';
import ChatToggle from './ChatToggle';
import ChatWindow from './ChatWindow';

const ChatAssistant: React.FC = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isOpen: false,
    isTyping: false,
  });

  const generateResponse = useCallback((userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple rule-based responses for demonstration
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm here to help you with your Dommot experience. Are you looking for a place to stay?";
    }
    
    if (lowerMessage.includes('search') || lowerMessage.includes('find')) {
      return "I can help you find the perfect place! You can use our search bar to filter by location, dates, and number of guests. What kind of accommodation are you looking for?";
    }
    
    if (lowerMessage.includes('book') || lowerMessage.includes('reservation')) {
      return "To make a booking, simply click on any property that interests you and follow the booking process. Do you need help with anything specific about booking?";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Prices vary by location, dates, and property type. You can see all pricing details on each property listing. Would you like tips on finding great deals?";
    }
    
    if (lowerMessage.includes('cancel')) {
      return "For cancellations, please check the cancellation policy on your booking confirmation. Each property has its own policy. Do you need help with a specific booking?";
    }
    
    if (lowerMessage.includes('help')) {
      return "I'm here to help! You can ask me about searching for properties, booking, pricing, cancellations, or anything else about using Dommot. What would you like to know?";
    }
    
    // Default response
    return "I understand you're asking about: " + userMessage + ". While I'm still learning, I'd be happy to help you navigate Dommot or connect you with our support team for more detailed assistance.";
  }, []);

  const handleSendMessage = useCallback((content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true,
    }));

    // Simulate API call delay
    setTimeout(() => {
      const response = generateResponse(content);
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'assistant',
        timestamp: new Date(),
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isTyping: false,
      }));
    }, 1000 + Math.random() * 2000); // 1-3 seconds delay
  }, [generateResponse]);

  const toggleChat = useCallback(() => {
    setChatState(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  }, []);

  const closeChat = useCallback(() => {
    setChatState(prev => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  return (
    <>
      <ChatToggle isOpen={chatState.isOpen} onClick={toggleChat} />
      <ChatWindow
        isOpen={chatState.isOpen}
        messages={chatState.messages}
        isTyping={chatState.isTyping}
        onSendMessage={handleSendMessage}
        onClose={closeChat}
      />
    </>
  );
};

export default ChatAssistant;