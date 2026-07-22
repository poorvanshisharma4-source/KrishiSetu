
// // 'use client';

// // import Link from 'next/link';
// // import {
// //   FileText,
// //   MessageSquare,
// //   Sprout,
// //   Wallet,
// //   Award,
// //   Plus,
// //   Eye,
// //   Sparkles
// // } from 'lucide-react';

// // export default function FarmerDashboard() {
// //   const stats = [
// //     { icon: FileText, label: 'Total Contracts', value: '12', change: '+3 this month', color: 'text-emerald-700 bg-emerald-50 border border-emerald-100' },
// //     { icon: Sprout, label: 'Active Crops', value: '8', change: '3 ready to harvest', color: 'text-green-700 bg-green-50 border border-green-100' },
// //     { icon: Wallet, label: 'Expected Revenue', value: '₹2.4L', change: 'This season', color: 'text-amber-700 bg-amber-50 border border-amber-100' },
// //     { icon: Award, label: 'Trust Score', value: '4.8', change: 'Silver Badge', color: 'text-blue-700 bg-blue-50 border border-blue-100' },
// //     { icon: FileText, label: 'New Requests', value: '2', change: 'Pending buyer requests', color: 'text-emerald-700 bg-emerald-50 border border-emerald-100' },
// //   ];

// //   const quickActions = [
// //     { icon: Plus, label: 'Add Crop', color: 'bg-emerald-600 hover:bg-emerald-700', path: '/farmer/my-crops' },
// //     { icon: Eye, label: 'View Contracts', color: 'bg-green-700 hover:bg-green-800', path: '/farmer/contracts' },
// //     { icon: Sparkles, label: 'AI Recommendations', color: 'bg-purple-700 hover:bg-purple-800', path: '/farmer/ai' },
// //     { icon: MessageSquare, label: 'Messages', color: 'bg-blue-700 hover:bg-blue-800', path: '/farmer/messages' },
// //   ];

// //   const myCrops = [
// //     { name: 'Organic Tomatoes', status: 'Growing', area: '2.5 acres', healthColor: 'text-green-700 bg-green-50 border border-green-200', harvestDate: '2024-04-15' },
// //     { name: 'Basmati Rice', status: 'Ready to Harvest', area: '4 acres', healthColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200', harvestDate: '2024-03-01' },
// //     { name: 'Red Onions', status: 'Planted', area: '1.5 acres', healthColor: 'text-blue-700 bg-blue-50 border border-blue-200', harvestDate: '2024-05-20' },
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       {/* Welcome Panel */}
// //       <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm">
// //         <h1 className="text-3xl font-black text-gray-900 tracking-tight">Welcome Back, Farmer!</h1>
// //         <p className="text-sm text-gray-500 mt-1">Monitor your crops, check contracts, and track AI market trends.</p>
// //       </div>

// //       {/* STATS MATRIX */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
// //         {stats.map((stat, idx) => (
// //           <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center space-x-4">
// //             <div className={`p-3 rounded-xl ${stat.color}`}>
// //               <stat.icon className="w-6 h-6" />
// //             </div>
// //             <div>
// //               <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
// //               <p className="text-2xl font-black text-gray-900 mt-0.5">{stat.value}</p>
// //               <p className="text-[11px] font-bold text-emerald-600 mt-0.5">{stat.change}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* QUICK ACTIONS BUTTONS */}
// //       <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm">
// //         <h3 className="text-base font-black text-gray-900 mb-3 tracking-tight">Quick Actions</h3>
// //         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
// //           {quickActions.map((action, idx) => (
// //             <Link 
// //               key={idx} 
// //               href={action.path} 
// //               className={`flex flex-col items-center justify-center p-4 rounded-xl text-white transition-all transform hover:-translate-y-0.5 shadow-sm font-bold ${action.color}`}
// //             >
// //               <action.icon className="w-5 h-5 mb-1.5" />
// //               <span className="text-xs">{action.label}</span>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>

