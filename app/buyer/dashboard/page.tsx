<<<<<<< HEAD
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sprout, LayoutDashboard, FileText, Users, TrendingUp, Bell, Settings, LogOut, Plus, Search, Filter, MapPin, Calendar, Wallet, BarChart3, Award, MessageSquare, ArrowRight, Building2, CheckCircle2, Clock, Star, ChevronRight, Package, Truck, Eye } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {Button} from '@/components/ui/button';

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/buyer/dashboard' },
    { id: 'post', icon: Plus, label: 'Post Requirement', path: '/buyer/post-requirement' },
    { id: 'contracts', icon: FileText, label: 'My Contracts', path: '/buyer/contracts' },
    { id: 'orders', icon: Package, label: 'Active Orders', path: '/buyer/active-orders' },
    // change here
    { id: 'farmers', icon: Users, label: 'Connected Farmers', path: '/buyer/connected-farmers' },
    // also here connected-farmers
    { id: 'analytics', icon: BarChart3, label: 'Analytics', path: '/buyer/analytics' },
    // change here analytics add kr
    { id: 'messages', icon: MessageSquare, label: 'Messages', path: '/buyer/messages' },
    // here also add messages
    { id: 'profile', icon: Settings, label: 'Profile', path: '/buyer/profile' },
  ];

  const quickStats = [
    { icon: FileText, label: 'Active Requirements', value: '8', change: '12 pending bids', color: 'text-amber-700 bg-amber-100' },
    { icon: Package, label: 'Active Orders', value: '5', change: '2 in transit', color: 'text-green-700 bg-green-100' },
    { icon: Users, label: 'Connected Farmers', value: '15', change: '3 new requests', color: 'text-blue-700 bg-blue-100' },
    { icon: Wallet, label: 'Total Transactions', value: '₹12.5L', change: 'This fiscal year', color: 'text-purple-700 bg-purple-100' },
  ];

  const postedRequirements = [
    { id: 'REQ-2024-001', crop: 'Organic Tomatoes', quantity: '500 kg', price: '₹28/kg', quality: 'Grade A, Organic Certified', deadline: '2024-03-15', location: 'Maharashtra', status: 'Open', statusColor: 'bg-blue-100 text-blue-700', bids: 8 },
    { id: 'REQ-2024-002', crop: 'Fresh Spinach', quantity: '200 kg/week', price: '₹30/kg', quality: 'Organic, pesticide-free', deadline: '2024-02-28', location: 'Pune', status: 'In Negotiation', statusColor: 'bg-amber-100 text-amber-700', bids: 12 },
  ];

  const activeOrders = [
    { id: 'ORD-2024-001', crop: 'Basmati Rice', farmer: 'Rajesh Kumar', farmerAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100', quantity: '2000 kg', price: '₹45/kg', totalValue: '₹90,000', status: 'Growing', statusColor: 'bg-primary-100 text-primary-700', progress: 45 },
    { id: 'ORD-2024-002', crop: 'Fresh Vegetables Mix', farmer: 'Lakshmi Devi', farmerAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100', quantity: '300 kg', price: '₹25/kg', totalValue: '₹7,500', status: 'In Transit', statusColor: 'bg-blue-100 text-blue-700', progress: 85 },
  ];

  const connectedFarmers = [
    { id: 'FRM-001', name: 'Rajesh Kumar', location: 'Patna, Bihar', crops: ['Tomatoes', 'Rice', 'Wheat'], trustLevel: 'Gold', trustColor: 'text-yellow-500', rating: 4.8, reviewCount: 45, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100', contractsCompleted: 12 },
    { id: 'FRM-002', name: 'Lakshmi Devi', location: 'Visakhapatnam, Andhra Pradesh', crops: ['Turmeric', 'Rice', 'Vegetables'], trustLevel: 'Silver', trustColor: 'text-gray-400', rating: 4.6, reviewCount: 28, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100', contractsCompleted: 8 },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0]">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
    <Sprout className="h-5 w-5" />
  </span>

  <span className="font-heading text-xl font-bold text-foreground">
    Krishi<span className="text-primary">Setu</span>
  </span>
</Link>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search farmers, crops, contracts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/buyer/post-requirement">
                <Button
  variant="default"
  size="sm"
  className="bg-amber-600 hover:bg-amber-700"
>
  <Plus className="w-4 h-4 mr-2" />
  Post Requirement
</Button>
              </Link>
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <Image src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Buyer" width={36} height={36} className="rounded-full object-cover border-2 border-amber-200" />
                <div className="hidden md:block">
                  <div className="text-sm font-semibold text-gray-900">FreshMart Pvt Ltd</div>
                  <div className="text-xs text-gray-500">Verified Buyer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === item.id ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <Link href="/buyer/login" className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-display font-bold mb-2">Welcome, FreshMart!</h1>
                  <p className="text-amber-100 text-lg">You have 8 new bids on your requirements and 5 active orders in progress.</p>
                </div>
                <div className="hidden md:block">
                  <Package className="w-16 h-16 text-amber-300 opacity-50" />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all">
                    <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                    <div className="text-xs text-green-600 mt-1">{stat.change}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Posted Requirements */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold text-gray-900">Posted Requirements</h2>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Filter className="w-4 h-4" />
                    <span className="text-sm font-medium">Filter</span>
                  </button>
                  <Link href="/buyer/post-requirement">
  <Button
    variant="default"
    size="sm"
    className="bg-amber-600 hover:bg-amber-700"
  >
    <Plus className="w-4 h-4 mr-2" />
    New
  </Button>
</Link>
                </div>
              </div>
              <div className="space-y-4">
                {postedRequirements.map((req, index) => (
                  <motion.div
                    key={req.id}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{req.crop}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${req.statusColor}`}
                           >
                          {req.status}
                       </span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />{req.location}</span>
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />Deadline: {req.deadline}</span>
                        <span className="flex items-center"><Package className="w-3 h-3 mr-1" />{req.quantity}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-amber-600">{req.price}</div>
                        <div className="text-xs text-gray-500">Per kg</div>
                      </div>
                      <div className="text-center px-4 border-l border-gray-200">
                        <div className="text-lg font-bold text-gray-900">{req.bids}</div>
                        <div className="text-xs text-gray-500">Bids</div>
                      </div>
                    </div>
<Button variant="outline" size="sm">
  <Eye className="w-4 h-4 mr-2" />
  View Bids
</Button>                  </motion.div>
                ))}
              </div>
            </div>

            {/* Active Orders */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold text-gray-900">Active Orders</h2>
                <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center">View All Orders <ChevronRight className="w-4 h-4" /></Link>
              </div>
              <div className="space-y-4">
                {activeOrders.map((order, index) => (
                  <motion.div key={order.id} className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                    <div className="flex items-center gap-3 w-full md:w-auto md:min-w-[200px]">
                      <Image src={order.farmerAvatar} alt={order.farmer} width={48} height={48} className="rounded-full object-cover border-2 border-amber-200" />
                      <div>
                        <div className="font-semibold text-gray-900">{order.farmer}</div>
                        <div className="text-sm text-gray-500">{order.id}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{order.crop}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${order.statusColor}`}
                          >
                           {order.status}
                       </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">Qty: {order.quantity} | Price: {order.price}</div>
                    </div>
                    <div className="w-full md:w-40">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-semibold">{order.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div className={`h-2 rounded-full ${order.progress >= 100 ? 'bg-green-500' : order.progress >= 50 ? 'bg-amber-500' : 'bg-blue-500'}`} initial={{ width: 0 }} animate={{ width: `${order.progress}%` }} transition={{ duration: 0.8, delay: 0.3 }} />
                      </div>
                      {order.status === 'In Transit' && (<div className="flex items-center text-xs text-blue-600 mt-1"><Truck className="w-3 h-3 mr-1 animate-bounce" />On the way</div>)}
                    </div>
                    <div className="text-center px-4">
                      <div className="text-lg font-bold text-amber-600">{order.totalValue}</div>
                      <div className="text-xs text-gray-500">Total Value</div>
                    </div>
                    <Button variant="outline" size="sm">Track Order</Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connected Farmers */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold text-gray-900">Connected Farmers</h2>
                <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center">Browse All <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {connectedFarmers.map((farmer, index) => (
                  <motion.div key={farmer.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
                    <Image src={farmer.avatar} alt={farmer.name} width={56} height={56} className="rounded-full object-cover border-2 border-amber-200" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{farmer.name}</h3>
                        <div className="flex items-center">
                          <Award className={`w-4 h-4 mr-1 ${farmer.trustColor}`} />
                          <span className="text-xs font-medium text-gray-600">{farmer.trustLevel}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-2"><MapPin className="w-3 h-3 mr-1" />{farmer.location}</div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {farmer.crops.slice(0, 3).map((crop) => ( <span
                         key={crop}
                         className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                          >
                         {crop}
                         </span>))}
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center text-gray-500"><Star className="w-3 h-3 text-amber-400 fill-amber-400 mr-1" />{farmer.rating} ({farmer.reviewCount})</div>
                        <div className="text-gray-400">{farmer.contractsCompleted} contracts</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="default" size="sm" className="bg-amber-600 hover:bg-amber-700">Message</Button>
                      <Button variant="outline" size="sm">View Profile</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
=======
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sprout, LayoutDashboard, FileText, Users, TrendingUp, Bell, Settings, LogOut, Plus, Search, Filter, MapPin, Calendar, Wallet, BarChart3, Award, MessageSquare, ArrowRight, Building2, CheckCircle2, Clock, Star, ChevronRight, Package, Truck, Eye } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {Button} from '@/components/ui/button';

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/buyer/dashboard' },
    { id: 'post', icon: Plus, label: 'Post Requirement', path: '/buyer/post-requirement' },
    { id: 'contracts', icon: FileText, label: 'My Contracts', path: '/buyer/contracts' },
    { id: 'orders', icon: Package, label: 'Active Orders', path: '/buyer/active-orders' },
    // change here
    { id: 'farmers', icon: Users, label: 'Connected Farmers', path: '/buyer/connected-farmers' },
    // also here connected-farmers
    { id: 'analytics', icon: BarChart3, label: 'Analytics', path: '/buyer/analytics' },
    // change here analytics add kr
    { id: 'messages', icon: MessageSquare, label: 'Messages', path: '/buyer/messages' },
    // here also add messages
    { id: 'profile', icon: Settings, label: 'Profile', path: '/buyer/profile' },
  ];

  const quickStats = [
    { icon: FileText, label: 'Active Requirements', value: '8', change: '12 pending bids', color: 'text-amber-700 bg-amber-100' },
    { icon: Package, label: 'Active Orders', value: '5', change: '2 in transit', color: 'text-green-700 bg-green-100' },
    { icon: Users, label: 'Connected Farmers', value: '15', change: '3 new requests', color: 'text-blue-700 bg-blue-100' },
    { icon: Wallet, label: 'Total Transactions', value: '₹12.5L', change: 'This fiscal year', color: 'text-purple-700 bg-purple-100' },
  ];

  const postedRequirements = [
    { id: 'REQ-2024-001', crop: 'Organic Tomatoes', quantity: '500 kg', price: '₹28/kg', quality: 'Grade A, Organic Certified', deadline: '2024-03-15', location: 'Maharashtra', status: 'Open', statusColor: 'bg-blue-100 text-blue-700', bids: 8 },
    { id: 'REQ-2024-002', crop: 'Fresh Spinach', quantity: '200 kg/week', price: '₹30/kg', quality: 'Organic, pesticide-free', deadline: '2024-02-28', location: 'Pune', status: 'In Negotiation', statusColor: 'bg-amber-100 text-amber-700', bids: 12 },
  ];

  const activeOrders = [
    { id: 'ORD-2024-001', crop: 'Basmati Rice', farmer: 'Rajesh Kumar', farmerAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100', quantity: '2000 kg', price: '₹45/kg', totalValue: '₹90,000', status: 'Growing', statusColor: 'bg-primary-100 text-primary-700', progress: 45 },
    { id: 'ORD-2024-002', crop: 'Fresh Vegetables Mix', farmer: 'Lakshmi Devi', farmerAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100', quantity: '300 kg', price: '₹25/kg', totalValue: '₹7,500', status: 'In Transit', statusColor: 'bg-blue-100 text-blue-700', progress: 85 },
  ];

  const connectedFarmers = [
    { id: 'FRM-001', name: 'Rajesh Kumar', location: 'Patna, Bihar', crops: ['Tomatoes', 'Rice', 'Wheat'], trustLevel: 'Gold', trustColor: 'text-yellow-500', rating: 4.8, reviewCount: 45, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100', contractsCompleted: 12 },
    { id: 'FRM-002', name: 'Lakshmi Devi', location: 'Visakhapatnam, Andhra Pradesh', crops: ['Turmeric', 'Rice', 'Vegetables'], trustLevel: 'Silver', trustColor: 'text-gray-400', rating: 4.6, reviewCount: 28, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100', contractsCompleted: 8 },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0]">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
    <Sprout className="h-5 w-5" />
  </span>

  <span className="font-heading text-xl font-bold text-foreground">
    Krishi<span className="text-primary">Setu</span>
  </span>
</Link>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search farmers, crops, contracts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/buyer/post-requirement">
                <Button
  variant="default"
  size="sm"
  className="bg-amber-600 hover:bg-amber-700"
>
  <Plus className="w-4 h-4 mr-2" />
  Post Requirement
</Button>
              </Link>
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <Image src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Buyer" width={36} height={36} className="rounded-full object-cover border-2 border-amber-200" />
                <div className="hidden md:block">
                  <div className="text-sm font-semibold text-gray-900">FreshMart Pvt Ltd</div>
                  <div className="text-xs text-gray-500">Verified Buyer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === item.id ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <Link href="/buyer/login" className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-display font-bold mb-2">Welcome, FreshMart!</h1>
                  <p className="text-amber-100 text-lg">You have 8 new bids on your requirements and 5 active orders in progress.</p>
                </div>
                <div className="hidden md:block">
                  <Package className="w-16 h-16 text-amber-300 opacity-50" />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all">
                    <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                    <div className="text-xs text-green-600 mt-1">{stat.change}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Posted Requirements */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold text-gray-900">Posted Requirements</h2>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Filter className="w-4 h-4" />
                    <span className="text-sm font-medium">Filter</span>
                  </button>
                  <Link href="/buyer/post-requirement">
  <Button
    variant="default"
    size="sm"
    className="bg-amber-600 hover:bg-amber-700"
  >
    <Plus className="w-4 h-4 mr-2" />
    New
  </Button>
</Link>
                </div>
              </div>
              <div className="space-y-4">
                {postedRequirements.map((req, index) => (
                  <motion.div
                    key={req.id}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{req.crop}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${req.statusColor}`}
                           >
                          {req.status}
                       </span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />{req.location}</span>
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />Deadline: {req.deadline}</span>
                        <span className="flex items-center"><Package className="w-3 h-3 mr-1" />{req.quantity}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-amber-600">{req.price}</div>
                        <div className="text-xs text-gray-500">Per kg</div>
                      </div>
                      <div className="text-center px-4 border-l border-gray-200">
                        <div className="text-lg font-bold text-gray-900">{req.bids}</div>
                        <div className="text-xs text-gray-500">Bids</div>
                      </div>
                    </div>
<Button variant="outline" size="sm">
  <Eye className="w-4 h-4 mr-2" />
  View Bids
</Button>                  </motion.div>
                ))}
              </div>
            </div>

            {/* Active Orders */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold text-gray-900">Active Orders</h2>
                <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center">View All Orders <ChevronRight className="w-4 h-4" /></Link>
              </div>
              <div className="space-y-4">
                {activeOrders.map((order, index) => (
                  <motion.div key={order.id} className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                    <div className="flex items-center gap-3 w-full md:w-auto md:min-w-[200px]">
                      <Image src={order.farmerAvatar} alt={order.farmer} width={48} height={48} className="rounded-full object-cover border-2 border-amber-200" />
                      <div>
                        <div className="font-semibold text-gray-900">{order.farmer}</div>
                        <div className="text-sm text-gray-500">{order.id}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{order.crop}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${order.statusColor}`}
                          >
                           {order.status}
                       </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">Qty: {order.quantity} | Price: {order.price}</div>
                    </div>
                    <div className="w-full md:w-40">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-semibold">{order.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div className={`h-2 rounded-full ${order.progress >= 100 ? 'bg-green-500' : order.progress >= 50 ? 'bg-amber-500' : 'bg-blue-500'}`} initial={{ width: 0 }} animate={{ width: `${order.progress}%` }} transition={{ duration: 0.8, delay: 0.3 }} />
                      </div>
                      {order.status === 'In Transit' && (<div className="flex items-center text-xs text-blue-600 mt-1"><Truck className="w-3 h-3 mr-1 animate-bounce" />On the way</div>)}
                    </div>
                    <div className="text-center px-4">
                      <div className="text-lg font-bold text-amber-600">{order.totalValue}</div>
                      <div className="text-xs text-gray-500">Total Value</div>
                    </div>
                    <Button variant="outline" size="sm">Track Order</Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connected Farmers */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold text-gray-900">Connected Farmers</h2>
                <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center">Browse All <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {connectedFarmers.map((farmer, index) => (
                  <motion.div key={farmer.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
                    <Image src={farmer.avatar} alt={farmer.name} width={56} height={56} className="rounded-full object-cover border-2 border-amber-200" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{farmer.name}</h3>
                        <div className="flex items-center">
                          <Award className={`w-4 h-4 mr-1 ${farmer.trustColor}`} />
                          <span className="text-xs font-medium text-gray-600">{farmer.trustLevel}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-2"><MapPin className="w-3 h-3 mr-1" />{farmer.location}</div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {farmer.crops.slice(0, 3).map((crop) => ( <span
                         key={crop}
                         className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                          >
                         {crop}
                         </span>))}
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center text-gray-500"><Star className="w-3 h-3 text-amber-400 fill-amber-400 mr-1" />{farmer.rating} ({farmer.reviewCount})</div>
                        <div className="text-gray-400">{farmer.contractsCompleted} contracts</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="default" size="sm" className="bg-amber-600 hover:bg-amber-700">Message</Button>
                      <Button variant="outline" size="sm">View Profile</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 8d282be6528be5fa383e82fa7a58c9ffcd476c18
}