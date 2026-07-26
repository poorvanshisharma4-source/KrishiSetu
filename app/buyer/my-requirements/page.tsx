'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Tag,
  Loader2,
  PackageCheck,
} from 'lucide-react'
import api from '@/lib/api'
import { useLanguage } from '@/components/LanguageContext'

interface Requirement {
  _id?: string
  id?: string
  cropName: string
  quantity: number
  unit: string
  expectedPrice: number
  requiredBy: string
  location: string
  description?: string
  createdAt?: string
}

export default function MyRequirementsPage() {
  const router = useRouter()
  const { t } = useLanguage()

  const [requirements, setRequirements] = useState<Requirement[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchRequirements = async () => {
      try {
        setLoading(true)
        setErrorMessage(null)

        const response = await api.get('/requirements')
        const rawData = response?.data ?? response
        const data =
          rawData?.data ||
          rawData?.requirements ||
          rawData ||
          []

        if (isMounted) {
          setRequirements(Array.isArray(data) ? data : [])
        }
      } catch (err: any) {
        const message =
          err?.response?.data?.message ||
          err?.message ||
          t('myRequirements.unableToLoad')

        console.warn('Could not fetch requirements:', message)

        if (isMounted) {
          setRequirements([])
          setErrorMessage(message)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchRequirements()

    return () => {
      isMounted = false
    }
  }, [t])

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex cursor-pointer items-center gap-2 font-medium text-green-700 transition-colors hover:text-green-800"
      >
        <ArrowLeft size={20} />
        {t('myRequirements.backToDashboard')}
      </button>

      {/* Header Section */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">
          {t('myRequirements.title')}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {t('myRequirements.subtitle')}
        </p>
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="flex flex-col items-center justify-center space-y-3 rounded-2xl border border-gray-100 bg-white py-20">
          <Loader2 className="h-8 w-8 animate-spin text-amber-600" />

          <p className="text-sm font-medium text-gray-500">
            {t('myRequirements.loading')}
          </p>
        </div>
      ) : errorMessage ? (
        <div className="space-y-4 rounded-2xl border border-red-100 bg-white p-12 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-600">
            <PackageCheck size={32} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {t('myRequirements.loadErrorTitle')}
            </h3>

            <p className="mx-auto mt-1 max-w-sm text-xs text-gray-500">
              {errorMessage}
            </p>
          </div>
        </div>
      ) : requirements.length === 0 ? (
        <div className="space-y-4 rounded-2xl border border-gray-100 bg-white p-12 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-600">
            <PackageCheck size={32} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {t('myRequirements.noRequirementsTitle')}
            </h3>

            <p className="mx-auto mt-1 max-w-sm text-xs text-gray-500">
              {t('myRequirements.noRequirementsDescription')}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {requirements.map((item) => (
            <div
              key={item._id || item.id}
              className="flex flex-col justify-between space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="space-y-3">

                {/* Requirement Header */}
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold capitalize text-gray-900">
                    {item.cropName}
                  </h3>

                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-800">
                    {t('myRequirements.active')}
                  </span>
                </div>

                {/* Requirement Details */}
                <div className="space-y-2 text-xs text-gray-600">

                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    <Tag size={15} className="text-amber-600" />

                    <span>
                      {t('myRequirements.quantity')}:{' '}
                      <strong className="text-gray-900">
                        {item.quantity} {item.unit}
                      </strong>
                    </span>
                  </div>

                  {/* Target Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-amber-600">
                      ₹
                    </span>

                    <span>
                      {t('myRequirements.targetPrice')}:{' '}
                      <strong className="text-gray-900">
                        ₹{item.expectedPrice} / {item.unit}
                      </strong>
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-amber-600" />

                    <span className="truncate">
                      {item.location}
                    </span>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center gap-2">
                    <Calendar size={15} className="text-amber-600" />

                    <span>
                      {t('myRequirements.deadline')}:{' '}
                      {item.requiredBy
                        ? new Date(item.requiredBy).toLocaleDateString()
                        : t('myRequirements.na')}
                    </span>
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="line-clamp-2 rounded-xl bg-gray-50 p-3 text-xs text-gray-500">
                    "{item.description}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}