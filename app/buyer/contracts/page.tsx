'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'
import {
  FileText,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

interface ContractItem {
  _id: string
  farmer?: {
    name?: string
  }
  requirement?: {
    cropName?: string
    unit?: string
    location?: string
  }
  agreedPrice?: number
  quantity?: number
  status?: string
}

const getStatusLabel = (
  status: string | undefined,
  t: (key: string) => string
) => {
  switch (status) {
    case 'pending_signature':
    case 'awaiting_signature':
    case 'pending':
      return t('contracts.awaitingFarmerSign')

    case 'active':
      return t('contracts.activeAndGrowing')

    case 'completed':
      return t('contracts.delivered')

    case 'cancelled':
      return t('contracts.cancelled')

    default:
      return status || t('contracts.pending')
  }
}

export default function MyContractsScreen() {
  const router = useRouter()
  const { t } = useLanguage()

  const [contracts, setContracts] = useState<ContractItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await api.get('/contracts')
        const data = response?.data ?? []

        setContracts(Array.isArray(data) ? data : [])
        setError(null)
      } catch (err: any) {
        console.error('Contracts fetch error:', err)

        setError(
          err?.response?.data?.message ||
            err?.message ||
            t('contracts.loadError')
        )
      } finally {
        setLoading(false)
      }
    }

    fetchContracts()
  }, [t])

  const filteredContracts = useMemo(() => {
    return contracts.filter((contract) => {
      const farmerName = contract.farmer?.name ?? ''
      const cropType = contract.requirement?.cropName ?? ''
      const normalizedSearchTerm = searchTerm.toLowerCase()

      const matchesSearch =
        farmerName.toLowerCase().includes(normalizedSearchTerm) ||
        contract._id.toLowerCase().includes(normalizedSearchTerm) ||
        cropType.toLowerCase().includes(normalizedSearchTerm)

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'active' &&
          contract.status === 'active') ||
        (statusFilter === 'pending' &&
          [
            'pending_signature',
            'awaiting_signature',
            'pending',
          ].includes(contract.status || '')) ||
        (statusFilter === 'completed' &&
          contract.status === 'completed') ||
        (statusFilter === 'cancelled' &&
          contract.status === 'cancelled')

      return matchesSearch && matchesStatus
    })
  }, [contracts, searchTerm, statusFilter])

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case 'pending_signature':
      case 'awaiting_signature':
      case 'pending':
        return 'bg-amber-100 text-amber-800 border border-amber-300'

      case 'active':
        return 'bg-green-100 text-green-800 border border-green-300'

      case 'completed':
        return 'bg-blue-100 text-blue-800 border border-blue-300'

      case 'cancelled':
        return 'bg-red-100 text-red-800 border border-red-300'

      default:
        return 'bg-gray-100 text-gray-800 border border-gray-300'
    }
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#F5F0E6' }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="mb-8">

          <div className="mb-6 flex items-center justify-between">

            <div className="flex items-center gap-4">

              <button
                onClick={() => router.push('/buyer/dashboard')}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200"
              >
                <ArrowLeft size={18} />
                {t('contracts.backToDashboard')}
              </button>

              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  {t('contracts.title')}
                </h1>
              </div>

            </div>

            <ShieldCheck
              className="text-gray-400"
              size={28}
              strokeWidth={1.5}
            />

          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-3">

            {/* Search Bar */}
            <div className="relative flex-1">

              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />

              <input
                type="text"
                placeholder={t('contracts.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              />

            </div>

            {/* Status Filter Dropdown */}
            <div className="flex items-center gap-3 md:w-auto">

              <SlidersHorizontal
                size={20}
                className="text-gray-600"
              />

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                <option value="all">
                  {t('contracts.allStatus')}
                </option>

                <option value="active">
                  {t('contracts.active')}
                </option>

                <option value="pending">
                  {t('contracts.pendingFarmerSignature')}
                </option>

                <option value="completed">
                  {t('contracts.completed')}
                </option>

                <option value="cancelled">
                  {t('contracts.cancelled')}
                </option>
              </select>

            </div>

          </div>

        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 rounded-lg bg-red-100 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Contracts List */}
        <div className="space-y-4">

          {loading ? (
            <div className="rounded-lg bg-white py-12 text-center shadow-sm">
              <p className="text-gray-600">
                {t('contracts.loading')}
              </p>
            </div>
          ) : filteredContracts.length > 0 ? (
            filteredContracts.map((contract) => {

              const contractId = contract._id

              const farmerName =
                contract.farmer?.name ||
                t('contracts.farmer')

              const region =
                contract.requirement?.location ||
                t('contracts.unknownLocation')

              const cropType =
                contract.requirement?.cropName ||
                t('contracts.crop')

              const lockedVolume = `${contract.quantity ?? 0} ${
                contract.requirement?.unit || 'kg'
              }`

              const pricePerKg = `₹${(
                contract.agreedPrice ?? 0
              ).toLocaleString('en-IN')}`

              const totalSettlementValue = `₹${(
                (contract.agreedPrice ?? 0) *
                (contract.quantity ?? 0)
              ).toLocaleString('en-IN')}`

              return (
                <div
                  key={contractId}
                  className="rounded-lg bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
                >

                  {/* Top Row */}
                  <div className="mb-4 flex items-start justify-between">

                    <div className="flex items-center gap-2">

                      <FileText
                        size={20}
                        className="text-gray-400"
                      />

                      <span className="text-sm font-semibold text-gray-600">
                        {contractId}
                      </span>

                    </div>

                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeStyles(
                        contract.status ?? ''
                      )}`}
                    >
                      {getStatusLabel(contract.status, t)}
                    </span>

                  </div>

                  {/* Farmer and Crop Details */}
                  <div className="mb-4 grid gap-4 md:grid-cols-2">

                    <div>

                      <p className="text-xs font-medium uppercase text-gray-500">
                        {t('contracts.farmerPartner')}
                      </p>

                      <p className="mt-1 text-base font-semibold text-gray-900">
                        {farmerName}
                      </p>

                      <p className="text-sm text-gray-600">
                        {region}
                      </p>

                    </div>

                    <div>

                      <p className="text-xs font-medium uppercase text-gray-500">
                        {t('contracts.cropTypeAndVolume')}
                      </p>

                      <p className="mt-1 text-base font-semibold text-gray-900">
                        {cropType}
                      </p>

                      <p className="text-sm text-gray-600">
                        {t('contracts.locked')}: {lockedVolume}
                      </p>

                    </div>

                  </div>

                  <div className="border-t border-gray-200 pt-4">

                    <div className="mb-4 grid gap-4 md:grid-cols-3">

                      <div>

                        <p className="text-xs font-medium uppercase text-gray-500">
                          {t('contracts.pricePerKg')}
                        </p>

                        <p
                          className="mt-1 text-lg font-bold"
                          style={{ color: '#2E7D32' }}
                        >
                          {pricePerKg} / kg
                        </p>

                      </div>

                      <div>

                        <p className="text-xs font-medium uppercase text-gray-500">
                          {t('contracts.totalSettlementValue')}
                        </p>

                        <p className="mt-1 text-lg font-bold text-gray-900">
                          {totalSettlementValue}
                        </p>

                      </div>

                      <div>

                        <p className="text-xs font-medium uppercase text-gray-500">
                          {t('contracts.status')}
                        </p>

                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          {getStatusLabel(contract.status, t)}
                        </p>

                      </div>

                    </div>

                    <div className="flex items-end justify-start md:justify-end">

                      <button
                        onClick={() =>
                          router.push(
                            `/buyer/contracts/${contractId}`
                          )
                        }
                        className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200"
                        style={{
                          color: '#2E7D32',
                          border: '1.5px solid #2E7D32',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            '#F1F5F2'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            'transparent'
                        }}
                      >
                        <FileText size={16} />

                        {t('contracts.manageContract')}

                        <ChevronRight size={16} />
                      </button>

                    </div>

                  </div>

                </div>
              )
            })
          ) : (
            <div className="rounded-lg bg-white py-12 text-center shadow-sm">

              <FileText
                size={40}
                className="mx-auto mb-4 text-gray-300"
                strokeWidth={1}
              />

              <p className="text-gray-600">
                {t('contracts.noMatch')}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {t('contracts.adjustSearch')}
              </p>

            </div>
          )}

        </div>

        {/* Results Counter */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {t('contracts.showing')}{' '}
          {filteredContracts.length}{' '}
          {t('contracts.of')}{' '}
          {contracts.length}{' '}
          {t('contracts.contracts')}
        </div>

      </div>
    </div>
  )
}