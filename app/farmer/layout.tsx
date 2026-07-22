// // app/farmer/layout.tsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import {
//   FileText,
//   MessageSquare,
//   Sprout,
//   BarChart3,
//   Sun,
//   LogOut,
//   LayoutDashboard,
//   ShoppingBag,
//   Settings
// } from 'lucide-react';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';
// import { LogoutModal } from "@/components/logout-modal";

// export default function FarmerModuleLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const [isLogoutOpen, setIsLogoutOpen] = useState(false);

//   const sidebarItems = [
//     { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/farmer/dashboard' },
//     { id: 'my-crops', icon: Sprout, label: 'My Crops', path: '/farmer/my-crops' },
//     { id: 'contracts', icon: FileText, label: 'My Contracts', path: '/farmer/contracts' },
//     { id: 'requirements', icon: ShoppingBag, label: 'Buyer Requirements', path: '/farmer/requirements' },
//     { id: 'requests', icon: FileText, label: 'Incoming Requests', path: '/farmer/requests' },
//     { id: 'analytics', icon: BarChart3, label: 'AI Analytics', path: '/farmer/ai' },
//     { id: 'messages', icon: MessageSquare, label: 'Messages', path: '/farmer/messages' },
//     { id: 'profile', icon: Settings, label: 'Profile', path: '/farmer/profile' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8F6F0] text-black">
//       <Navbar />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-6">
          
//           {/* PERSISTENT SIDEBAR BLOCK */}
//           <div className="lg:w-64 flex-shrink-0">
//             <div className="bg-white rounded-2xl border border-gray-200/60 p-4 sticky top-24 shadow-sm">
//               <nav className="space-y-1">
//                 {sidebarItems.map((item) => {
//                   const isActive = pathname === item.path;
//                   return (
//                     <Link
//                       key={item.id}
//                       href={item.path}
//                       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
//                         isActive
//                           ? 'bg-emerald-600 text-white shadow-sm font-bold'
//                           : 'text-gray-600 hover:bg-[#F8F6F0] hover:text-emerald-700 font-semibold text-sm'
//                       }`}
//                     >
//                       <item.icon className="w-5 h-5" />
//                       <span className="text-sm">{item.label}</span>
//                     </Link>
//                   );
//                 })}
//                 <div className="border-t border-gray-100 mt-4 pt-4">
//                   <button
//                     type="button"
//                     onClick={() => setIsLogoutOpen(true)}
//                     className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all text-left font-bold text-sm outline-none"
//                   >
//                     <LogOut className="w-5 h-5" />
//                     <span>Logout</span>
//                   </button>
//                 </div>
//               </nav>
//             </div>

//             {/* Weather Widget */}
//             <div className="mt-4 bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm text-center">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-bold text-xs text-gray-400 uppercase tracking-wider">Weather Today</h3>
//                 <Sun className="w-5 h-5 text-amber-500" />
//               </div>
//               <div className="text-3xl font-black text-gray-900">32°C</div>
//               <p className="text-xs font-bold text-emerald-600 mt-1">Sunny, Clear Sky</p>
//             </div>
//           </div>

//           {/* DYNAMIC SUB-PAGES WRAPPER */}
//           <div className="flex-1 min-w-0">
//             {children}
//           </div>

//         </div>
//       </div>
      
//       <Footer />

//       <LogoutModal 
//         isOpen={isLogoutOpen} 
//         onClose={() => setIsLogoutOpen(false)} 
//         onConfirm={() => {
//           localStorage.clear();
//           sessionStorage.clear();
//           window.location.href = '/';
//         }} 
//       />
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';
// import { LogoutModal } from "@/components/logout-modal";

// export default function FarmerModuleLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isLogoutOpen, setIsLogoutOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#F8F6F0] text-black flex flex-col justify-between">
//       <div>
//         <Navbar />
//         {/* Full width container space without pre-defined sidebar layout splits */}
//         <main className="w-full">
//           {children}
//         </main>
//       </div>
      
//       <Footer />

//       <LogoutModal 
//         isOpen={isLogoutOpen} 
//         onClose={() => setIsLogoutOpen(false)} 
//         onConfirm={() => {
//           localStorage.clear();
//           sessionStorage.clear();
//           window.location.href = '/';
//         }} 
//       />
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { ArrowLeft } from 'lucide-react';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';
// import { LogoutModal } from "@/components/logout-modal";

// export default function FarmerModuleLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isLogoutOpen, setIsLogoutOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   // Check karein kya user main dashboard par hai
//   const isDashboard = pathname === '/farmer/dashboard';

