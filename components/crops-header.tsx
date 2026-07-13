'use client'

import { Plus, Search } from 'lucide-react'

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
  return (
    <div className="mb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Crops Inventory</h1>
        <p className="text-gray-600 mt-1">Manage and monitor your organic crops</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search crops..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-none transition-all text-black text-sm"
          />
        </div>

        {/* Add New Crop Button */}
        <button
          type="button"
          onClick={onAddClick}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-md bg-[#2E7D32] hover:bg-[#1b4d1e]"
        >
          <Plus className="w-5 h-5" />
          Add New Crop
        </button>
      </div>
    </div>
  )
}