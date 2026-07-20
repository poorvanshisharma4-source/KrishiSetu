// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { LayoutDashboard, FileText, Users, Plus, Search, Bell, Settings, LogOut, Wallet, BarChart3, MessageSquare, Package, Sprout, Navigation } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function BuyerDashboard() {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showLogoutModal, setShowLogoutModal] = useState(false); // Modal display state controller

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

//   const quickStats = [
//     { icon: FileText, label: 'Active Requirements', value: '8', change: '12 pending bids', color: 'text-amber-700 bg-amber-100' },
//     { icon: Package, label: 'Active Orders', value: '5', change: '2 in transit', color: 'text-green-700 bg-green-100' },
//     { icon: Users, label: 'Connected Farmers', value: '15', change: '3 new requests', color: 'text-blue-700 bg-blue-100' },
//     { icon: Wallet, label: 'Total Transactions', value: '₹12.5L', change: 'This fiscal year', color: 'text-purple-700 bg-purple-100' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8F6F0] text-black">
//       {/* Top Navigation */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <Link href="/" className="flex items-center gap-2">
//               <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
//                 <Sprout className="h-5 w-5" />
//               </span>
//               <span className="font-heading text-xl font-bold text-foreground">
//                 Krishi<span className="text-primary">Setu</span>
//               </span>
//             </Link>

//             <div className="hidden md:flex flex-1 max-w-md mx-8">
//               <div className="relative w-full">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search farmers, crops, contracts..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <Link href="/buyer/post-requirement">
//                 <Button variant="default" size="sm" className="bg-amber-600 hover:bg-amber-700">
//                   <Plus className="w-4 h-4 mr-2" />
//                   Post Requirement
//                 </Button>
//               </Link>
//               <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                 <Bell className="w-5 h-5" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
//               </button>
//               <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
//                 <Image src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Buyer" width={36} height={36} className="rounded-full object-cover border-2 border-amber-200" />
//                 <div className="hidden md:block">
//                   <div className="text-sm font-semibold text-gray-900">FreshMart Pvt Ltd</div>
//                   <div className="text-xs text-gray-500">Verified Buyer</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Sidebar Layout Section */}
//           <div className="lg:w-64 flex-shrink-0">
//             <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
//               <nav className="space-y-1">
//                 {sidebarItems.map((item) => (
//                   <Link
//                     key={item.id}
//                     href={item.path}
//                     className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === item.id ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
//                     onClick={() => setActiveTab(item.id)}
//                   >
//                     <item.icon className="w-5 h-5" />
//                     <span className="font-medium">{item.label}</span>
//                   </Link>
//                 ))}
                
//                 {/* 🚪 Custom Intercept Logout Trigger Button */}
//                 <div className="border-t border-gray-200 mt-4 pt-4">
//                   <button 
//                     type="button"
//                     onClick={() => setShowLogoutModal(true)}
//                     className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all text-left font-medium"
//                   >
//                     <LogOut className="w-5 h-5" />
//                     <span>Logout</span>
//                   </button>
//                 </div>
//               </nav>
//             </div>
//           </div>

//           {/* Main Dashboard Panel Workspaces */}
//           <div className="flex-1 space-y-6">
//             <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-2xl p-8 shadow-md">
//               <h1 className="text-3xl font-bold">Welcome Back, FreshMart!</h1>
//               <p className="text-amber-100 text-sm mt-1">Manage corporate contracts, review farm postings, and dispatch fleet logistics parameters</p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {quickStats.map((stat, idx) => (
//                 <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
//                   <div className={`p-3 rounded-xl ${stat.color}`}><stat.icon size={22} /></div>
//                   <div>
//                     <span className="block text-xs text-gray-500 font-semibold">{stat.label}</span>
//                     <span className="text-xl font-bold text-gray-900">{stat.value}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🌟 Universal Interactive Logout Confirmation Modal Shell Wrapper */}
//       {showLogoutModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
//           <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-100 text-center space-y-4 animate-in zoom-in-95 duration-200">
//             <div className="mx-auto bg-red-50 text-red-600 p-3 rounded-full w-fit">
//               <LogOut size={28} />
//             </div>
//             <div>
//               <h3 className="text-lg font-extrabold text-gray-900">Are you sure you want to logout?</h3>
//               <p className="text-xs text-gray-500 mt-1">You will need to enter your credentials again to access your KrishiSetu dashboard panels.</p>
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
//                   router.push('/'); // Drops corporate buyer back onto global home landing root route cleanly
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

// 'use client';

// import React from 'react';
// import { FileText, Users, Wallet, Package } from 'lucide-react';

