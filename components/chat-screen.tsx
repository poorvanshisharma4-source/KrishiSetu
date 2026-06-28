'use client'

import { useState } from 'react'
import {
  Search,
  Send,
  Paperclip,
  CheckCircle2,
  User,
  MessageSquare,
  Phone,
  SlidersHorizontal,
  Dot,
} from 'lucide-react'

// TypeScript Interfaces
interface Message {
  id: string
  sender: 'farmer' | 'buyer'
  content: string
  timestamp: string
}

interface Conversation {
  id: string
  companyName: string
  lastMessage: string
  timeAgo: string
  isUnread: boolean
  location?: string
  isActive?: boolean
}

interface ChatScreenProps {
  onSendMessage?: (message: string) => void
}

// Mock data
const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    companyName: 'FreshMart Corporate Buyer',
    lastMessage: 'Need premium quality tomatoes for Q2',
    timeAgo: '2h',
    isUnread: true,
    location: 'Mumbai, MH',
    isActive: true,
  },
  {
    id: '2',
    companyName: 'Export Goods Inc',
    lastMessage: 'Available for long-term contract',
    timeAgo: '5h',
    isUnread: false,
    location: 'Bangalore, KA',
  },
  {
    id: '3',
    companyName: 'Reliance Agri Procurement',
    lastMessage: 'What about volume availability?',
    timeAgo: '1d',
    isUnread: false,
    location: 'Delhi, DL',
  },
  {
    id: '4',
    companyName: 'GreenLeaf Distribution',
    lastMessage: 'Thanks for the crop details',
    timeAgo: '3d',
    isUnread: false,
    location: 'Chennai, TN',
  },
]

const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'buyer',
    content:
      'Hello! We are looking for premium quality tomatoes. Can you provide details on your current harvest?',
    timestamp: '10:30 AM',
  },
  {
    id: '2',
    sender: 'farmer',
    content:
      'Yes, absolutely! We have 500 quintals of premium tomatoes available. Quality grade: A+, average size 80-90mm.',
    timestamp: '10:45 AM',
  },
  {
    id: '3',
    sender: 'buyer',
    content: 'Great! What about pricing and delivery terms? We need delivery by next week.',
    timestamp: '11:00 AM',
  },
  {
    id: '4',
    sender: 'farmer',
    content:
      'Pricing is ₹3500 per quintal for bulk orders. We can arrange delivery within 3 days to any location in Maharashtra.',
    timestamp: '11:15 AM',
  },
  {
    id: '5',
    sender: 'buyer',
    content: 'Perfect! Can you share your land records and produce certifications?',
    timestamp: '11:30 AM',
  },
  {
    id: '6',
    sender: 'farmer',
    content: 'Of course! I am attaching our certificates now. Looking forward to working with you!',
    timestamp: '11:45 AM',
  },
]

export default function ChatScreen({ onSendMessage }: ChatScreenProps) {
  const [activeConversation, setActiveConversation] = useState<string>('1')
  const [messageInput, setMessageInput] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES)

  const activeBuyer = MOCK_CONVERSATIONS.find((c) => c.id === activeConversation)
  const filteredConversations = MOCK_CONVERSATIONS.filter((conv) =>
    conv.companyName.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = {
        id: String(messages.length + 1),
        sender: 'farmer',
        content: messageInput,
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      }
      setMessages([...messages, newMessage])
      setMessageInput('')
      onSendMessage?.(messageInput)
    }
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Left Sidebar - Conversations List */}
      <div className="w-full max-w-sm border-r border-border bg-card">
        {/* Header */}
        <div className="border-b border-border p-6">
          <h1 className="mb-4 text-2xl font-bold text-foreground">My Chats</h1>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setActiveConversation(conversation.id)}
              className={`flex cursor-pointer items-start gap-3 border-b border-border p-4 transition-all hover:bg-secondary ${
                activeConversation === conversation.id ? 'bg-muted' : 'bg-card'
              }`}
            >
              {/* Avatar */}
              <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <User className="h-6 w-6" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground text-sm md:text-base">
                    {conversation.companyName}
                  </h3>
                  <span className="text-xs text-muted-foreground">{conversation.timeAgo}</span>
                </div>
                <p className="truncate text-xs text-muted-foreground md:text-sm">
                  {conversation.lastMessage}
                </p>
              </div>

              {/* Unread Dot */}
              {conversation.isUnread && <Dot className="h-3 w-3 flex-shrink-0 fill-primary text-primary" />}
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Area */}
      <div className="hidden flex-1 flex-col bg-background sm:flex">
        {/* Chat Header */}
        {activeBuyer && (
          <>
            <div className="border-b border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">{activeBuyer.companyName}</h2>
                    <div className="flex items-center gap-2">
                      <Dot className="h-2 w-2 fill-primary text-primary" />
                      <span className="text-xs text-muted-foreground">Active now</span>
                      {activeBuyer.location && (
                        <>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{activeBuyer.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
            </div>

            {/* Messages Feed */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'farmer' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs rounded-2xl px-4 py-3 ${
                        message.sender === 'farmer'
                          ? 'rounded-br-none bg-primary text-white'
                          : 'rounded-bl-none bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p
                        className={`mt-1 text-xs ${
                          message.sender === 'farmer' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <div className="border-t border-border bg-card p-6">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Type your message here..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage()
                    }
                  }}
                  className="flex-1 rounded-lg border border-border bg-background py-3 px-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-background text-foreground hover:bg-muted transition-colors"
                  title="Attach file"
                >
                  <Paperclip className="h-5 w-5" />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50"
                  disabled={!messageInput.trim()}
                  title="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Empty State */}
      <div className="flex flex-1 flex-col items-center justify-center bg-background sm:hidden">
        <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
        <p className="text-center text-muted-foreground">Select a conversation to start chatting</p>
      </div>
    </div>
  )
}