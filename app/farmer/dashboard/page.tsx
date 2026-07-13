'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  MessageSquare,
  Sprout,
  Wallet,
  BarChart3,
  Award,
  Sun,
  Plus,
  Eye,
  Sparkles,
  LogOut,
  LayoutDashboard,
  ShoppingBag,
  Settings
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { LogoutModal } from "../../../components/logout-modal";

export default function FarmerDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/farmer/dashboard' },
    { id: 'my-crops', icon: Sprout, label: 'My Crops', path: '/farmer/my-crops' },
    { id: 'contracts', icon: FileText, label: 'My Contracts', path: '/farmer/contracts' },
    { id: 'requirements', icon: ShoppingBag, label: 'Buyer Requirements', path: '/farmer/requirements' },
    { id: 'analytics', icon: BarChart3, label: 'AI Analytics', path: '/farmer/ai' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', path: '/farmer/messages' },
    { id: 'profile', icon: Settings, label: 'Profile', path: '/farmer/profile' },
  ];

  const stats = [
    { icon: FileText, label: 'Total Contracts', value: '12', change: '+3 this month', color: 'text-[#2E7D32] bg-[#A5D6A7]/20' },
    { icon: Sprout, label: 'Active Crops', value: '8', change: '3 ready to harvest', color: 'text-green-700 bg-green-100' },
    { icon: Wallet, label: 'Expected Revenue', value: '₹2.4L', change: 'This season', color: 'text-amber-700 bg-amber-100' },
    { icon: Award, label: 'Trust Score', value: '4.8', change: 'Silver Badge', color: 'text-blue-700 bg-blue-100' },
  ];

  const quickActions = [
    { icon: Plus, label: 'Add Crop', color: 'bg-[#2E7D32] hover:bg-[#1b4d1e]', path: '/farmer/my-crops' },
    { icon: Eye, label: 'View Contracts', color: 'bg-green-700 hover:bg-green-800', path: '/farmer/contracts' },
    { icon: Sparkles, label: 'AI Recommendations', color: 'bg-purple-700 hover:bg-purple-800', path: '#' },
    { icon: MessageSquare, label: 'Messages', color: 'bg-blue-700 hover:bg-blue-800', path: '/farmer/messages' },
  ];

  const myCrops = [
    { name: 'Organic Tomatoes', status: 'Growing', area: '2.5 acres', healthColor: 'text-green-600 bg-green-50', harvestDate: '2024-04-15' },
    { name: 'Basmati Rice', status: 'Ready to Harvest', area: '4 acres', healthColor: 'text-green-600 bg-green-50', harvestDate: '2024-03-01' },
    { name: 'Red Onions', status: 'Planted', area: '1.5 acres', healthColor: 'text-blue-600 bg-blue-50', harvestDate: '2024-05-20' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* SIDEBAR BLOCK */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-4 sticky top-24 border border-gray-100">
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id ? 'bg-[#2E7D32] text-white shadow-md' : 'text-gray-600 hover:bg-[#F5F0E6] hover:text-[#2E7D32]'
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-semibold text-sm">{item.label}</span>
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsLogoutOpen(true)}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all text-left font-semibold text-sm outline-none"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </nav>
            </div>

            {/* Weather Widget */}
            <div className="mt-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-xs text-[#8D6E63]">WEATHER TODAY</h3>
                <Sun className="w-5 h-5 text-amber-500" />
              </div>
              <div className="text-3xl font-extrabold text-[#2E7D32]">32°C</div>
              <p className="text-xs text-gray-500 mt-1">Sunny, Clear Sky</p>
            </div>
          </div>

          {/* MAIN PANELS AREA */}
          <div className="flex-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h1 className="text-2xl font-extrabold text-[#2E7D32]">Welcome Back, Farmer!</h1>
              <p className="text-sm text-[#8D6E63] mt-1">Monitor your crops, check contracts, and track AI market trends.</p>
            </div>

            {/* STATS MATRIX */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#8D6E63]">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{stat.change}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* QUICK ACTIONS BUTTONS */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-sm text-gray-900 mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {quickActions.map((action, idx) => (
                  <Link key={idx} href={action.path} className={`flex flex-col items-center justify-center p-4 rounded-xl text-white transition-all transform hover:-translate-y-0.5 shadow-sm ${action.color}`}>
                    <action.icon className="w-5 h-5 mb-1.5" />
                    <span className="text-xs font-semibold">{action.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* DATA GRID GRAPHS & ROWS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Crops Row */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-sm text-gray-900 mb-3">My Active Crops</h3>
                <div className="space-y-3">
                  {myCrops.map((crop, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#F5F0E6]/40 border border-gray-50">
                      <div>
                        <p className="font-bold text-sm text-gray-900">{crop.name}</p>
                        <p className="text-xs text-gray-500">{crop.area} • Harvest: {crop.harvestDate}</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${crop.healthColor}`}>{crop.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Box Placeholder */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center">
                <MessageSquare className="w-12 h-12 text-[#2E7D32] mb-2 opacity-40" />
                <h4 className="font-bold text-sm text-gray-800">Direct Messaging Active</h4>
                <p className="text-xs text-gray-400 mt-1 max-w-xs">Connect directly with certified corporate buyers in real-time from the sidebar menu.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />

      <LogoutModal 
        isOpen={isLogoutOpen} 
        onClose={() => setIsLogoutOpen(false)} 
        onConfirm={() => {
          localStorage.clear();
          sessionStorage.clear();
          window.location.href = '/';
        }} 
      />
    </div>
  );
}