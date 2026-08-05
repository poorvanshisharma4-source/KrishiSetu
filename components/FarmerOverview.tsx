'use client'

import { useLanguage } from '@/components/LanguageContext'

import type { UserProfileData } from "./FarmerProfilePage";

interface FarmerOverviewProps {
  user?: UserProfileData | null;
}

export default function FarmerOverview({ user }: FarmerOverviewProps) {
  const { t } = useLanguage()

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* About Farmer */}
      <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
        <h2 className="mb-4 text-xl font-bold">
          {t('farmerOverview.aboutMe')}
        </h2>

        <p className="leading-7 text-gray-600">
  A registered farmer on KrishiSetu committed to transparent and demand-driven farming practices.
</p>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">
              {t('farmerOverview.mobile')}
            </span>

            <span className="font-medium">
              {user?.phone || "N/A"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              {t('farmerOverview.email')}
            </span>

            <span className="font-medium">
              {user?.email || "N/A"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              {t('farmerOverview.address')}
            </span>

            <span className="font-medium">
              {[user?.village, user?.district, user?.state]
  .filter(Boolean)
  .join(", ") || "N/A"}
            </span>
          </div>
        </div>
      </div>

      {/* Land Details */}
      <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
        <h2 className="mb-4 text-xl font-bold">
          {t('farmerOverview.landDetails')}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">
              {t('farmerOverview.totalLand')}
            </p>

            <h3 className="text-2xl font-bold">
              {user?.landSize ? `${user.landSize} Acres` : "N/A"}
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">
              {t('farmerOverview.soilType')}
            </p>

            <h3 className="font-bold">
              Black Soil
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">
              {t('farmerOverview.waterSource')}
            </p>

            <h3 className="font-bold">
              {user?.waterAvailability || "N/A"}
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">
              {t('farmerOverview.organicFarming')}
            </p>

            <h3 className="font-bold text-green-600">
              {t('farmerOverview.yes')}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}