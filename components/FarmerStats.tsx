'use client'

import {
  FileText,
  Wallet,
  Star,
  Users,
  CheckCircle2,
} from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

export default function FarmerStats() {
  const { t } = useLanguage()

  const stats = [
    {
      title: t('farmerStats.activeContracts'),
      value: '4',
      description: t('farmerStats.currentlyRunning'),
      color: 'bg-green-50',
      icon: FileText,
      iconColor: 'text-green-600',
    },
    {
      title: t('farmerStats.completedContracts'),
      value: '12',
      description: t('farmerStats.successfullyDelivered'),
      color: 'bg-orange-50',
      icon: CheckCircle2,
      iconColor: 'text-orange-600',
    },
    {
      title: t('farmerStats.totalEarnings'),
      value: '₹1,24,500',
      description: t('farmerStats.lifetimeIncome'),
      color: 'bg-blue-50',
      icon: Wallet,
      iconColor: 'text-blue-600',
    },
    {
      title: t('farmerStats.buyerRating'),
      value: '4.8 / 5',
      description: t('farmerStats.basedOnReviews'),
      color: 'bg-yellow-50',
      icon: Star,
      iconColor: 'text-yellow-600',
    },
    {
      title: t('farmerStats.connectedBuyers'),
      value: '7',
      description: t('farmerStats.trustedPartners'),
      color: 'bg-purple-50',
      icon: Users,
      iconColor: 'text-purple-600',
    },
  ]

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((item, index) => {
        const Icon = item.icon

        return (
          <div
            key={index}
            className="
              rounded-2xl
              border
              bg-white
              p-4
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:p-5
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {item.value}
                </h2>

                <p className="mt-2 text-xs text-gray-400">
                  {item.description}
                </p>
              </div>

              <div className={`${item.color} rounded-xl p-3`}>
                <Icon
                  className={item.iconColor}
                  size={30}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}