// //       {/* DATA GRID GRAPHS & ROWS */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         {/* Crops Row */}
// //         <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm">
// //           <h3 className="text-base font-black text-gray-900 mb-3 tracking-tight">My Active Crops</h3>
// //           <div className="space-y-3">
// //             {myCrops.map((crop, idx) => (
// //               <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 border border-gray-100">
// //                 <div>
// //                   <p className="font-extrabold text-sm text-gray-900">{crop.name}</p>
// //                   <p className="text-xs font-medium text-gray-500">{crop.area} • Harvest: {crop.harvestDate}</p>
// //                 </div>
// //                 <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${crop.healthColor}`}>{crop.status}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Info Box Placeholder */}
// //         <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex flex-col justify-center items-center text-center p-8">
// //           <div className="p-4 bg-emerald-50 rounded-full mb-3 text-emerald-600 border border-emerald-100">
// //             <MessageSquare className="w-8 h-8" />
// //           </div>
// //           <h4 className="font-black text-sm text-gray-900 tracking-tight">Direct Messaging Active</h4>
// //           <p className="text-xs text-gray-500 mt-1 max-w-xs leading-relaxed">
// //             Connect directly with certified corporate buyers in real-time from the sidebar menu.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // 'use client';

// // import { FarmerSidebar } from "@/components/FarmerSidebar"; // Apne path ke hisab se verify karein
// // // Baaki metrics ya graphs jo aapke dashboard par hain unhe yahan import karein
// // import { 
// //   FileText, 
// //   Sprout, 
// //   Coins, 
// //   ShieldCheck, 
// //   UserPlus,
// //   PlusCircle,
// //   Eye,
// //   Brain,
// //   MessageSquare
// // } from "lucide-react";

// // export default function FarmerDashboardPage() {
// //   return (
// //     <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
// //       {/* SIDEBAR: Sirf isi dashboard page par explicitly render ho raha hai */}
// //       <div className="lg:w-64 flex-shrink-0">
// //         <FarmerSidebar />
// //       </div>

// //       {/* DASHBOARD CONTENT MATRIX */}
// //       <div className="flex-1 space-y-6">
        
// //         {/* Welcome Banner */}
// //         <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
// //           <h1 className="text-3xl font-black text-gray-900 tracking-tight">Welcome Back, Farmer!</h1>
// //           <p className="text-sm font-semibold text-gray-500 mt-1">
// //             Monitor your crops, check contracts, and track AI market trends.
// //           </p>
// //         </div>

// //         {/* Stats Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
// //           {/* Card 1 */}
// //           <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
// //             <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><FileText size={24} /></div>
// //             <div>
// //               <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Contracts</p>
// //               <p className="text-xl font-black text-gray-900">12</p>
// //               <span className="text-[11px] font-bold text-emerald-600">+3 this month</span>
// //             </div>
// //           </div>
// //           {/* Card 2 */}
// //           <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
// //             <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><Sprout size={24} /></div>
// //             <div>
// //               <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Crops</p>
// //               <p className="text-xl font-black text-gray-900">8</p>
// //               <span className="text-[11px] font-bold text-emerald-600">3 ready to harvest</span>
// //             </div>
// //           </div>
// //           {/* Card 3 */}
// //           <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
// //             <div className="p-3 bg-amber-50 rounded-xl text-amber-600"><Coins size={24} /></div>
// //             <div>
// //               <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Expected Revenue</p>
// //               <p className="text-xl font-black text-gray-900">₹2.4L</p>
// //               <span className="text-[11px] font-bold text-amber-600">This season</span>
// //             </div>
// //           </div>
// //           {/* Card 4 */}
// //           <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
// //             <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><ShieldCheck size={24} /></div>
// //             <div>
// //               <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Trust Score</p>
// //               <p className="text-xl font-black text-gray-900">4.8</p>
// //               <span className="text-[11px] font-bold text-blue-600">Silver Badge</span>
// //             </div>
// //           </div>
// //           {/* Card 5 */}
// //           <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
// //             <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><UserPlus size={24} /></div>
// //             <div>
// //               <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">New Requests</p>
// //               <p className="text-xl font-black text-gray-900">2</p>
// //               <span className="text-[11px] font-bold text-emerald-600">Pending buyer requests</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Quick Actions Component Wrapper */}
// //         <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
// //           <h3 className="text-base font-black text-gray-900 mb-4">Quick Actions</h3>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //             <button className="flex flex-col items-center justify-center p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm">
// //               <PlusCircle size={20} /> Add Crop
// //             </button>
// //             <button className="flex flex-col items-center justify-center p-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm">
// //               <Eye size={20} /> View Contracts
// //             </button>
// //             <button className="flex flex-col items-center justify-center p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm">
// //               <Brain size={20} /> AI Recommendations
// //             </button>
// //             <button className="flex flex-col items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm">
// //               <MessageSquare size={20} /> Messages
// //             </button>
// //           </div>
// //         </div>

