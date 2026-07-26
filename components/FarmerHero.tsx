'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, ShieldCheck, Pencil } from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

export default function FarmerHero() {
  const { t } = useLanguage()

  const [showEdit, setShowEdit] = useState(false)

  const [farmerName, setFarmerName] = useState('Ramesh Patil')
  const [location, setLocation] = useState('Sehore, Madhya Pradesh')
  const [experience, setExperience] = useState('8 Years')
  const [land, setLand] = useState('5.2 Acres')
  const [water, setWater] = useState('Borewell')

  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 p-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Left */}
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <Image
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
              alt="Farmer"
              width={120}
              height={120}
              className="rounded-full border-4 border-white object-cover"
            />

            <div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <h1 className="text-3xl font-bold text-white sm:text-4xl">
                  {farmerName}
                </h1>

                <span className="rounded-full bg-green-500 px-4 py-1 text-sm text-white">
                  {t('farmerHero.verifiedFarmer')}
                </span>
              </div>

              <button
                onClick={() => setShowEdit(true)}
                className="mt-4 flex items-center gap-2 rounded-xl bg-white px-5 py-2 font-medium text-green-700 transition hover:bg-green-50"
              >
                <Pencil size={16} />
                {t('farmerHero.editProfile')}
              </button>

              <div className="mt-3 flex items-center gap-2 text-green-100">
                <MapPin size={18} />
                {location}
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start">
                <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm text-green-100">
                    {t('farmerHero.memberSince')}
                  </p>

                  <h3 className="font-bold text-white">
                    Jan 2024
                  </h3>
                </div>

                <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm text-green-100">
                    {t('farmerHero.experience')}
                  </p>

                  <h3 className="font-bold text-white">
                    {experience}
                  </h3>
                </div>

                <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm text-green-100">
                    {t('farmerHero.landOwned')}
                  </p>

                  <h3 className="font-bold text-white">
                    {land}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Trust Score */}
          <div className="w-full rounded-2xl bg-white p-6 text-center shadow-lg sm:w-64">
            <ShieldCheck
              className="mx-auto text-green-700"
              size={45}
            />

            <h2 className="mt-3 font-semibold">
              {t('farmerHero.trustScore')}
            </h2>

            <div className="mt-2 text-5xl font-bold text-green-700">
              86
            </div>

            <p className="text-gray-500">
              {t('farmerHero.outOf')}
            </p>

            <div className="mt-4">
              <div className="h-3 rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-green-600"
                  style={{ width: '86%' }}
                />
              </div>
            </div>

            <div className="mt-4 rounded-full bg-green-100 py-2 text-sm font-medium text-green-700">
              {t('farmerHero.goldTrustedFarmer')}
            </div>

            <p className="mt-3 text-xs text-gray-500">
              {t('farmerHero.trustedBy')}
            </p>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-6">
            <h2 className="mb-5 text-xl font-bold">
              {t('farmerHero.editFarmerProfile')}
            </h2>

            <div className="space-y-4">
              <input
                value={farmerName}
                onChange={(e) => setFarmerName(e.target.value)}
                placeholder={t('farmerHero.farmerName')}
                className="w-full rounded-xl border p-3"
              />

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={t('farmerHero.location')}
                className="w-full rounded-xl border p-3"
              />

              <input
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder={t('farmerHero.experience')}
                className="w-full rounded-xl border p-3"
              />

              <input
                value={land}
                onChange={(e) => setLand(e.target.value)}
                placeholder={t('farmerHero.landOwned')}
                className="w-full rounded-xl border p-3"
              />

              <input
                value={water}
                onChange={(e) => setWater(e.target.value)}
                placeholder={t('farmerHero.waterSource')}
                className="w-full rounded-xl border p-3"
              />

              <button
                onClick={() => setShowEdit(false)}
                className="w-full rounded-xl bg-green-700 py-3 text-white"
              >
                {t('farmerHero.saveChanges')}
              </button>

              <button
                onClick={() => setShowEdit(false)}
                className="w-full rounded-xl border py-3"
              >
                {t('farmerHero.cancel')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}