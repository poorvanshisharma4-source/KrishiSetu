
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

'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Plus,
  FileText,
  Package,
  Users,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  Sprout,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  ClipboardList,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import api from '@/lib/api'
import { useLanguage } from '@/components/LanguageContext'

export default function BuyerDashboard() {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useLanguage()

  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await api.get('/dashboard/buyer')
        const data = response?.data ?? response

        setDashboardData(data)
        setError(null)
      } catch (err: any) {
        console.error('Buyer dashboard fetch error:', err)

        setError(
          err?.response?.data?.message ||
            err?.message ||
            t('buyerDashboard.error')
        )
      } finally {
        setLoading(false)
      }
    }

    fetchDashboard()
  }, [t])

  const getValue = (value: any) => {
    if (value != null) {
      return value
    }

    return loading
      ? t('buyerDashboard.loading')
      : '--'
  }

  const summaryCards = [
    {
      title: t('buyerDashboard.postedRequirements'),
      value: getValue(dashboardData?.totalRequirements),
      subtitle: t('buyerDashboard.postedRequirementsSubtitle'),
    },
    {
      title: t('buyerDashboard.pendingFarmerRequests'),
      value: getValue(dashboardData?.pendingFarmerRequests),
      subtitle: t('buyerDashboard.pendingFarmerRequestsSubtitle'),
    },
    {
      title: t('buyerDashboard.activeContracts'),
      value: getValue(dashboardData?.activeContracts),
      subtitle: t('buyerDashboard.activeContractsSubtitle'),
    },
    {
      title: t('buyerDashboard.completedContracts'),
      value: getValue(dashboardData?.completedContracts),
      subtitle: t('buyerDashboard.completedContractsSubtitle'),
    },
    {
      title: t('buyerDashboard.totalSpending'),
      value:
        dashboardData?.spending != null
          ? `₹${Number(
              dashboardData.spending
            ).toLocaleString('en-IN')}`
          : loading
            ? t('buyerDashboard.loading')
            : '--',
      subtitle: t('buyerDashboard.totalSpendingSubtitle'),
    },
  ]

  const sidebarItems = [
    {
      id: 'dashboard',
      icon: LayoutDashboard,
      label: t('buyerDashboard.dashboard'),
      path: '/buyer/dashboard',
    },
    {
      id: 'post',
      icon: Plus,
      label: t('buyerDashboard.postRequirement'),
      path: '/buyer/post-requirement',
    },
    {
      id: 'my-requirements',
      icon: ClipboardList,
      label: t('buyerDashboard.myRequirements'),
      path: '/buyer/my-requirements',
    },
    {
      id: 'contracts',
      icon: FileText,
      label: t('buyerDashboard.myContracts'),
      path: '/buyer/contracts',
    },
    {
      id: 'orders',
      icon: Package,
      label: t('buyerDashboard.activeOrders'),
      path: '/buyer/active-orders',
    },
    {
      id: 'farmers',
      icon: Users,
      label: t('buyerDashboard.connectedFarmers'),
      path: '/buyer/connected-farmers',
    },
    {
      id: 'analytics',
      icon: BarChart3,
      label: t('buyerDashboard.analytics'),
      path: '/buyer/analytics',
    },
    {
      id: 'messages',
      icon: MessageSquare,
      label: t('buyerDashboard.messages'),
      path: '/buyer/messages',
    },
    {
      id: 'profile',
      icon: Settings,
      label: t('buyerDashboard.profile'),
      path: '/buyer/profile',
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row">

        {/* Sidebar */}
        <div className="flex-shrink-0 lg:w-64">

          <div className="sticky top-24 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">

            <nav className="space-y-1">

              {sidebarItems.map((item) => {
                const isActive = pathname === item.path

                return (
                  <button
                    key={item.id}
                    onClick={() => router.push(item.path)}
                    className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left transition-all ${
                      isActive
                        ? 'bg-amber-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />

                    <span className="font-medium">
                      {item.label}
                    </span>
                  </button>
                )
              })}

              {/* Logout Action */}
              <div className="mt-4 border-t border-gray-200 pt-4">

                <button
                  type="button"
                  onClick={() => setShowLogoutModal(true)}
                  className="flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left font-medium text-red-600 transition-all hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5" />

                  <span>
                    {t('buyerDashboard.logout')}
                  </span>
                </button>

              </div>

            </nav>

          </div>

        </div>

        {/* Workspace */}
        <div className="flex-1 space-y-6">

          {/* Welcome Card */}
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-6 text-white shadow-md">

            <p className="text-sm font-medium text-amber-100">
              {t('buyerDashboard.title')}
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              {t('buyerDashboard.welcome')}
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-amber-100 opacity-90">
              {t('buyerDashboard.description')}
            </p>

          </div>

          {/* Summary Cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

            {summaryCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <p className="mt-4 text-3xl font-semibold text-gray-900">
                  {card.value}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {card.subtitle}
                </p>
              </div>
            ))}

          </div>

          {/* Main AI Matching Hub */}
          <div className="space-y-6 rounded-2xl border border-green-100 bg-white p-8 shadow-sm">

            <div className="flex flex-col items-start justify-between gap-4 md:flex-row">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-green-100 p-4 text-green-700">
                  <Sprout className="h-8 w-8" />
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h2 className="text-2xl font-black text-gray-900">
                      {t('buyerDashboard.aiFarmerMatching')}
                    </h2>

                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-800">
                      <Sparkles size={12} />

                      {t('buyerDashboard.smartEngine')}
                    </span>

                  </div>

                  <p className="mt-1 text-sm text-gray-500">
                    {t('buyerDashboard.matchingDescription')}
                  </p>

                </div>

              </div>

              <Button
                onClick={() =>
                  router.push('/buyer/ai-recommendation')
                }
                className="flex h-12 w-full items-center gap-2 rounded-xl bg-green-700 px-6 text-sm font-bold text-white shadow-sm hover:bg-green-800 md:w-auto"
              >
                {t('buyerDashboard.findMatches')}

                <ArrowRight size={16} />
              </Button>

            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 gap-4 border-t border-gray-100 pt-4 md:grid-cols-3">

              <div className="space-y-2 rounded-xl bg-gray-50 p-4">

                <div className="flex items-center gap-1.5 text-sm font-bold text-orange-500">
                  <Zap size={16} />

                  {t('buyerDashboard.instantMetricsMatch')}
                </div>

                <p className="text-xs leading-relaxed text-gray-500">
                  {t('buyerDashboard.instantMetricsDescription')}
                </p>

              </div>

              <div className="space-y-2 rounded-xl bg-gray-50 p-4">

                <div className="flex items-center gap-1.5 text-sm font-bold text-green-700">
                  <ShieldCheck size={16} />

                  {t('buyerDashboard.trustScoreEvaluation')}
                </div>

                <p className="text-xs leading-relaxed text-gray-500">
                  {t('buyerDashboard.trustScoreDescription')}
                </p>

              </div>

              <div className="space-y-2 rounded-xl bg-gray-50 p-4">

                <div className="flex items-center gap-1.5 text-sm font-bold text-blue-600">
                  <Sparkles size={16} />

                  {t('buyerDashboard.optimizedNegotiations')}
                </div>

                <p className="text-xs leading-relaxed text-gray-500">
                  {t(
                    'buyerDashboard.optimizedNegotiationsDescription'
                  )}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

          <div className="w-full max-w-sm space-y-4 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-2xl">

            <div className="mx-auto w-fit rounded-full bg-red-50 p-3 text-red-600">
              <LogOut size={28} />
            </div>

            <div>

              <h3 className="text-lg font-extrabold text-gray-900">
                {t('buyerDashboard.logoutConfirmation')}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {t('buyerDashboard.logoutDescription')}
              </p>

            </div>

            <div className="flex gap-3 pt-2">

              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 rounded-xl border border-gray-200 py-2.5 text-xs font-bold text-gray-700 transition-all hover:bg-gray-50"
              >
                {t('buyerDashboard.cancel')}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowLogoutModal(false)
                  router.push('/')
                }}
                className="flex-1 rounded-xl bg-red-600 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-red-700"
              >
                {t('buyerDashboard.yesLogout')}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}