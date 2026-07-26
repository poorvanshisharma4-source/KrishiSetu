'use client'

import { useLanguage } from '@/components/LanguageContext'

interface FarmerTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function FarmerTabs({
  activeTab,
  setActiveTab,
}: FarmerTabsProps) {
  const { t } = useLanguage()

  const tabs = [
    {
      value: 'Overview',
      label: t('farmerTabs.overview'),
    },
    {
      value: 'Crops',
      label: t('farmerTabs.crops'),
    },
    {
      value: 'Activity',
      label: t('farmerTabs.activity'),
    },
    {
      value: 'Documents',
      label: t('farmerTabs.documents'),
    },
  ]

  return (
    <div className="rounded-2xl border bg-white p-3 shadow-sm">
      <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`whitespace-nowrap rounded-xl px-5 py-2 font-medium transition ${
              activeTab === tab.value
                ? 'bg-green-700 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-green-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}