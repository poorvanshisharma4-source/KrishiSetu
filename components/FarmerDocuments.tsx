'use client'

import { useLanguage } from '@/components/LanguageContext'

export default function FarmerDocuments() {
  const { t } = useLanguage()

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Payment Summary */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold">
          {t('farmerDocuments.paymentSummary')}
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">
              {t('farmerDocuments.walletBalance')}
            </span>

            <span className="font-bold text-green-600">
              ₹12,450
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              {t('farmerDocuments.pendingPayments')}
            </span>

            <span className="font-bold text-orange-500">
              ₹18,600
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              {t('farmerDocuments.totalEarnings')}
            </span>

            <span className="font-bold text-blue-600">
              ₹1,24,500
            </span>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold">
          {t('farmerDocuments.documents')}
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between rounded-xl border p-3">
            <span>
              📄 {t('farmerDocuments.aadhaarCard')}
            </span>

            <span className="font-medium text-green-600">
              {t('farmerDocuments.verified')}
            </span>
          </div>

          <div className="flex justify-between rounded-xl border p-3">
            <span>
              🏡 {t('farmerDocuments.landRecord')}
            </span>

            <span className="font-medium text-green-600">
              {t('farmerDocuments.verified')}
            </span>
          </div>

          <div className="flex justify-between rounded-xl border p-3">
            <span>
              🏦 {t('farmerDocuments.bankPassbook')}
            </span>

            <span className="font-medium text-green-600">
              {t('farmerDocuments.verified')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}