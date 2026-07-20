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

'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { LogoutModal } from "@/components/logout-modal";

export default function FarmerModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check karein kya user main dashboard par hai
  const isDashboard = pathname === '/farmer/dashboard';

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-black flex flex-col justify-between">
      <div>
        <Navbar />
        
        {/* GLOBAL WRAPPER: Yeh saare pages ko automatic center mein samet dega */}
        <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          
          {/* GLOBAL BACK BUTTON: Agar page dashboard nahi hai, toh automatic back button dikhegi */}
          {!isDashboard && (
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

          {/* Dinamic sub-pages content yahan render hoga */}
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