// //         {/* My Active Crops List Container */}
// //         <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
// //           <h3 className="text-base font-black text-gray-900 mb-4">My Active Crops</h3>
// //           <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
// //             <div>
// //               <p className="font-bold text-gray-900 text-sm">Organic Tomatoes</p>
// //               <p className="text-xs text-gray-400 font-medium mt-0.5">2.5 acres • Harvest: 2024-04-15</p>
// //             </div>
// //             <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-bold text-emerald-700">Growing</span>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// 'use client';

// import { FarmerSidebar } from "@/components/FarmerSidebar"; 
// import { 
//   FileText, 
//   Sprout, 
//   Coins, 
//   ShieldCheck, 
//   UserPlus,
//   PlusCircle,
//   Eye,
//   Brain,
//   MessageSquare
// } from "lucide-react";

// export default function FarmerDashboardPage() {
//   return (
//     <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
//       {/* SIDEBAR */}
//       <div className="lg:w-64 flex-shrink-0">
//         <FarmerSidebar />
//       </div>

//       {/* DASHBOARD CONTENT MATRIX */}
//       <div className="flex-1 space-y-6 min-w-0">
        
//         {/* Welcome Banner */}
//         <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
//           <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Welcome Back, Farmer!</h1>
//           <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">
//             Monitor your crops, check contracts, and track AI market trends.
//           </p>
//         </div>

//         {/* Stats Grid - Fixed Columns & Better Spacing */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          
//           {/* Card 1 */}
//           <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
//             <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
//               <FileText size={20} />
//             </div>
//             <div className="min-w-0">
//               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Total Contracts</p>
//               <p className="text-lg font-black text-gray-900 leading-tight">12</p>
//               <span className="text-[10px] font-bold text-emerald-600 block mt-0.5 truncate">+3 this month</span>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
//             <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
//               <Sprout size={20} />
//             </div>
//             <div className="min-w-0">
//               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Active Crops</p>
//               <p className="text-lg font-black text-gray-900 leading-tight">8</p>
//               <span className="text-[10px] font-bold text-emerald-600 block mt-0.5 truncate">3 ready to harvest</span>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
//             <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600 shrink-0">
//               <Coins size={20} />
//             </div>
//             <div className="min-w-0">
//               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Expected Revenue</p>
//               <p className="text-lg font-black text-gray-900 leading-tight">₹2.4L</p>
//               <span className="text-[10px] font-bold text-amber-600 block mt-0.5 truncate">This season</span>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
//             <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 shrink-0">
//               <ShieldCheck size={20} />
//             </div>
//             <div className="min-w-0">
//               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Trust Score</p>
//               <p className="text-lg font-black text-gray-900 leading-tight">4.8</p>
//               <span className="text-[10px] font-bold text-blue-600 block mt-0.5 truncate">Silver Badge</span>
//             </div>
//           </div>

//           {/* Card 5 */}
//           <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
//             <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
//               <UserPlus size={20} />
//             </div>
//             <div className="min-w-0">
//               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">New Requests</p>
//               <p className="text-lg font-black text-gray-900 leading-tight">2</p>
//               <span className="text-[10px] font-bold text-emerald-600 block mt-0.5 truncate">Pending requests</span>
//             </div>
//           </div>

//         </div>

//         {/* Quick Actions Wrapper */}
//         <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
//           <h3 className="text-base font-black text-gray-900 mb-4">Quick Actions</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             <button className="flex flex-col items-center justify-center p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm">
//               <PlusCircle size={20} /> Add Crop
              
