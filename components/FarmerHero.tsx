'use client'

import { MapPin } from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'
import type { UserProfileData } from './FarmerProfilePage'

interface FarmerHeroProps {
  user?: UserProfileData | null
}

export default function FarmerHero({ user }: FarmerHeroProps) {
  const { t } = useLanguage()

  const farmerName = user?.name || 'Farmer'

  const location = [user?.village, user?.district, user?.state]
    .filter(Boolean)
    .join(', ')

  const experience = user?.farmingExperience
    ? `${user.farmingExperience} Years`
    : 'N/A'

  const land = user?.landSize ? `${user.landSize} Acres` : 'N/A'

  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 p-8">
        <div className="flex flex-col gap-8">

          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">

            {/* Avatar */}
            <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border-4 border-white bg-green-600 text-4xl font-bold text-white">
              {farmerName.charAt(0).toUpperCase()}
            </div>

            <div>

              {/* Name */}
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                {farmerName}
              </h1>

              {/* Location */}
              {location && (
                <div className="mt-3 flex items-center gap-2 text-green-100">
                  <MapPin size={18} />
                  <span>{location}</span>
                </div>
              )}

              {/* Info Cards */}
              <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start">

                <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm text-green-100">
                    {t('farmerHero.memberSince')}
                  </p>

                  <h3 className="font-bold text-white">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })
                      : 'N/A'}
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

        </div>
      </div>
    </div>
  )
}