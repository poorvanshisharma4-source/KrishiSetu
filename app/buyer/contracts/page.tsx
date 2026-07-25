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

const getStatusLabel = (status?: string) => {
  switch (status) {
    case 'pending_signature':
    case 'awaiting_signature':
    case 'pending':
      return 'Awaiting Farmer Sign'
    case 'active':
      return 'Active & Growing'
    case 'completed':
      return 'Delivered'
    case 'cancelled':
      return 'Cancelled'
    default:
      return status || 'Pending'
  }
}

export default function MyContractsScreen() {
  const router = useRouter()
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
        setError(err?.message || 'Unable to load contracts.')
      } finally {
        setLoading(false)
      }
    }

    fetchContracts()
  }, [])

  const filteredContracts = useMemo(() => {
    return contracts.filter((contract) => {
      const farmerName = contract.farmer?.name ?? ''
      const cropType = contract.requirement?.cropName ?? ''
      const matchesSearch =
        farmerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cropType.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'active' && contract.status === 'active') ||
        (statusFilter === 'pending' &&
          ['pending_signature', 'awaiting_signature', 'pending'].includes(
            contract.status || ''
          )) ||
        (statusFilter === 'completed' && contract.status === 'completed') ||
        (statusFilter === 'cancelled' && contract.status === 'cancelled')

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
    <div className="min-h-screen" style={{ backgroundColor: '#F5F0E6' }}>
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
                Back to Dashboard
              </button>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Procurement Contracts
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
                placeholder="Search by farmer name, contract ID, or crop type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>

            {/* Status Filter Dropdown */}
            <div className="flex items-center gap-3 md:w-auto">
              <SlidersHorizontal size={20} className="text-gray-600" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending Farmer Signature</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
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
              <p className="text-gray-600">Loading contracts...</p>
            </div>
          ) : filteredContracts.length > 0 ? (
            filteredContracts.map((contract) => {
              const contractId = contract._id
              const farmerName = contract.farmer?.name ?? 'Farmer'
              const region = contract.requirement?.location ?? 'Unknown Location'
              const cropType = contract.requirement?.cropName ?? 'Crop'
              const lockedVolume = `${contract.quantity ?? 0} ${contract.requirement?.unit ?? 'kg'}`
              const pricePerKg = `₹${(contract.agreedPrice ?? 0).toLocaleString()}`
              const totalSettlementValue = `₹${(
                (contract.agreedPrice ?? 0) * (contract.quantity ?? 0)
              ).toLocaleString()}`

              return (
                <div
                  key={contractId}
                  className="rounded-lg bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
                >
                  {/* Top Row: ID, Status Badge */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <FileText size={20} className="text-gray-400" />
                      <span className="text-sm font-semibold text-gray-600">
                        {contractId}
                      </span>
                    </div>
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeStyles(
                        contract.status ?? ''
                      )}`}
                    >
                      {getStatusLabel(contract.status)}
                    </span>
                  </div>

                  {/* Middle Section: Farmer & Crop Details */}
                  <div className="mb-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium uppercase text-gray-500">
                        Farmer Partner
                      </p>
                      <p className="mt-1 text-base font-semibold text-gray-900">
                        {farmerName}
                      </p>
                      <p className="text-sm text-gray-600">{region}</p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase text-gray-500">
                        Crop Type & Volume
                      </p>
                      <p className="mt-1 text-base font-semibold text-gray-900">
                        {cropType}
                      </p>
                      <p className="text-sm text-gray-600">
                        Locked: {lockedVolume}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-4 grid gap-4 md:grid-cols-3">
                      <div>
                        <p className="text-xs font-medium uppercase text-gray-500">
                          Price per kg
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
                          Total Settlement Value
                        </p>
                        <p className="mt-1 text-lg font-bold text-gray-900">
                          {totalSettlementValue}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase text-gray-500">
                          Status
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          {getStatusLabel(contract.status)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-end justify-start md:justify-end">
                      <button
                        onClick={() =>
                          router.push(`/buyer/contracts/${contractId}`)
                        }
                        className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200"
                        style={{
                          color: '#2E7D32',
                          border: '1.5px solid #2E7D32',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#F1F5F2'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                        }}
                      >
                        <FileText size={16} />
                        Manage Contract
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
              <p className="text-gray-600">No contracts match your filters.</p>
              <p className="mt-2 text-sm text-gray-500">
                Try adjusting your search criteria or status filter.
              </p>
            </div>
          )}
        </div>

        {/* Results Counter */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Showing {filteredContracts.length} of {contracts.length} contracts
        </div>
      </div>
    </div>
  )
}