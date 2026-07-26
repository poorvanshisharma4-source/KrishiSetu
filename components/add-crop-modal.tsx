'use client'

import React, { useState } from 'react'
import { X, Calendar, Layers, Loader2 } from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

interface AddCropModalProps {
  isOpen: boolean
  onClose: () => void
  onAddCrop: (crop: {
    name: string
    areaSize: number
    harvestDate: string
    growthPercentage: number
    healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention'
  }) => Promise<void> | void
}

const CROP_OPTIONS = [
  {
    value: 'Organic Tomatoes',
    labelKey: 'addCropModal.organicTomatoes',
  },
  {
    value: 'Basmati Rice',
    labelKey: 'addCropModal.basmatiRice',
  },
  {
    value: 'Red Onions',
    labelKey: 'addCropModal.redOnions',
  },
  {
    value: 'Green Chillies',
    labelKey: 'addCropModal.greenChillies',
  },
  {
    value: 'Wheat',
    labelKey: 'addCropModal.wheat',
  },
  {
    value: 'Potatoes',
    labelKey: 'addCropModal.potatoes',
  },
  {
    value: 'Other',
    labelKey: 'addCropModal.other',
  },
]

export function AddCropModal({
  isOpen,
  onClose,
  onAddCrop,
}: AddCropModalProps) {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: '',
    customName: '',
    areaSize: '',
    harvestDate: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const cropName =
      formData.name === 'Other'
        ? formData.customName
        : formData.name

    if (
      !cropName ||
      !formData.areaSize ||
      !formData.harvestDate
    ) {
      return
    }

    try {
      setIsSubmitting(true)

      await onAddCrop({
        name: cropName,
        areaSize: parseFloat(formData.areaSize),
        harvestDate: formData.harvestDate,
        growthPercentage: 0,
        healthStatus: 'Healthy',
      })

      setFormData({
        name: '',
        customName: '',
        areaSize: '',
        harvestDate: '',
      })

      onClose()
    } catch (error) {
      console.error(
        'Error submitting crop modal:',
        error
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="animate-in fade-in zoom-in-95 w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-xl duration-200">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {t('addCropModal.title')}
          </h2>

          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Crop Name */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-[#8D6E63]">
              {t('addCropModal.cropName')}
            </label>

            <div className="relative">
              <select
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-3 pr-10 text-sm text-black outline-none transition-all focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]"
              >
                <option value="">
                  {t('addCropModal.selectCrop')}
                </option>

                {CROP_OPTIONS.map((crop) => (
                  <option
                    key={crop.value}
                    value={crop.value}
                  >
                    {t(crop.labelKey)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Custom Crop Input if "Other" is selected */}
          {formData.name === 'Other' && (
            <div>
              <label className="mb-1 block text-sm font-semibold text-[#8D6E63]">
                {t('addCropModal.customCropName')}
              </label>

              <input
                type="text"
                name="customName"
                placeholder={t(
                  'addCropModal.customCropPlaceholder'
                )}
                value={formData.customName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-black outline-none transition-all focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]"
              />
            </div>
          )}

          {/* Land Area */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-[#8D6E63]">
              {t('addCropModal.landArea')}
            </label>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Layers size={18} />
              </span>

              <input
                type="number"
                name="areaSize"
                step="0.1"
                min="0.1"
                placeholder={t(
                  'addCropModal.landAreaPlaceholder'
                )}
                value={formData.areaSize}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-4 text-sm text-black outline-none transition-all focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]"
              />
            </div>
          </div>

          {/* Harvest Date */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-[#8D6E63]">
              {t('addCropModal.harvestDate')}
            </label>

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
                disabled={isSubmitting}
                className="w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-4 text-sm text-black outline-none transition-all focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]"
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="mt-6 flex gap-3 border-t border-transparent pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="w-1/2 rounded-xl border border-gray-300 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              {t('addCropModal.cancel')}
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-1/2 items-center justify-center gap-2 rounded-xl bg-[#2E7D32] py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1b4d1e]"
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />

                  {t('addCropModal.saving')}
                </>
              ) : (
                t('addCropModal.addCrop')
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}