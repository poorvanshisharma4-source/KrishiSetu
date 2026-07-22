
// 'use client';

// import React from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import { 
//   LayoutDashboard, Plus, FileText, Package, Users, 
//   BarChart3, MessageSquare, Settings, LogOut, 
//   Sprout, ArrowRight, Sparkles, ShieldCheck, Zap 
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function BuyerDashboard() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [showLogoutModal, setShowLogoutModal] = React.useState(false);

//   // Sidebar dynamic navigation configuration
//   const sidebarItems = [
//     { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/buyer/dashboard' },
//     { id: 'post', icon: Plus, label: 'Post Requirement', path: '/buyer/post-requirement' },
//     { id: 'contracts', icon: FileText, label: 'My Contracts', path: '/buyer/contracts' },
//     { id: 'orders', icon: Package, label: 'Active Orders', path: '/buyer/active-orders' },
//     { id: 'farmers', icon: Users, label: 'Connected Farmers', path: '/buyer/connected-farmers' },
//     { id: 'analytics', icon: BarChart3, label: 'Analytics', path: '/buyer/analytics' },
//     { id: 'messages', icon: MessageSquare, label: 'Messages', path: '/buyer/messages' },
//     { id: 'profile', icon: Settings, label: 'Profile', path: '/buyer/profile' },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//       <div className="flex flex-col lg:flex-row gap-6">
        
//         {/* Sidebar - Integrated locally inside this page component */}
//         <div className="lg:w-64 flex-shrink-0">
//           <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24 border border-gray-100">
//             <nav className="space-y-1">
//               {sidebarItems.map((item) => {
//                 const isActive = pathname === item.path;
//                 return (
//                   <button
//                     key={item.id}
//                     onClick={() => router.push(item.path)}
//                     className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-left ${
//                       isActive ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-gray-100'
//                     }`}
//                   >
//                     <item.icon className="w-5 h-5" />
//                     <span className="font-medium">{item.label}</span>
//                   </button>
//                 );
//               })}
              
//               {/* Isolated Page Logout Action */}
//               <div className="border-t border-gray-200 mt-4 pt-4">
//                 <button 
//                   type="button"
//                   onClick={() => setShowLogoutModal(true)}
//                   className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all text-left font-medium"
//                 >
//                   <LogOut className="w-5 h-5" />
//                   <span>Logout</span>
//                 </button>
//               </div>
//             </nav>
//           </div>
//         </div>

//         {/* Workspace - Standard Dashboard Functional Elements */}
//         <div className="flex-1 space-y-6">
//           {/* Welcome Card */}
//           <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl px-8 py-6 shadow-md">
//             <p className="text-amber-100 text-sm font-medium">Buyer Dashboard</p>
//             <h1 className="text-3xl font-bold mt-2">Welcome Back, FreshMart 👋</h1>
//             <p className="mt-2 text-amber-100 max-w-2xl text-sm opacity-90">
//               Simplify your agricultural procurement. Use our AI tools to match and bridge contracts directly with verified farmers.
//             </p>
//           </div>

//           {/* Main AI Matching Hub */}
//           <div className="bg-white rounded-2xl border border-green-100 shadow-sm p-8 space-y-6">
//             <div className="flex items-start justify-between flex-col md:flex-row gap-4">
//               <div className="flex items-center gap-4">
//                 <div className="bg-green-100 p-4 rounded-2xl text-green-700">
//                   <Sprout className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2">
//                     <h2 className="text-2xl font-black text-gray-900">AI Farmer Matching</h2>
//                     <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
//                       <Sparkles size={12} /> Smart Engine
//                     </span>
//                   </div>
//                   <p className="text-sm text-gray-500 mt-1">
//                     Our smart matchmaking algorithm instantly pairs your crop requirement metrics with verified growers.
//                   </p>
//                 </div>
//               </div>
              
//               <Button
//                 onClick={() => router.push("/buyer/ai-recommendation")}
//                 className="bg-green-700 hover:bg-green-800 text-white rounded-xl px-6 h-12 text-sm font-bold flex items-center gap-2 w-full md:w-auto shadow-sm"
//               >
//                 Find Matches Now <ArrowRight size={16} />
//               </Button>
//             </div>

//             {/* Feature Highlights Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
//               <div className="p-4 bg-gray-50 rounded-xl space-y-2">
//                 <div className="text-orange-500 font-bold flex items-center gap-1.5 text-sm">
//                   <Zap size={16} /> Instant Metrics Match
//                 </div>
//                 <p className="text-xs text-gray-500 leading-relaxed">
//                   Filters farmers based on active harvest periods, location proximity, and requested crop varieties automatically.
//                 </p>
//               </div>

//               <div className="p-4 bg-gray-50 rounded-xl space-y-2">
//                 <div className="text-green-700 font-bold flex items-center gap-1.5 text-sm">
//                   <ShieldCheck size={16} /> Trust Score Evaluation
//                 </div>
//                 <p className="text-xs text-gray-500 leading-relaxed">
//                   Ranks growers through verified history, pricing reliability, and past fulfillment rates to lower procurement risks.
//                 </p>
//               </div>

