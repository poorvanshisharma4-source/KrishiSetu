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
  FileText
} from 'lucide-react'

interface ConnectedFarmer {
  id: string
  name: string
  crop: string
  land: string
  location: string
  trust: string
  contractId: string
}

export default function ConnectedFarmersPage(){
  const router = useRouter()
  const [farmers, setFarmers] = useState<ConnectedFarmer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchConnectedFarmers = async () => {
      try {
        const response = await api.get('/contracts')
        const rawData = response?.data ?? response ?? []
        const contracts = Array.isArray(rawData) ? rawData : []

        const farmerMap = new Map<string, ConnectedFarmer>()

        contracts.forEach((contract: any) => {
          const farmer = contract.farmer
          const requirement = contract.requirement

          if (farmer && farmer._id) {
            farmerMap.set(farmer._id.toString(), {
              id: farmer._id.toString(),
              name: farmer.name ?? 'Farmer',
              crop: requirement?.cropName ? `${requirement.cropName} Farmer` : 'Farmer',
              land: requirement?.quantity ? `${requirement.quantity} ${requirement.unit ?? 'kg'}` : 'Unknown',
              location: farmer.location ?? requirement?.location ?? 'Unknown Location',
              trust: farmer.trustScore != null ? String(farmer.trustScore) : '4.5',
              contractId: contract._id ?? '',
            })
          }
        })

        if (isMounted) {
          setFarmers(Array.from(farmerMap.values()))
          setError(null)
        }
      } catch (err: any) {
        console.error('Connected farmers fetch error:', err)
        if (isMounted) {
          setError(err?.message || 'Unable to load connected farmers.')
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
  }, [])

  return(
    <div className="min-h-screen bg-[#F5F0E6] p-6">

      <div className="max-w-6xl mx-auto">


        {/* Back */}
        <button
          onClick={()=>router.back()}
          className="flex items-center gap-2 text-green-700 mb-6"
        >
          <ArrowLeft size={20}/>
          Back to Dashboard
        </button>



        {/* Header */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">

          <h1 className="text-2xl font-bold text-gray-800">
            Connected Farmers
          </h1>

          <p className="text-gray-600 mt-1">
            Manage farmers connected through KrishiSetu contracts.
          </p>

        </div>



        {/* Farmer Cards */}

        {loading ? (
          <div className="bg-white rounded-2xl shadow p-6 text-gray-700">
            Loading connected farmers...
          </div>
        ) : error ? (
          <div className="bg-white rounded-2xl shadow p-6 text-red-600">
            {error}
          </div>
        ) : farmers.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-6 text-gray-700">
            No connected farmers found yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {farmers.map((farmer)=>(
              <div
                key={farmer.id}
                className="bg-white rounded-2xl shadow p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {farmer.name}
                  </h2>

                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Verified
                  </div>
                </div>

                <div className="space-y-3 text-gray-600">
                  <p className="flex gap-2 items-center">
                    <Sprout size={18}/>
                    {farmer.crop}
                  </p>

                  <p className="flex gap-2 items-center">
                    <Tractor size={18}/>
                    {farmer.land}
                  </p>

                  <p className="flex gap-2 items-center">
                    <MapPin size={18}/>
                    {farmer.location}
                  </p>

                  <p className="flex gap-2 items-center">
                    <Star size={18}/>
                    Trust Score: {farmer.trust}
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={()=>router.push(`/buyer/contracts/${farmer.contractId}`)}
                    className="flex-1 bg-green-700 text-white py-2 rounded-xl flex items-center justify-center gap-2"
                  >
                    <FileText size={16}/>
                    Contract
                  </button>

                  <button
                    onClick={() =>
                      router.push(
                        `/buyer/messages?farmer=${encodeURIComponent(farmer.name)}`
                      )
                    }
                    className="flex-1 bg-blue-600 text-white py-2 rounded-xl flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16}/>
                    Message
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