// export default function BuyerDashboard() {
//   const quickStats = [
//     { icon: FileText, label: 'Active Requirements', value: '8', change: '12 pending bids', color: 'text-amber-700 bg-amber-100' },
//     { icon: Package, label: 'Active Orders', value: '5', change: '2 in transit', color: 'text-green-700 bg-green-100' },
//     { icon: Users, label: 'Connected Farmers', value: '15', change: '3 new requests', color: 'text-blue-700 bg-blue-100' },
//     { icon: Wallet, label: 'Total Transactions', value: '₹12.5L', change: 'This fiscal year', color: 'text-purple-700 bg-purple-100' },
//   ];

//   return (
//     <>
//       {/* Welcome Banner */}
//       <div className="bg-gradient-to-r from-amber-600 to-amber-50 text-white rounded-2xl p-8 shadow-md">
//         <h1 className="text-3xl font-bold">Welcome Back, FreshMart!</h1>
//         <p className="text-amber-100 text-sm mt-1">
//           Manage corporate contracts, review farm postings, and dispatch fleet logistics parameters
//         </p>
//       </div>

//       {/* Grid Stats */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {quickStats.map((stat, idx) => (
//           <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
//             <div className={`p-3 rounded-xl ${stat.color}`}>
//               <stat.icon size={22} />
//             </div>
//             <div>
//               <span className="block text-xs text-gray-500 font-semibold">{stat.label}</span>
//               <span className="text-xl font-bold text-gray-900">{stat.value}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

'use client';

import React from 'react';
import { 
  FileText, Package, Users, Wallet, MapPin, Calendar, 
  Scale, Filter, Plus, Eye, ArrowUpRight, MessageSquare, Truck
} from 'lucide-react';