//   return (
//     <div className="min-h-screen bg-[#F8F6F0] text-black flex flex-col justify-between">
//       <div>
//         <Navbar />
        
//         {/* GLOBAL WRAPPER: Yeh saare pages ko automatic center mein samet dega */}
//         <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          
//           {/* GLOBAL BACK BUTTON: Agar page dashboard nahi hai, toh automatic back button dikhegi */}
//           {!isDashboard && (
//             <div className="mb-6">
//               <button
//                 onClick={() => router.back()}
//                 className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-emerald-700 transition-colors bg-transparent border-none p-0 cursor-pointer outline-none"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Dashboard
//               </button>
//             </div>
//           )}

//           {/* Dinamic sub-pages content yahan render hoga */}
//           {children}
//         </main>
//       </div>
      
//       <Footer />

//       <LogoutModal 
//         isOpen={isLogoutOpen} 
//         onClose={() => setIsLogoutOpen(false)} 
//         onConfirm={() => {
//           localStorage.clear();
//           sessionStorage.clear();
//           window.location.href = '/';
//         }} 
//       />
//     </div>
//   );
// }

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Bell, Sprout, Home, User, Settings, LogOut, ChevronDown, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { LogoutModal } from "@/components/logout-modal";

export default function FarmerModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const pathname = usePathname();
  const router = useRouter();

  // Route flags
  const isDashboard = pathname === '/farmer/dashboard';
  const isAuthPage = pathname === '/farmer/login' || pathname === '/farmer/signup';

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-black flex flex-col justify-between">
      <div>
        {/* CONDITIONALLY RENDER NAVIGATION BAR */}
        {isAuthPage ? (
          /* 1. Auth pages par generic landing Navbar */
          <Navbar />
        ) : (
          /* 2. Farmer Dashboard / Internal pages header */
          <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                
                {/* Logo + Home Button */}
                <div className="flex items-center gap-4">
                  <Link href="/" className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
                      <Sprout className="h-5 w-5" />
                    </span>
                    <span className="font-heading text-xl font-bold text-foreground">
                      Krishi<span className="text-emerald-600">Setu</span>
                    </span>
                  </Link>

                  {/* Explicit Home Button for Farmers */}
                  <Link 
                    href="/" 
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-gray-200 transition-colors"
                    title="Go to Homepage"
                  >
                    <Home className="w-4 h-4 text-emerald-600" />
                    <span className="hidden sm:inline">Home</span>
                  </Link>
                </div>

                {/* Search Component */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search buyers, crops, contracts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                {/* Notifications & Profile Dropdown */}
                <div className="flex items-center space-x-4">
                  
                  {/* Notifications */}
                  <Link href="/farmer/notifications">
                    <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Bell className="w-5 h-5" />
                      <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-600 rounded-full" />
                    </button>
                  </Link>

                  {/* Farmer Profile Dropdown */}
                  <div className="relative pl-3 border-l border-gray-200">
                    <button 
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center space-x-3 p-1 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none"
                    >
                      <Image 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100" 
                        alt="Farmer Profile" 
                        width={36} 
                        height={36} 
                        className="rounded-full object-cover border-2 border-emerald-300" 
                      />
                      <div className="hidden md:block text-left">
                        <div className="text-sm font-semibold text-gray-900 leading-tight">Ramesh Kumar</div>
                        <div className="text-xs text-emerald-600 font-medium">Verified Farmer</div>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-500 hidden md:block" />
                    </button>

                    {/* Profile Dropdown Menu */}
                    {isProfileOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <Link 
                          href="/farmer/profile" 
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <User className="w-4 h-4 mr-2.5 text-gray-500" />
                          My Profile
                        </Link>
                        
                        <Link 
                          href="/farmer/settings" 
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Settings className="w-4 h-4 mr-2.5 text-gray-500" />
                          Account Settings
                        </Link>

                        <div className="border-t border-gray-100 my-1" />

                        <button 
                          onClick={() => {
                            setIsProfileOpen(false);
                            setIsLogoutOpen(true);
                          }}
                          className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          
                        </button>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* GLOBAL WRAPPER */}
        <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          
          {/* GLOBAL BACK BUTTON: Sub-pages ke liye */}
          {!isDashboard && !isAuthPage && (
            <div className="mb-6">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-emerald-700 transition-colors bg-transparent border-none p-0 cursor-pointer outline-none"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </button>
            </div>
          )}

          {/* Dynamic sub-pages content */}
          {children}
        </main>
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