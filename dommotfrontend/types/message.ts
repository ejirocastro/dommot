export interface Message {
  id: number;
  content: string;
  timestamp: string;
  senderId: number;
  senderName: string;
  senderAvatar: string;
  isRead: boolean;
}

export interface Conversation {
  id: number;
  participantId: number;
  participantName: string;
  participantAvatar: string;
  lastMessage: Message;
  messages: Message[];
  unreadCount: number;
  property?: {
    id: number;
    title: string;
    image: string;
  };
}

export interface MessageUser {
  id: number;
  name: string;
  avatar: string;
  isHost?: boolean;
}