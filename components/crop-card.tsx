'use client'

import React from 'react'
import { Calendar, Layers, Activity } from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

interface CropCardProps {
  name: string
  areaSize: number
  harvestDate: string
  growthPercentage: number
  healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention'
}

export function CropCard({
  name,
  areaSize,
  harvestDate,
  growthPercentage,
  healthStatus,
}: CropCardProps) {
  const { t } = useLanguage()

  // Dynamic color selection for health badge
  const getHealthColor = (status: string) => {
    switch (status) {
      case 'Excellent':
        return 'bg-blue-50 text-blue-700 border-blue-200'

      case 'Needs Attention':
        return 'bg-amber-50 text-amber-700 border-amber-200'

      default:
        return 'bg-green-50 text-green-700 border-green-200'
    }
  }

  const getHealthLabel = (status: CropCardProps['healthStatus']) => {
    switch (status) {
      case 'Excellent':
        return t('cropCard.excellent')

      case 'Needs Attention':
        return t('cropCard.needsAttention')

      case 'Healthy':
        return t('cropCard.healthy')

      default:
        return status
    }
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            {name}
          </h3>

          <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
            <Layers size={14} />

            <span>
              {areaSize} {t('cropCard.acres')}
            </span>
          </div>
        </div>

        <span
          className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${getHealthColor(
            healthStatus
          )}`}
        >
          {getHealthLabel(healthStatus)}
        </span>
      </div>

      {/* Progress Bar Area */}
      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs font-semibold text-gray-400">
            <Activity size={14} />

            {t('cropCard.growthStage')}
          </span>

          <span className="text-xs font-bold text-[#2E7D32]">
            {growthPercentage}%
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-[#2E7D32] transition-all duration-500"
            style={{
              width: `${growthPercentage}%`,
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-1.5 border-t border-gray-50 pt-3 text-xs text-gray-500">
        <Calendar size={14} />

        <span>
          {t('cropCard.estimatedHarvest')}:{' '}
          {harvestDate}
        </span>
      </div>
    </div>
  )
}