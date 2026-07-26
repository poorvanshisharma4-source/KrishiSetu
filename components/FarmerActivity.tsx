'use client'

import {
  CheckCircle2,
  Wallet,
  Sprout,
} from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

export default function FarmerActivity() {
  const { t } = useLanguage()

  const activities = [
    {
      title: t('farmerActivity.contractCompleted'),
      description: t('farmerActivity.soldWheat'),
      date: t('farmerActivity.today'),
      icon: CheckCircle2,
      color: 'text-green-600',
    },
    {
      title: t('farmerActivity.paymentReceived'),
      description: t('farmerActivity.paymentCredited'),
      date: t('farmerActivity.twoDaysAgo'),
      icon: Wallet,
      color: 'text-orange-600',
    },
    {
      title: t('farmerActivity.newCropListed'),
      description: t('farmerActivity.tomatoAdded'),
      date: t('farmerActivity.oneWeekAgo'),
      icon: Sprout,
      color: 'text-blue-600',
    },
  ]

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        {t('farmerActivity.recentActivity')}
      </h2>

      <div className="space-y-6">
        {activities.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={index}
              className="flex gap-4"
            >
              <div className="mt-1">
                <Icon
                  size={28}
                  className={item.color}
                />
              </div>

              <div className="border-l-2 pb-4 pl-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <span className="text-sm text-gray-400">
                    {item.date}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}