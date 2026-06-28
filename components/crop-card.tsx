'use client'

import React from 'react'
import { Calendar, Layers, Activity } from 'lucide-react'

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

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{name}</h3>
          <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-1">
            <Layers size={14} />
            <span>{areaSize} Acres</span>
          </div>
        </div>
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getHealthColor(healthStatus)}`}>
          {healthStatus}
        </span>
      </div>

      {/* Progress Bar Area */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
            <Activity size={14} /> Growth Stage
          </span>
          <span className="text-xs font-bold text-[#2E7D32]">{growthPercentage}%</span>
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[#2E7D32] h-full rounded-full transition-all duration-500" 
            style={{ width: `${growthPercentage}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-gray-50 flex items-center gap-1.5 text-gray-500 text-xs">
        <Calendar size={14} />
        <span>Est. Harvest: {harvestDate}</span>
      </div>
    </div>
  )
}