'use client'

import Link from 'next/link'
import {
  FileText,
  MessageSquare,
  Sprout,
  BarChart3,
  LogOut,
  LayoutDashboard,
  ShoppingBag,
  Settings,
} from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

export function FarmerSidebar() {
  const { t } = useLanguage()

  const sidebarItems = [
    {
      id: 'dashboard',
      icon: LayoutDashboard,
      label: t('farmerSidebar.dashboard'),
      path: '/farmer/dashboard',
    },
    {
      id: 'my-crops',
      icon: Sprout,
      label: t('farmerSidebar.myCrops'),
      path: '/farmer/my-crops',
    },
    {
      id: 'contracts',
      icon: FileText,
      label: t('farmerSidebar.myContracts'),
      path: '/farmer/contracts',
    },
    {
      id: 'requirements',
      icon: ShoppingBag,
      label: t('farmerSidebar.buyerRequirements'),
      path: '/farmer/requirements',
    },
    {
      id: 'requests',
      icon: FileText,
      label: t('farmerSidebar.incomingRequests'),
      path: '/farmer/requests',
    },
    {
      id: 'analytics',
      icon: BarChart3,
      label: t('farmerSidebar.aiAnalytics'),
      path: '/farmer/ai',
    },
    {
      id: 'messages',
      icon: MessageSquare,
      label: t('farmerSidebar.messages'),
      path: '/farmer/messages',
    },
    {
      id: 'profile',
      icon: Settings,
      label: t('farmerSidebar.profile'),
      path: '/farmer/profile',
    },
  ]

  return (
    <div className="flex-shrink-0 lg:w-64">
      <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="flex w-full items-center space-x-3 rounded-xl px-4 py-3 text-gray-600 transition-all hover:bg-[#F5F0E6] hover:text-[#2E7D32]"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm font-semibold">
                {item.label}
              </span>
            </Link>
          ))}

          <div className="mt-4 border-t border-gray-100 pt-4">
            <button
              type="button"
              className="flex w-full items-center space-x-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-red-600 outline-none transition-all hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />

              <span>
                {t('farmerSidebar.logout')}
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}