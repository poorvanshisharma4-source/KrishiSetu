'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Search,
  Send,
  Paperclip,
  ArrowLeft,
  Shield,
} from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

interface Message {
  id: string
  sender: 'buyer' | 'farmer'
  text: string
  timestamp: string
}

interface Farmer {
  id: string
  name: string
  initials: string
  cropType: string
  lastMessage: string
  timestamp: string
  unread: boolean
  verified: boolean
  trustScore: number
  location: string
  avatar?: string
}

const farmers: Farmer[] = [
  {
    id: '1',
    name: 'Ramesh Kumar',
    initials: 'RK',
    cropType: 'Wheat Farmer',
    lastMessage: 'Hello Buyer, my wheat crop is ready.',
    timestamp: '2 min ago',
    unread: true,
    verified: true,
    trustScore: 4.9,
    location: 'Indore, MP',
  },
  {
    id: '2',
    name: 'Mohan Patel',
    initials: 'MP',
    cropType: 'Tomato Farmer',
    lastMessage: 'Fresh tomatoes are available.',
    timestamp: '10 min ago',
    unread: false,
    verified: true,
    trustScore: 4.8,
    location: 'Dewas, MP',
  },
  {
    id: '3',
    name: 'Ajay Singh',
    initials: 'AS',
    cropType: 'Vegetable Farmer',
    lastMessage: 'Ready to deliver vegetables.',
    timestamp: '30 min ago',
    unread: false,
    verified: true,
    trustScore: 4.7,
    location: 'Ujjain, MP',
  },
]

