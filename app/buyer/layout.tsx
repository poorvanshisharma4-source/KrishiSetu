'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Users, Plus, Search, Bell, Settings, LogOut, BarChart3, MessageSquare, Package, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BuyerRootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

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

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-black">
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
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/buyer/post-requirement">
                <Button variant="default" size="sm" className="bg-amber-600 hover:bg-amber-700">
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
          {/* Sidebar Layout Section */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
              <nav className="space-y-1">
                {sidebarItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <button
                      key={item.id}
                      onClick={() => router.push(item.path)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-left ${
                        isActive ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
                
                {/* Logout Button */}
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowLogoutModal(true)}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all text-left font-medium"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Dynamic Content Workspace */}
          <div className="flex-1 space-y-6">
            {children}
          </div>
        </div>
      </div>

      {/* Interactive Logout Confirmation Modal */}
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
                  router.push('/');
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