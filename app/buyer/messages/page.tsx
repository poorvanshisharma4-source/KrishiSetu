'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, Send, Paperclip, ArrowLeft, Check, Shield } from 'lucide-react';

interface Message {
  id: string;
  sender: 'buyer' | 'farmer';
  text: string;
  timestamp: string;
}

interface Farmer {
  id: string;
  name: string;
  initials: string;
  cropType: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  verified: boolean;
  trustScore: number;
  location: string;
  avatar?: string;
}

export default function BuyerFarmerChatDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
const farmerName = searchParams.get("farmer");
  const [selectedFarmerId, setSelectedFarmerId] = useState<string>('1');
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for farmers
  const farmers: Farmer[] = [
  {
    id: "1",
    name: "Ramesh Kumar",
    initials: "RK",
    cropType: "Wheat Farmer",
    lastMessage: "Hello Buyer, my wheat crop is ready.",
    timestamp: "2 min ago",
    unread: true,
    verified: true,
    trustScore: 4.9,
    location: "Indore, MP",
  },
  {
    id: "2",
    name: "Mohan Patel",
    initials: "MP",
    cropType: "Tomato Farmer",
    lastMessage: "Fresh tomatoes are available.",
    timestamp: "10 min ago",
    unread: false,
    verified: true,
    trustScore: 4.8,
    location: "Dewas, MP",
  },
  {
    id: "3",
    name: "Ajay Singh",
    initials: "AS",
    cropType: "Vegetable Farmer",
    lastMessage: "Ready to deliver vegetables.",
    timestamp: "30 min ago",
    unread: false,
    verified: true,
    trustScore: 4.7,
    location: "Ujjain, MP",
  },
];

useEffect(() => {
  if (!farmerName) return;

  const farmer = farmers.find(
    (f) => f.name === farmerName
  );

  if (farmer) {
    setSelectedFarmerId(farmer.id);
  }
}, [farmerName, farmers]);

  // Mock messages for selected farmer
  const [messages, setMessages] = useState<Record<string, Message[]>>({
  "1": [
    {
      id: "1",
      sender: "farmer",
      text: "Hello! I have premium wheat available this season.",
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      sender: "buyer",
      text: "What's the minimum order quantity?",
      timestamp: "10:32 AM",
    },
    {
      id: "3",
      sender: "farmer",
      text: "Minimum 500kg. I can supply 500kg next week",
      timestamp: "10:35 AM",
    },
  ],

  "2": [
    {
      id: "1",
      sender: "farmer",
      text: "Fresh tomatoes are available.",
      timestamp: "09:10 AM",
    },
  ],

  "3": [
    {
      id: "1",
      sender: "farmer",
      text: "Ready to deliver vegetables.",
      timestamp: "08:45 AM",
    },
  ],
});

  const selectedFarmer = farmers.find((f) => f.id === selectedFarmerId);
  const filteredFarmers = farmerName
  ? farmers.filter((farmer) => farmer.name === farmerName)
  : farmers.filter(
      (farmer) =>
        farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        farmer.cropType.toLowerCase().includes(searchQuery.toLowerCase())
    );
  const handleSendMessage = () => {
  if (!messageInput.trim()) return;

  const newMessage: Message = {
    id: Date.now().toString(),
    sender: "buyer",
    text: messageInput,
    timestamp: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  setMessages((prev) => ({
    ...prev,
    [selectedFarmerId]: [
      ...(prev[selectedFarmerId] || []),
      newMessage,
    ],
  }));

  setMessageInput("");
};

  return (
    <div className="flex h-screen bg-[#F5F0E6]">
      {/* Left Sidebar */}
      <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={() => router.push('/buyer/dashboard')}
            className="flex items-center gap-2 text-[#2E7D32] hover:bg-gray-100 px-3 py-2 rounded-lg transition mb-4"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Dashboard</span>
          </button>
          <h2 className="text-xl font-bold text-gray-800">Grower Networks</h2>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search farmers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
            />
          </div>
        </div>

        {/* Farmers List */}
        <div className="flex-1 overflow-y-auto">
          {filteredFarmers.map((farmer) => (
            <div
              key={farmer.id}
              onClick={() => setSelectedFarmerId(farmer.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer transition hover:bg-gray-50 ${
                selectedFarmerId === farmer.id ? 'bg-gray-50 border-l-4 border-l-[#2E7D32]' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#2E7D32] text-white flex items-center justify-center font-bold text-sm">
                    {farmer.initials}
                  </div>
                  {farmer.unread && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-800 text-sm">{farmer.name}</h3>
                    <span className="text-xs text-gray-500">{farmer.timestamp}</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{farmer.cropType}</p>
                  <p className="text-xs text-gray-600 truncate">{farmer.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Area */}
      {selectedFarmer && (
        <div className="hidden md:flex flex-1 flex-col bg-[#F5F0E6]">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2E7D32] text-white flex items-center justify-center font-bold text-sm">
                  {selectedFarmer.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-800">{selectedFarmer.name}</h3>
                    {selectedFarmer.verified && (
                      <Shield size={16} className="text-[#2E7D32]" />
                    )}
                  </div>
                  <p className="text-xs text-gray-600">{selectedFarmer.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">
                  Trust Score: {selectedFarmer.trustScore}
                </p>
                <p className="text-xs text-gray-600">★★★★★</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {(messages[selectedFarmerId] || []).map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'buyer'
                      ? 'bg-[#2E7D32] text-white rounded-br-none'
                      : 'bg-[#F5F0E6] border border-gray-300 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'buyer' ? 'text-green-100' : 'text-gray-600'
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600">
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#1b5e20] transition"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile View - Show selected chat */}
      {selectedFarmer && (
        <div className="flex md:hidden flex-1 flex-col bg-[#F5F0E6]">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedFarmerId('')}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </button>
              <div className="flex-1 text-center">
                <h3 className="font-bold text-gray-800">{selectedFarmer.name}</h3>
                <p className="text-xs text-gray-600">{selectedFarmer.location}</p>
              </div>
              <div className="w-8"></div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {(messages[selectedFarmerId] || []).map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'buyer'
                      ? 'bg-[#2E7D32] text-white rounded-br-none'
                      : 'bg-[#F5F0E6] border border-gray-300 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'buyer' ? 'text-green-100' : 'text-gray-600'
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600">
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                placeholder="Type message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#1b5e20] transition"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}