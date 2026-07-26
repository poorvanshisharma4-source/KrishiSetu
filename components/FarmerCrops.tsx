'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/LanguageContext'

export default function FarmerCrops() {
  const { t } = useLanguage()
  const [showModal, setShowModal] = useState(false)

  const crops = [
    {
      name: 'Wheat',
      emoji: '🌾',
      season: t('farmerCrops.rabiSeason'),
      area: '2 Acres',
      status: t('farmerCrops.active'),
    },
    {
      name: 'Maize',
      emoji: '🌽',
      season: t('farmerCrops.kharifSeason'),
      area: '1.5 Acres',
      status: t('farmerCrops.available'),
    },
    {
      name: 'Onion',
      emoji: '🧅',
      season: t('farmerCrops.winterCrop'),
      area: '1 Acre',
      status: t('farmerCrops.active'),
    },
    {
      name: 'Tomato',
      emoji: '🍅',
      season: t('farmerCrops.allSeason'),
      area: '0.7 Acres',
      status: t('farmerCrops.listed'),
    },
    {
      name: 'Potato',
      emoji: '🥔',
      season: t('farmerCrops.winter'),
      area: '8 Acres',
      status: t('farmerCrops.listed'),
    },
  ]

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {t('farmerCrops.title')}
        </h2>

        <button
          onClick={() => setShowModal(true)}
          className="rounded-xl bg-green-700 px-3 py-2 text-sm text-white sm:px-4"
        >
          + {t('farmerCrops.addCrop')}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {crops.map((crop) => (
          <div
            key={crop.name}
            className="rounded-2xl border p-4 transition hover:shadow-md sm:p-5"
          >
            <div className="text-4xl">
              {crop.emoji}
            </div>

            <h3 className="mt-3 text-lg font-bold">
              {crop.name}
            </h3>

            <div className="mt-3 space-y-1 text-sm text-gray-500">
              <p>
                🌱 {crop.season}
              </p>

              <p>
                📏 {crop.area}
              </p>
            </div>

            <span className="mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              {crop.status}
            </span>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-2xl bg-white p-6">
            <h2 className="mb-5 text-xl font-bold">
              {t('farmerCrops.addNewCrop')}
            </h2>

            <div className="space-y-4">
              <input
                placeholder={t(
                  'farmerCrops.cropName'
                )}
                className="w-full rounded-xl border p-3"
              />

              <input
                placeholder={t(
                  'farmerCrops.season'
                )}
                className="w-full rounded-xl border p-3"
              />

              <input
                placeholder={t(
                  'farmerCrops.landArea'
                )}
                className="w-full rounded-xl border p-3"
              />

              <input
                placeholder={t(
                  'farmerCrops.expectedYield'
                )}
                className="w-full rounded-xl border p-3"
              />

              <button className="w-full rounded-xl bg-green-700 py-3 text-white">
                {t('farmerCrops.saveCrop')}
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="w-full rounded-xl border py-3"
              >
                {t('farmerCrops.cancel')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}