'use client'

import React, { useState } from 'react'
import { X, Calendar, Scale, Layers } from 'lucide-react'

interface AddCropModalProps {
  isOpen: boolean
  onClose: () => void
  onAddCrop: (crop: { name: string; areaSize: number; harvestDate: string; growthPercentage: number; healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention' }) => void
}

const CROP_OPTIONS = ['Organic Tomatoes', 'Basmati Rice', 'Red Onions', 'Green Chillies', 'Wheat', 'Potatoes']

export function AddCropModal({ isOpen, onClose, onAddCrop }: AddCropModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    areaSize: '',
    harvestDate: '',
  })

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.areaSize || !formData.harvestDate) return

    onAddCrop({
      name: formData.name,
      areaSize: parseFloat(formData.areaSize),
      harvestDate: formData.harvestDate,
      growthPercentage: 0,
      healthStatus: 'Healthy',
    })
    
    setFormData({ name: '', areaSize: '', harvestDate: '' })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 border border-gray-100 shadow-xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Add New Crop</h2>
          <button type="button" onClick={onClose} className="p-1 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Crop Name */}
          <div>
            <label className="block text-sm font-semibold text-[#8D6E63] mb-1">Crop Name</label>
            <div className="relative">
              <select
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-none bg-white text-black text-sm transition-all"
              >
                <option value="">Select a crop...</option>
                {CROP_OPTIONS.map((crop) => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Land Area */}
          <div>
            <label className="block text-sm font-semibold text-[#8D6E63] mb-1">Land Area (Acres)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Layers size={18} />
              </span>
              <input
                type="number"
                name="areaSize"
                step="0.1"
                min="0.1"
                placeholder="e.g. 2.5"
                value={formData.areaSize}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-none text-black text-sm transition-all"
              />
            </div>
          </div>

          {/* Harvest Date */}
          <div>
            <label className="block text-sm font-semibold text-[#8D6E63] mb-1">Estimated Harvest Date</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Calendar size={18} />
              </span>
              <input
                type="date"
                name="harvestDate"
                value={formData.harvestDate}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-none text-black text-sm transition-all"
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 mt-6 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-xl text-sm hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 py-2.5 bg-[#2E7D32] hover:bg-[#1b4d1e] text-white font-semibold rounded-xl text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Add Crop
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}