export default function BuyerDashboard() {
  const stats = [
    { icon: FileText, count: '8', label: 'Active Requirements', sub: '12 pending bids', iconColor: 'text-amber-600 bg-amber-50' },
    { icon: Package, count: '5', label: 'Active Orders', sub: '2 in transit', iconColor: 'text-emerald-600 bg-emerald-50' },
    { icon: Users, count: '15', label: 'Connected Farmers', sub: '3 new requests', iconColor: 'text-blue-600 bg-blue-50' },
    { icon: Wallet, count: '₹12.5L', label: 'Total Transactions', sub: 'This fiscal year', iconColor: 'text-purple-600 bg-purple-50' },
  ];

  const postedRequirements = [
    {
      crop: 'Organic Tomatoes',
      status: 'Open',
      statusColor: 'bg-blue-50 text-blue-600 border-blue-100',
      location: 'Maharashtra',
      deadline: '2024-03-15',
      quantity: '500 kg',
      price: '₹28/kg',
      bids: '8'
    },
    {
      crop: 'Fresh Spinach',
      status: 'In Negotiation',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-100',
      location: 'Pune',
      deadline: '2024-02-28',
      quantity: '200 kg/week',
      price: '₹30/kg',
      bids: '12'
    }
  ];

  const activeOrders = [
    {
      id: 'ORD-2024-001',
      farmer: 'Rajesh Kumar',
      crop: 'Basmati Rice',
      status: 'Growing',
      statusColor: 'bg-gray-100 text-gray-700',
      qty: '2000 kg',
      price: '₹45/kg',
      progress: 45,
      value: '₹90,000',
      img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 'ORD-2024-002',
      farmer: 'Lakshmi Devi',
      crop: 'Fresh Vegetables Mix',
      status: 'In Transit',
      statusColor: 'bg-blue-50 text-blue-600',
      subStatus: 'On the way',
      qty: '300 kg',
      price: '₹25/kg',
      progress: 85,
      value: '₹7,500',
      img: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const connectedFarmers = [
    {
      name: 'Rajesh Kumar',
      location: 'Patna, Bihar',
      tier: 'Gold',
      tierColor: 'text-amber-600 bg-amber-50',
      rating: '4.8',
      reviews: '45',
      contracts: '12 contracts',
      crops: ['Tomatoes', 'Rice', 'Wheat'],
      img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lakshmi Devi',
      location: 'Visakhapatnam, Andhra Pradesh',
      tier: 'Silver',
      tierColor: 'text-gray-500 bg-gray-50',
      rating: '4.8',
      reviews: '28',
      contracts: '8 contracts',
      crops: ['Turmeric', 'Rice', 'Vegetables'],
      img: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
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
              <span className="block text-3xl font-black text-gray-900 tracking-tight">{stat.count}</span>
              <span className="block text-xs text-gray-400 font-bold mt-1 uppercase tracking-wider">{stat.label}</span>
              <span className="block text-xs text-emerald-600 font-semibold mt-1">{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 1. Posted Requirements Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Posted Requirements</h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50">
              <Filter size={14} /> Filter
            </button>
            <button className="flex items-center gap-1.5 text-xs font-bold bg-[#E67E22] text-white px-3 py-1.5 rounded-lg shadow-sm hover:bg-orange-600">
              <Plus size={14} /> New
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          {postedRequirements.map((req, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-sm font-bold text-gray-900">{req.crop}</h3>
                  <span className={`text-[11px] px-2.5 py-0.5 rounded-full border font-semibold ${req.statusColor}`}>
                    {req.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1"><MapPin size={13} /> {req.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={13} /> Deadline: {req.deadline}</span>
                  <span className="flex items-center gap-1"><Scale size={13} /> {req.quantity}</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-8 border-t sm:border-0 pt-3 sm:pt-0 border-gray-50">
                <div className="text-left sm:text-right">
                  <span className="block text-base font-black text-[#E67E22]">{req.price}</span>
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Per kg</span>
                </div>
                <div className="text-center min-w-[40px]">
                  <span className="block text-base font-black text-gray-900">{req.bids}</span>
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Bids</span>
                </div>
                <button className="flex items-center gap-1 text-xs font-bold text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50">
                  <Eye size={14} /> View Bids
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Active Orders Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Active Orders</h2>
          <button className="text-xs font-bold text-[#E67E22] hover:underline flex items-center gap-0.5">
            View All Orders <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="space-y-3">
          {activeOrders.map((order, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-[240px]">
                <img src={order.img} alt="" className="w-11 h-11 rounded-full object-cover border border-gray-100" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{order.farmer}</h4>
                  <span className="text-[11px] text-gray-400 font-bold tracking-tight uppercase">{order.id}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1 text-xs flex-1 max-w-md">
                <div>
                  <span className="text-gray-400 font-bold block text-[10px] uppercase tracking-wider">Crop Status</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="font-bold text-gray-900">{order.crop}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${order.statusColor}`}>{order.status}</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400 font-bold block text-[10px] uppercase tracking-wider">Parameters</span>
                  <span className="font-semibold text-gray-600 block mt-0.5">Qty: {order.qty}</span>
                  <span className="text-[10px] text-gray-400 block font-medium">Price: {order.price}</span>
                </div>
                <div className="col-span-2 sm:col-span-1 space-y-1.5">
                  <div className="flex justify-between text-[11px] font-bold text-gray-500">
                    <span>Progress</span>
                    <span>{order.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${order.progress}%` }} />
                  </div>
                  {order.subStatus && (
                    <span className="text-[10px] text-blue-600 font-bold flex items-center gap-0.5">
                      <Truck size={12} /> {order.subStatus}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-6 border-t lg:border-0 pt-3 lg:pt-0 border-gray-50 min-w-[160px]">
                <div>
                  <span className="block text-base font-black text-[#E67E22]">{order.value}</span>
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Value</span>
                </div>
                <button className="text-xs font-bold text-gray-700 bg-white border border-gray-200 px-3 py-2 rounded-lg shadow-sm hover:bg-gray-50 whitespace-nowrap">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Connected Farmers Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Connected Farmers</h2>
          <button className="text-xs font-bold text-[#E67E22] hover:underline flex items-center gap-0.5">
            Browse All <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {connectedFarmers.map((farmer, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3.5">
                  <img src={farmer.img} alt="" className="w-12 h-12 rounded-full object-cover border border-gray-100" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-gray-900">{farmer.name}</h4>
                      <span className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md ${farmer.tierColor}`}>
                        ★ {farmer.tier}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium flex items-center gap-0.5"><MapPin size={12} /> {farmer.location}</span>
                  </div>
                </div>
                <div className="text-right space-y-0.5">
                  <div className="flex items-center justify-end gap-0.5 text-xs font-bold text-amber-500">
                    ★ {farmer.rating} <span className="text-[10px] text-gray-400 font-normal">({farmer.reviews})</span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-bold block">{farmer.contracts}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {farmer.crops.map((crop, i) => (
                  <span key={i} className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100/60">
                    {crop}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-gray-50">
                <button className="flex items-center justify-center gap-1 text-xs font-bold bg-[#E67E22] text-white py-2 rounded-lg shadow-sm hover:bg-orange-600 transition-colors">
                  <MessageSquare size={14} /> Message
                </button>
                <button className="text-xs font-bold text-gray-600 bg-white border border-gray-200 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}