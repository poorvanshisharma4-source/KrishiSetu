'use client'

import { Plus, Search } from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

interface CropsHeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  onAddClick: () => void
}

export function CropsHeader({
  searchQuery,
  onSearchChange,
  onAddClick,
}: CropsHeaderProps) {
  const { t } = useLanguage()

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {t('cropsHeader.title')}
        </h1>

        <p className="mt-1 text-gray-600">
          {t('cropsHeader.subtitle')}
        </p>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search size={18} />
          </span>

          <input
            type="text"
            placeholder={t('cropsHeader.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-4 text-sm text-black outline-none transition-all focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]"
          />
        </div>

        {/* Add New Crop Button */}
        <button
          type="button"
          onClick={onAddClick}
          className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-[#2E7D32] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#1b4d1e] sm:w-auto"
        >
          <Plus className="h-5 w-5" />

          {t('cropsHeader.addNewCrop')}
        </button>
      </div>
    </div>
  )
}