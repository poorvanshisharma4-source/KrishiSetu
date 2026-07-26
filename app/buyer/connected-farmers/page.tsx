'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'
import {
  ArrowLeft,
  MapPin,
  Sprout,
  Star,
  Tractor,
  MessageSquare,
  FileText,
} from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

interface ConnectedFarmer {
  id: string
  name: string
  crop: string
  land: string
  location: string
  trust: string
  contractId: string
}

export default function ConnectedFarmersPage() {
  const router = useRouter()
  const { language } = useLanguage()

  const [farmers, setFarmers] = useState<ConnectedFarmer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const isHindi = language === 'hi'

  const t = (key: string) => {
    const translations = {
      backToDashboard: isHindi
        ? 'डैशबोर्ड पर वापस जाएं'
        : 'Back to Dashboard',

      title: isHindi
        ? 'जुड़े हुए किसान'
        : 'Connected Farmers',

      subtitle: isHindi
        ? 'KrishiSetu अनुबंधों के माध्यम से जुड़े किसानों का प्रबंधन करें।'
        : 'Manage farmers connected through KrishiSetu contracts.',

      verified: isHindi
        ? 'सत्यापित'
        : 'Verified',

      trustScore: isHindi
        ? 'विश्वास स्कोर'
        : 'Trust Score',

      contract: isHindi
        ? 'अनुबंध'
        : 'Contract',

      message: isHindi
        ? 'संदेश'
        : 'Message',

      loading: isHindi
        ? 'जुड़े हुए किसानों को लोड किया जा रहा है...'
        : 'Loading connected farmers...',

      error: isHindi
        ? 'जुड़े हुए किसानों को लोड नहीं किया जा सका।'
        : 'Unable to load connected farmers.',

      noFarmers: isHindi
        ? 'अभी तक कोई जुड़े हुए किसान नहीं मिले।'
        : 'No connected farmers found yet.',

      farmer: isHindi
        ? 'किसान'
        : 'Farmer',

      unknown: isHindi
        ? 'अज्ञात'
        : 'Unknown',

      unknownLocation: isHindi
        ? 'अज्ञात स्थान'
        : 'Unknown Location',
    }

    return translations[key as keyof typeof translations]
  }

  useEffect(() => {
    let isMounted = true

    const fetchConnectedFarmers = async () => {
      try {
        const response = await api.get('/contracts')

        const rawData = response?.data ?? response ?? []
        const contracts = Array.isArray(rawData)
          ? rawData
          : []

        const farmerMap = new Map<string, ConnectedFarmer>()

        contracts.forEach((contract: any) => {
          const farmer = contract.farmer
          const requirement = contract.requirement

          if (farmer && farmer._id) {
            farmerMap.set(
              farmer._id.toString(),
              {
                id: farmer._id.toString(),

                name:
                  farmer.name ??
                  t('farmer'),

                crop:
                  requirement?.cropName
                    ? `${requirement.cropName} ${
                        isHindi ? 'किसान' : 'Farmer'
                      }`
                    : t('farmer'),

                land:
                  requirement?.quantity
                    ? `${requirement.quantity} ${
                        requirement.unit ?? 'kg'
                      }`
                    : t('unknown'),

                location:
                  farmer.location ??
                  requirement?.location ??
                  t('unknownLocation'),

                trust:
                  farmer.trustScore != null
                    ? String(farmer.trustScore)
                    : '4.5',

                contractId:
                  contract._id ?? '',
              }
            )
          }
        })

        if (isMounted) {
          setFarmers(
            Array.from(farmerMap.values())
          )
          setError(null)
        }
      } catch (err: any) {
        console.error(
          'Connected farmers fetch error:',
          err
        )

        if (isMounted) {
          setError(
            err?.message ||
              t('error')
          )

          setFarmers([])
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchConnectedFarmers()

    return () => {
      isMounted = false
    }
  }, [isHindi])

  return (
    <div className="min-h-screen bg-[#F5F0E6] p-6">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-green-700 mb-6"
        >
          <ArrowLeft size={20} />
          {t('backToDashboard')}
        </button>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {t('title')}
          </h1>

          <p className="text-gray-600 mt-1">
            {t('subtitle')}
          </p>
        </div>

        {/* Farmer Cards */}
        {loading ? (
          <div className="bg-white rounded-2xl shadow p-6 text-gray-700">
            {t('loading')}
          </div>
        ) : error ? (
          <div className="bg-white rounded-2xl shadow p-6 text-red-600">
            {error}
          </div>
        ) : farmers.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-6 text-gray-700">
            {t('noFarmers')}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {farmers.map((farmer) => (
              <div
                key={farmer.id}
                className="bg-white rounded-2xl shadow p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {farmer.name}
                  </h2>

                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {t('verified')}
                  </div>
                </div>

                <div className="space-y-3 text-gray-600">
                  <p className="flex gap-2 items-center">
                    <Sprout size={18} />
                    {farmer.crop}
                  </p>

                  <p className="flex gap-2 items-center">
                    <Tractor size={18} />
                    {farmer.land}
                  </p>

                  <p className="flex gap-2 items-center">
                    <MapPin size={18} />
                    {farmer.location}
                  </p>

                  <p className="flex gap-2 items-center">
                    <Star size={18} />
                    {t('trustScore')}: {farmer.trust}
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() =>
                      router.push(
                        `/buyer/contracts/${farmer.contractId}`
                      )
                    }
                    className="flex-1 bg-green-700 text-white py-2 rounded-xl flex items-center justify-center gap-2"
                  >
                    <FileText size={16} />
                    {t('contract')}
                  </button>

                  <button
                    onClick={() =>
                      router.push(
                        `/buyer/messages?farmer=${encodeURIComponent(
                          farmer.name
                        )}`
                      )
                    }
                    className="flex-1 bg-blue-600 text-white py-2 rounded-xl flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} />
                    {t('message')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}