'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, FileText, Users, Plus, Search, Bell, Settings, LogOut, Wallet, BarChart3, MessageSquare, Package, Sprout, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function BuyerDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Modal display state controller

  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/buyer/dashboard' },
    { id: 'post', icon: Plus, label: 'Post Requirement', path: '/buyer/post-requirement' },
    { id: 'contracts', icon: FileText, label: 'My Contracts', path: '/buyer/contracts' },
    { id: 'orders', icon: Package, label: 'Active Orders', path: '/buyer/active-orders' },
    { id: 'farmers', icon: Users, label: 'Connected Farmers', path: '/buyer/connected-farmers' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics', path: '/buyer/analytics' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', path: '/buyer/messages' },
    { id: 'profile', icon: Settings, label: 'Profile', path: '/buyer/profile' },
  ];

  const quickStats = [
    { icon: FileText, label: 'Active Requirements', value: '8', change: '12 pending bids', color: 'text-amber-700 bg-amber-100' },
    { icon: Package, label: 'Active Orders', value: '5', change: '2 in transit', color: 'text-green-700 bg-green-100' },
    { icon: Users, label: 'Connected Farmers', value: '15', change: '3 new requests', color: 'text-blue-700 bg-blue-100' },
    { icon: Wallet, label: 'Total Transactions', value: '₹12.5L', change: 'This fiscal year', color: 'text-purple-700 bg-purple-100' },
  ];

  return (
     

      <div className="min-h-screen bg-[#F8F6F0] text-black">

  {/* ================= HEADER ================= */}

  <header className="sticky top-0 z-50 bg-white border-b border-gray-200">

    <div className="max-w-[1600px] mx-auto h-20 px-8 flex items-center">

      {/* Logo */}

      <div className="flex items-center gap-3 w-72">

        <div className="h-11 w-11 rounded-xl bg-green-700 flex items-center justify-center">
          <Sprout className="h-6 w-6 text-white" />
        </div>

        <h1 className="text-2xl font-bold">
          Krishi<span className="text-green-700">Setu</span>
        </h1>

      </div>

      {/* Search */}

      <div className="flex-1 flex justify-center">

        <div className="relative w-full max-w-xl">

          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search farmers, crops, contracts..."
            className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-600"
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5 ml-8">

        <Button
          onClick={() => router.push("/buyer/post-requirement")}
          className="bg-orange-500 hover:bg-orange-600 rounded-xl px-5 h-11"
        >
          + Post Requirement
        </Button>

        <button
  onClick={() => router.push("/buyer/notifications")}
  className="relative"
>

  <Bell className="w-6 h-6 text-gray-600"/>

  <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"/>

</button>

        <div className="flex items-center gap-3 border-l pl-5">

          <div className="h-11 w-11 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
            FM
          </div>

          <div>

            <p className="font-semibold">
              FreshMart Pvt Ltd
            </p>

            <p className="text-sm text-gray-500">
              Verified Buyer
            </p>

          </div>

        </div>

      </div>

    </div>

  </header>

  {/* BODY */}

  <div className="max-w-[1600px] mx-auto flex gap-6 px-8 py-6">

    {/* Sidebar */}

    <aside className="w-64">

      <div className="bg-white rounded-2xl shadow-sm border p-5 sticky top-28">

        <nav className="space-y-2">

          {sidebarItems.map((item)=>(
            <Link
              key={item.id}
              href={item.path}
              onClick={()=>setActiveTab(item.id)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                activeTab===item.id
                ? "bg-amber-500 text-white"
                : "hover:bg-amber-50 text-gray-700"
              }`}
            >
              <item.icon size={18}/>
              {item.label}
            </Link>
          ))}

          <div className="border-t pt-4 mt-4">

            <button
              onClick={()=>setShowLogoutModal(true)}
              className="flex items-center gap-3 text-red-600 px-4 py-3 w-full rounded-xl hover:bg-red-50"
            >
              <LogOut size={18}/>
              Logout
            </button>

          </div>

        </nav>

      </div>

    </aside>

    {/* Main */}

    <main className="flex-1 space-y-8">
    {/* Welcome Card */}
<div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl px-8 py-6 shadow-md">

  <p className="text-amber-100 text-sm font-medium">
    Buyer Dashboard
  </p>

  <h1 className="text-3xl font-bold mt-2">
    Welcome Back, FreshMart 👋
  </h1>

  <p className="mt-2 text-amber-100 max-w-2xl">
    Manage requirements, monitor contracts, connect with trusted farmers
    and track all procurement activities from one place.
  </p>

</div>

{/* Stats */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

  {quickStats.map((stat, idx) => (

    <div
      key={idx}
      className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 flex items-center gap-4"
    >

      <div className={`p-3 rounded-xl ${stat.color}`}>
        <stat.icon size={22}/>
      </div>

      <div>
        <p className="text-xs text-gray-500">
          {stat.label}
        </p>

        <p className="text-xl font-bold">
          {stat.value}
        </p>

        <p className="text-xs text-gray-400">
          {stat.change}
        </p>
      </div>

    </div>

  ))}

</div>

{/* AI Card */}
<div className="bg-white rounded-2xl border border-green-100 shadow-sm p-6">

  <div className="flex items-center gap-3">

    <div className="bg-green-100 p-3 rounded-xl">
      <Sprout className="w-6 h-6 text-green-700"/>
    </div>

    <div>

      <h2 className="text-xl font-bold">
        AI Farmer Matching
      </h2>

      <p className="text-sm text-gray-500">
        AI finds the best farmers according to your crop requirement.
      </p>

    </div>

  </div>

  <div className="mt-5 bg-green-50 rounded-xl p-5 flex items-center justify-between">

    <div>

      <h3 className="font-semibold">
        Smart Recommendations
      </h3>

      <p className="text-sm text-gray-600">
        Match farmers based on location, crop quality and trust score.
      </p>

    </div>

    <Button
      onClick={() => router.push("/buyer/ai-recommendation")}
      className="bg-green-600 hover:bg-green-700"
    >
      Find Farmers
    </Button>

  </div>

</div>

</main>

</div>
        

      {/* 🌟 Universal Interactive Logout Confirmation Modal Shell Wrapper */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-100 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="mx-auto bg-red-50 text-red-600 p-3 rounded-full w-fit">
              <LogOut size={28} />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-gray-900">Are you sure you want to logout?</h3>
              <p className="text-xs text-gray-500 mt-1">You will need to enter your credentials again to access your KrishiSetu dashboard panels.</p>
            </div>
            <div className="flex gap-3 pt-2">
              <button 
                type="button" 
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold rounded-xl text-xs transition-all"
              >
                Cancel
              </button>
              <button 
                type="button"
                onClick={() => {
                  setShowLogoutModal(false);
                  router.push('/'); // Drops corporate buyer back onto global home landing root route cleanly
                }}
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all shadow-md"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
