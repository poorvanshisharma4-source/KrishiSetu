'use client'

import { useParams, useRouter } from 'next/navigation'
import {
  ArrowLeft,
  MapPin,
  Tractor,
  Droplets,
  Sprout,
  Star,
  CheckCircle,
} from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

const farmers = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    land: '8 Acres',
    water: 'Available',
    yield: '6500 kg',
    trust: '4.9',
    location: 'Indore, MP',
    crop: 'Wheat Farmer',
  },
  {
    id: 2,
    name: 'Mohan Patel',
    land: '6 Acres',
    water: 'Available',
    yield: '5400 kg',
    trust: '4.8',
    location: 'Dewas, MP',
    crop: 'Wheat Farmer',
  },
  {
    id: 3,
    name: 'Ajay Singh',
    land: '5 Acres',
    water: 'Medium',
    yield: '5000 kg',
    trust: '4.7',
    location: 'Ujjain, MP',
    crop: 'Wheat Farmer',
  },
]

export default function FarmerProfilePage() {
  const router = useRouter()
  const params = useParams()
  const { t } = useLanguage()

  const farmer = farmers.find(
    (item) => item.id.toString() === params.id
  )

  if (!farmer) {
    return (
      <div className="min-h-screen bg-[#F5F0E6] p-10">
        <p className="text-gray-700">
          {t('farmerProfile.notFound')}
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F0E6] p-6">
      <div className="mx-auto max-w-4xl">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-green-700 transition-colors hover:text-green-800"
        >
          <ArrowLeft size={20} />

          {t('farmerProfile.back')}
        </button>

        {/* Farmer Profile Card */}
        <div className="rounded-2xl bg-white p-8 shadow">

          {/* Header */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {farmer.name}
              </h1>

              <p className="mt-1 text-gray-500">
                {farmer.crop}
              </p>
            </div>

            <div className="w-fit rounded-full bg-green-100 px-4 py-2 font-bold text-green-700">
              {t('farmerProfile.verifiedFarmer')}
            </div>

          </div>

          {/* Farmer Details */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="flex items-center gap-3 text-gray-700">
              <Tractor className="text-green-700" />

              <p>
                <span className="font-semibold">
                  {t('farmerProfile.land')}:
                </span>{' '}
                {farmer.land}
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Droplets className="text-green-700" />

              <p>
                <span className="font-semibold">
                  {t('farmerProfile.water')}:
                </span>{' '}
                {farmer.water}
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Sprout className="text-green-700" />

              <p>
                <span className="font-semibold">
                  {t('farmerProfile.expectedYield')}:
                </span>{' '}
                {farmer.yield}
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Star className="text-green-700" />

              <p>
                <span className="font-semibold">
                  {t('farmerProfile.trustScore')}:
                </span>{' '}
                {farmer.trust}
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-green-700" />

              <p>
                {farmer.location}
              </p>
            </div>

          </div>

          {/* Send Requirement Request */}
          <button
            onClick={() =>
              router.push(
                `/buyer/request?farmer=${farmer.id}`
              )
            }
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 py-3 text-white transition-colors hover:bg-green-800"
          >
            <CheckCircle size={18} />

            {t('farmerProfile.sendRequirementRequest')}
          </button>

        </div>

      </div>
    </div>
  )
}