export default function BuyerFarmerChatDashboard() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t } = useLanguage()

  const farmerName = searchParams.get('farmer')

  const [selectedFarmerId, setSelectedFarmerId] = useState('1')
  const [messageInput, setMessageInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const [messages, setMessages] = useState<
    Record<string, Message[]>
  >({
    '1': [
      {
        id: '1',
        sender: 'farmer',
        text: 'Hello! I have premium wheat available this season.',
        timestamp: '10:30 AM',
      },
      {
        id: '2',
        sender: 'buyer',
        text: "What's the minimum order quantity?",
        timestamp: '10:32 AM',
      },
      {
        id: '3',
        sender: 'farmer',
        text: 'Minimum 500kg. I can supply 500kg next week',
        timestamp: '10:35 AM',
      },
    ],
    '2': [
      {
        id: '1',
        sender: 'farmer',
        text: 'Fresh tomatoes are available.',
        timestamp: '09:10 AM',
      },
    ],
    '3': [
      {
        id: '1',
        sender: 'farmer',
        text: 'Ready to deliver vegetables.',
        timestamp: '08:45 AM',
      },
    ],
  })

  useEffect(() => {
    if (!farmerName) return

    const farmer = farmers.find(
      (item) => item.name === farmerName
    )

    if (farmer) {
      setSelectedFarmerId(farmer.id)
    }
  }, [farmerName])

  const selectedFarmer = farmers.find(
    (farmer) => farmer.id === selectedFarmerId
  )

  const filteredFarmers = useMemo(() => {
    if (farmerName) {
      return farmers.filter(
        (farmer) => farmer.name === farmerName
      )
    }

    return farmers.filter(
      (farmer) =>
        farmer.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        farmer.cropType
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    )
  }, [farmerName, searchQuery])

  const handleSendMessage = () => {
    if (!messageInput.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'buyer',
      text: messageInput,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }

    setMessages((previousMessages) => ({
      ...previousMessages,
      [selectedFarmerId]: [
        ...(previousMessages[selectedFarmerId] || []),
        newMessage,
      ],
    }))

    setMessageInput('')
  }

  return (
    <div className="flex h-screen bg-[#F5F0E6]">

      {/* Left Sidebar */}
      <div className="w-full border-r border-gray-200 bg-white md:w-80">

        {/* Header */}
        <div className="border-b border-gray-200 p-4">

          <button
            onClick={() =>
              router.push('/buyer/dashboard')
            }
            className="mb-4 flex items-center gap-2 rounded-lg px-3 py-2 text-[#2E7D32] transition hover:bg-gray-100"
          >
            <ArrowLeft size={20} />

            <span className="text-sm font-medium">
              {t('buyerMessages.backToDashboard')}
            </span>
          </button>

          <h2 className="text-xl font-bold text-gray-800">
            {t('buyerMessages.growerNetworks')}
          </h2>

        </div>

        {/* Search Bar */}
        <div className="border-b border-gray-200 p-4">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder={t(
                'buyerMessages.searchFarmers'
              )}
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
            />

          </div>

        </div>

        {/* Farmers List */}
        <div className="flex-1 overflow-y-auto">

          {filteredFarmers.map((farmer) => (

            <div
              key={farmer.id}
              onClick={() =>
                setSelectedFarmerId(farmer.id)
              }
              className={`cursor-pointer border-b border-gray-100 p-4 transition hover:bg-gray-50 ${
                selectedFarmerId === farmer.id
                  ? 'border-l-4 border-l-[#2E7D32] bg-gray-50'
                  : ''
              }`}
            >

              <div className="flex items-start gap-3">

                {/* Avatar */}
                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2E7D32] text-sm font-bold text-white">
                    {farmer.initials}
                  </div>

                  {farmer.unread && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                  )}

                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">

                  <div className="mb-1 flex items-center justify-between">

                    <h3 className="text-sm font-semibold text-gray-800">
                      {farmer.name}
                    </h3>

                    <span className="text-xs text-gray-500">
                      {farmer.timestamp}
                    </span>

                  </div>

                  <p className="mb-1 text-xs text-gray-600">
                    {farmer.cropType}
                  </p>

                  <p className="truncate text-xs text-gray-600">
                    {farmer.lastMessage}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Desktop Chat Area */}
      {selectedFarmer && (
        <div className="hidden flex-1 flex-col bg-[#F5F0E6] md:flex">

          {/* Chat Header */}
          <div className="border-b border-gray-200 bg-white p-4">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E7D32] text-sm font-bold text-white">
                  {selectedFarmer.initials}
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="font-bold text-gray-800">
                      {selectedFarmer.name}
                    </h3>

                    {selectedFarmer.verified && (
                      <Shield
                        size={16}
                        className="text-[#2E7D32]"
                      />
                    )}

                  </div>

                  <p className="text-xs text-gray-600">
                    {selectedFarmer.location}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="text-sm font-semibold text-gray-800">
                  {t('buyerMessages.trustScore')}:{' '}
                  {selectedFarmer.trustScore}
                </p>

                <p className="text-xs text-gray-600">
                  ★★★★★
                </p>

              </div>

            </div>

          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">

            {(messages[selectedFarmerId] || []).map(
              (message) => (

                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'buyer'
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >

                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 lg:max-w-md ${
                      message.sender === 'buyer'
                        ? 'rounded-br-none bg-[#2E7D32] text-white'
                        : 'rounded-bl-none border border-gray-300 bg-[#F5F0E6] text-gray-800'
                    }`}
                  >

                    <p className="text-sm">
                      {message.text}
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        message.sender === 'buyer'
                          ? 'text-green-100'
                          : 'text-gray-600'
                      }`}
                    >
                      {message.timestamp}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 bg-white p-4">

            <div className="flex items-center gap-3">

              <button
                type="button"
                className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
              >
                <Paperclip size={20} />
              </button>

              <input
                type="text"
                placeholder={t(
                  'buyerMessages.typeYourMessage'
                )}
                value={messageInput}
                onChange={(event) =>
                  setMessageInput(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSendMessage()
                  }
                }}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
              />

              <button
                type="button"
                onClick={handleSendMessage}
                className="rounded-lg bg-[#2E7D32] p-2 text-white transition hover:bg-[#1b5e20]"
              >
                <Send size={20} />
              </button>

            </div>

          </div>

        </div>
      )}

      {/* Mobile Chat Area */}
      {selectedFarmer && (
        <div className="flex flex-1 flex-col bg-[#F5F0E6] md:hidden">

          {/* Mobile Header */}
          <div className="border-b border-gray-200 bg-white p-4">

            <div className="flex items-center justify-between">

              <button
                type="button"
                onClick={() =>
                  setSelectedFarmerId('')
                }
                className="rounded-lg p-2 transition hover:bg-gray-100"
              >
                <ArrowLeft
                  size={20}
                  className="text-gray-600"
                />
              </button>

              <div className="flex-1 text-center">

                <h3 className="font-bold text-gray-800">
                  {selectedFarmer.name}
                </h3>

                <p className="text-xs text-gray-600">
                  {selectedFarmer.location}
                </p>

              </div>

              <div className="w-8" />

            </div>

          </div>

          {/* Mobile Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">

            {(messages[selectedFarmerId] || []).map(
              (message) => (

                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'buyer'
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >

                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 ${
                      message.sender === 'buyer'
                        ? 'rounded-br-none bg-[#2E7D32] text-white'
                        : 'rounded-bl-none border border-gray-300 bg-[#F5F0E6] text-gray-800'
                    }`}
                  >

                    <p className="text-sm">
                      {message.text}
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        message.sender === 'buyer'
                          ? 'text-green-100'
                          : 'text-gray-600'
                      }`}
                    >
                      {message.timestamp}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

          {/* Mobile Input */}
          <div className="border-t border-gray-200 bg-white p-4">

            <div className="flex items-center gap-3">

              <button
                type="button"
                className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
              >
                <Paperclip size={20} />
              </button>

              <input
                type="text"
                placeholder={t(
                  'buyerMessages.typeMessage'
                )}
                value={messageInput}
                onChange={(event) =>
                  setMessageInput(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSendMessage()
                  }
                }}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
              />

              <button
                type="button"
                onClick={handleSendMessage}
                className="rounded-lg bg-[#2E7D32] p-2 text-white transition hover:bg-[#1b5e20]"
              >
                <Send size={20} />
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}