//             </button>
//             <button className="flex flex-col items-center justify-center p-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm">
//               <Eye size={20} /> View Contracts
//             </button>
//             <button className="flex flex-col items-center justify-center p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm">
//               <Brain size={20} /> AI Recommendations
//             </button>
//             <button className="flex flex-col items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm">
//               <MessageSquare size={20} /> Messages
//             </button>
//           </div>
//         </div>

//         {/* My Active Crops List */}
//         <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
//           <h3 className="text-base font-black text-gray-900 mb-4">My Active Crops</h3>
//           <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
//             <div>
//               <p className="font-bold text-gray-900 text-sm">Organic Tomatoes</p>
//               <p className="text-xs text-gray-400 font-medium mt-0.5">2.5 acres • Harvest: 2024-04-15</p>
//             </div>
//             <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-bold text-emerald-700">Growing</span>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

'use client';

import { useRouter } from 'next/navigation';
import { FarmerSidebar } from "@/components/FarmerSidebar"; 
import { 
  FileText, 
  Sprout, 
  Coins, 
  ShieldCheck, 
  UserPlus,
  PlusCircle,
  Eye,
  Brain,
  MessageSquare
} from "lucide-react";

export default function FarmerDashboardPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      {/* SIDEBAR */}
      <div className="lg:w-64 flex-shrink-0">
        <FarmerSidebar />
      </div>

      {/* DASHBOARD CONTENT MATRIX */}
      <div className="flex-1 space-y-6 min-w-0">
        
        {/* Welcome Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Welcome Back, Farmer!</h1>
          <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">
            Monitor your crops, check contracts, and track AI market trends.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <FileText size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Total Contracts</p>
              <p className="text-lg font-black text-gray-900 leading-tight">12</p>
              <span className="text-[10px] font-bold text-emerald-600 block mt-0.5 truncate">+3 this month</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <Sprout size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Active Crops</p>
              <p className="text-lg font-black text-gray-900 leading-tight">8</p>
              <span className="text-[10px] font-bold text-emerald-600 block mt-0.5 truncate">3 ready to harvest</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
            <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600 shrink-0">
              <Coins size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Expected Revenue</p>
              <p className="text-lg font-black text-gray-900 leading-tight">₹2.4L</p>
              <span className="text-[10px] font-bold text-amber-600 block mt-0.5 truncate">This season</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
            <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Trust Score</p>
              <p className="text-lg font-black text-gray-900 leading-tight">4.8</p>
              <span className="text-[10px] font-bold text-blue-600 block mt-0.5 truncate">Silver Badge</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <UserPlus size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">New Requests</p>
              <p className="text-lg font-black text-gray-900 leading-tight">2</p>
              <span className="text-[10px] font-bold text-emerald-600 block mt-0.5 truncate">Pending requests</span>
            </div>
          </div>

        </div>

        {/* Quick Actions Wrapper - Fixed buttons with routes */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-base font-black text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <button 
              onClick={() => router.push('/farmer/my-crops')}
              className="flex flex-col items-center justify-center p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <PlusCircle size={20} /> Add Crop
            </button>

            <button 
              onClick={() => router.push('/farmer/contracts')}
              className="flex flex-col items-center justify-center p-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Eye size={20} /> View Contracts
            </button>

            <button 
              onClick={() => router.push('/farmer/ai')}
              className="flex flex-col items-center justify-center p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Brain size={20} /> AI Recommendations
            </button>

            <button 
              onClick={() => router.push('/farmer/messages')}
              className="flex flex-col items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <MessageSquare size={20} /> Messages
            </button>

          </div>
        </div>

        {/* My Active Crops List */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-base font-black text-gray-900 mb-4">My Active Crops</h3>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-900 text-sm">Organic Tomatoes</p>
              <p className="text-xs text-gray-400 font-medium mt-0.5">2.5 acres • Harvest: 2026-08-15</p>
            </div>
            <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-bold text-emerald-700">Growing</span>
          </div>
        </div>

      </div>
    </div>
  );
}