//               <div className="p-4 bg-gray-50 rounded-xl space-y-2">
//                 <div className="text-blue-600 font-bold flex items-center gap-1.5 text-sm">
//                   <Sparkles size={16} /> Optimized Negotiations
//                 </div>
//                 <p className="text-xs text-gray-500 leading-relaxed">
//                   Provides intelligent starting price brackets derived from real-time local mandi rates and volume parameters.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//       </div>

//       {/* Interactive Logout Confirmation Modal */}
//       {showLogoutModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-100 text-center space-y-4">
//             <div className="mx-auto bg-red-50 text-red-600 p-3 rounded-full w-fit">
//               <LogOut size={28} />
//             </div>
//             <div>
//               <h3 className="text-lg font-extrabold text-gray-900">Are you sure you want to logout?</h3>
//               <p className="text-xs text-gray-500 mt-1">You will need to enter your credentials again to access your dashboard panels.</p>
//             </div>
//             <div className="flex gap-3 pt-2">
//               <button 
//                 type="button" 
//                 onClick={() => setShowLogoutModal(false)}
//                 className="flex-1 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold rounded-xl text-xs transition-all"
//               >
//                 Cancel
//               </button>
//               <button 
//                 type="button"
//                 onClick={() => {
//                   setShowLogoutModal(false);
//                   router.push('/');
//                 }}
//                 className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all shadow-md"
//               >
//                 Yes, Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Plus, FileText, Package, Users, 
  BarChart3, MessageSquare, Settings, LogOut, 
  Sprout, ArrowRight, Sparkles, ShieldCheck, Zap, ClipboardList
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BuyerDashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  // Sidebar dynamic navigation configuration
  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/buyer/dashboard' },
    { id: 'post', icon: Plus, label: 'Post Requirement', path: '/buyer/post-requirement' },
    { id: 'my-requirements', icon: ClipboardList, label: 'My Requirements', path: '/buyer/my-requirements' }, // <-- NEW ADDED
    { id: 'contracts', icon: FileText, label: 'My Contracts', path: '/buyer/contracts' },
    { id: 'orders', icon: Package, label: 'Active Orders', path: '/buyer/active-orders' },
    { id: 'farmers', icon: Users, label: 'Connected Farmers', path: '/buyer/connected-farmers' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics', path: '/buyer/analytics' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', path: '/buyer/messages' },
    { id: 'profile', icon: Settings, label: 'Profile', path: '/buyer/profile' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24 border border-gray-100">
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
              
              {/* Isolated Page Logout Action */}
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

        {/* Workspace */}
        <div className="flex-1 space-y-6">
          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl px-8 py-6 shadow-md">
            <p className="text-amber-100 text-sm font-medium">Buyer Dashboard</p>
            <h1 className="text-3xl font-bold mt-2">Welcome Back, FreshMart 👋</h1>
            <p className="mt-2 text-amber-100 max-w-2xl text-sm opacity-90">
              Simplify your agricultural procurement. Use our AI tools to match and bridge contracts directly with verified farmers.
            </p>
          </div>

          {/* Main AI Matching Hub */}
          <div className="bg-white rounded-2xl border border-green-100 shadow-sm p-8 space-y-6">
            <div className="flex items-start justify-between flex-col md:flex-row gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-2xl text-green-700">
                  <Sprout className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-black text-gray-900">AI Farmer Matching</h2>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles size={12} /> Smart Engine
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Our smart matchmaking algorithm instantly pairs your crop requirement metrics with verified growers.
                  </p>
                </div>
              </div>
              
              <Button
                onClick={() => router.push("/buyer/ai-recommendation")}
                className="bg-green-700 hover:bg-green-800 text-white rounded-xl px-6 h-12 text-sm font-bold flex items-center gap-2 w-full md:w-auto shadow-sm"
              >
                Find Matches Now <ArrowRight size={16} />
              </Button>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="p-4 bg-gray-50 rounded-xl space-y-2">
                <div className="text-orange-500 font-bold flex items-center gap-1.5 text-sm">
                  <Zap size={16} /> Instant Metrics Match
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Filters farmers based on active harvest periods, location proximity, and requested crop varieties automatically.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl space-y-2">
                <div className="text-green-700 font-bold flex items-center gap-1.5 text-sm">
                  <ShieldCheck size={16} /> Trust Score Evaluation
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Ranks growers through verified history, pricing reliability, and past fulfillment rates to lower procurement risks.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl space-y-2">
                <div className="text-blue-600 font-bold flex items-center gap-1.5 text-sm">
                  <Sparkles size={16} /> Optimized Negotiations
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Provides intelligent starting price brackets derived from real-time local mandi rates and volume parameters.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-100 text-center space-y-4">
            <div className="mx-auto bg-red-50 text-red-600 p-3 rounded-full w-fit">
              <LogOut size={28} />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-gray-900">Are you sure you want to logout?</h3>
              <p className="text-xs text-gray-500 mt-1">You will need to enter your credentials again to access your dashboard panels.</p>
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