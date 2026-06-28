<<<<<<< HEAD
'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import {
  FileText,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react'

interface Contract {
  id: string
  farmerName: string
  region: string
  cropType: string
  lockedVolume: string
  pricePerKg: string
  totalSettlementValue: string
  status: 'active' | 'pending_signature' | 'completed' | 'awaiting_signature'
  statusLabel: string
}

const mockContracts: Contract[] = [
  {
    id: 'CON-BUY-7892',
    farmerName: 'Ramesh Kumar',
    region: 'Nashik, MH',
    cropType: 'Organic Tomatoes',
    lockedVolume: '500 kg',
    pricePerKg: '₹28',
    totalSettlementValue: '₹14,000',
    status: 'pending_signature',
    statusLabel: 'Awaiting Farmer Sign',
  },
  {
    id: 'CON-BUY-7891',
    farmerName: 'Priya Sharma',
    region: 'Pune, MH',
    cropType: 'Fresh Spinach',
    lockedVolume: '750 kg',
    pricePerKg: '₹32',
    totalSettlementValue: '₹24,000',
    status: 'active',
    statusLabel: 'Active & Growing',
  },
  {
    id: 'CON-BUY-7890',
    farmerName: 'Vikram Singh',
    region: 'Indore, MP',
    cropType: 'Premium Carrots',
    lockedVolume: '1200 kg',
    pricePerKg: '₹18',
    totalSettlementValue: '₹21,600',
    status: 'completed',
    statusLabel: 'Delivered',
  },
  {
    id: 'CON-BUY-7889',
    farmerName: 'Anjali Desai',
    region: 'Nashik, MH',
    cropType: 'Green Peppers',
    lockedVolume: '300 kg',
    pricePerKg: '₹45',
    totalSettlementValue: '₹13,500',
    status: 'active',
    statusLabel: 'Active & Growing',
  },
  {
    id: 'CON-BUY-7888',
    farmerName: 'Rajesh Patel',
    region: 'Vapi, GJ',
    cropType: 'Organic Onions',
    lockedVolume: '2000 kg',
    pricePerKg: '₹22',
    totalSettlementValue: '₹44,000',
    status: 'awaiting_signature',
    statusLabel: 'Awaiting Farmer Sign',
  },
]

export default function MyContractsScreen() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredContracts = useMemo(() => {
    return mockContracts.filter((contract) => {
      const matchesSearch =
        contract.farmerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.cropType.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'active' && contract.status === 'active') ||
        (statusFilter === 'pending' &&
          (contract.status === 'pending_signature' ||
            contract.status === 'awaiting_signature')) ||
        (statusFilter === 'completed' && contract.status === 'completed')

      return matchesSearch && matchesStatus
    })
  }, [searchTerm, statusFilter])

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case 'pending_signature':
      case 'awaiting_signature':
        return 'bg-amber-100 text-amber-800 border border-amber-300'
      case 'active':
        return 'bg-green-100 text-green-800 border border-green-300'
      case 'completed':
        return 'bg-blue-100 text-blue-800 border border-blue-300'
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
                // ydd rkho idhar se hi button kaam kregi 
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200"
              >
                <ArrowLeft size={18} />
                Back
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
              </select>
            </div>
          </div>
        </div>

        {/* Contracts List */}
        <div className="space-y-4">
          {filteredContracts.length > 0 ? (
            filteredContracts.map((contract) => (
              <div
                key={contract.id}
                className="rounded-lg bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
              >
                {/* Top Row: ID, Status Badge */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <FileText size={20} className="text-gray-400" />
                    <span className="text-sm font-semibold text-gray-600">
                      {contract.id}
                    </span>
                  </div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeStyles(contract.status)}`}
                  >
                    {contract.statusLabel}
                  </span>
                </div>

                {/* Middle Section: Farmer & Crop Details */}
                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  {/* Farmer Info */}
                  <div>
                    <p className="text-xs font-medium uppercase text-gray-500">
                      Farmer Partner
                    </p>
                    <p className="mt-1 text-base font-semibold text-gray-900">
                      {contract.farmerName}
                    </p>
                    <p className="text-sm text-gray-600">{contract.region}</p>
                  </div>

                  {/* Crop Info */}
                  <div>
                    <p className="text-xs font-medium uppercase text-gray-500">
                      Crop Type & Volume
                    </p>
                    <p className="mt-1 text-base font-semibold text-gray-900">
                      {contract.cropType}
                    </p>
                    <p className="text-sm text-gray-600">
                      Locked: {contract.lockedVolume}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Pricing & Action */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="mb-4 grid gap-4 md:grid-cols-3">
                    {/* Price Per KG */}
                    <div>
                      <p className="text-xs font-medium uppercase text-gray-500">
                        Price per kg
                      </p>
                      <p className="mt-1 text-lg font-bold"
                        style={{ color: '#2E7D32' }}
                      >
                        {contract.pricePerKg}/kg
                      </p>
                    </div>

                    {/* Total Settlement */}
                    <div>
                      <p className="text-xs font-medium uppercase text-gray-500">
                        Total Settlement Value
                      </p>
                      <p className="mt-1 text-lg font-bold text-gray-900">
                        {contract.totalSettlementValue}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-end justify-start md:justify-end">
                      <button
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
                        View Legal Terms
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
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
          Showing {filteredContracts.length} of {mockContracts.length} contracts
        </div>
      </div>
    </div>
  )
=======
'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import {
  FileText,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react'

interface Contract {
  id: string
  farmerName: string
  region: string
  cropType: string
  lockedVolume: string
  pricePerKg: string
  totalSettlementValue: string
  status: 'active' | 'pending_signature' | 'completed' | 'awaiting_signature'
  statusLabel: string
}

const mockContracts: Contract[] = [
  {
    id: 'CON-BUY-7892',
    farmerName: 'Ramesh Kumar',
    region: 'Nashik, MH',
    cropType: 'Organic Tomatoes',
    lockedVolume: '500 kg',
    pricePerKg: '₹28',
    totalSettlementValue: '₹14,000',
    status: 'pending_signature',
    statusLabel: 'Awaiting Farmer Sign',
  },
  {
    id: 'CON-BUY-7891',
    farmerName: 'Priya Sharma',
    region: 'Pune, MH',
    cropType: 'Fresh Spinach',
    lockedVolume: '750 kg',
    pricePerKg: '₹32',
    totalSettlementValue: '₹24,000',
    status: 'active',
    statusLabel: 'Active & Growing',
  },
  {
    id: 'CON-BUY-7890',
    farmerName: 'Vikram Singh',
    region: 'Indore, MP',
    cropType: 'Premium Carrots',
    lockedVolume: '1200 kg',
    pricePerKg: '₹18',
    totalSettlementValue: '₹21,600',
    status: 'completed',
    statusLabel: 'Delivered',
  },
  {
    id: 'CON-BUY-7889',
    farmerName: 'Anjali Desai',
    region: 'Nashik, MH',
    cropType: 'Green Peppers',
    lockedVolume: '300 kg',
    pricePerKg: '₹45',
    totalSettlementValue: '₹13,500',
    status: 'active',
    statusLabel: 'Active & Growing',
  },
  {
    id: 'CON-BUY-7888',
    farmerName: 'Rajesh Patel',
    region: 'Vapi, GJ',
    cropType: 'Organic Onions',
    lockedVolume: '2000 kg',
    pricePerKg: '₹22',
    totalSettlementValue: '₹44,000',
    status: 'awaiting_signature',
    statusLabel: 'Awaiting Farmer Sign',
  },
]

export default function MyContractsScreen() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredContracts = useMemo(() => {
    return mockContracts.filter((contract) => {
      const matchesSearch =
        contract.farmerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.cropType.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'active' && contract.status === 'active') ||
        (statusFilter === 'pending' &&
          (contract.status === 'pending_signature' ||
            contract.status === 'awaiting_signature')) ||
        (statusFilter === 'completed' && contract.status === 'completed')

      return matchesSearch && matchesStatus
    })
  }, [searchTerm, statusFilter])

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case 'pending_signature':
      case 'awaiting_signature':
        return 'bg-amber-100 text-amber-800 border border-amber-300'
      case 'active':
        return 'bg-green-100 text-green-800 border border-green-300'
      case 'completed':
        return 'bg-blue-100 text-blue-800 border border-blue-300'
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
                // ydd rkho idhar se hi button kaam kregi 
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200"
              >
                <ArrowLeft size={18} />
                Back
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
              </select>
            </div>
          </div>
        </div>

        {/* Contracts List */}
        <div className="space-y-4">
          {filteredContracts.length > 0 ? (
            filteredContracts.map((contract) => (
              <div
                key={contract.id}
                className="rounded-lg bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
              >
                {/* Top Row: ID, Status Badge */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <FileText size={20} className="text-gray-400" />
                    <span className="text-sm font-semibold text-gray-600">
                      {contract.id}
                    </span>
                  </div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeStyles(contract.status)}`}
                  >
                    {contract.statusLabel}
                  </span>
                </div>

                {/* Middle Section: Farmer & Crop Details */}
                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  {/* Farmer Info */}
                  <div>
                    <p className="text-xs font-medium uppercase text-gray-500">
                      Farmer Partner
                    </p>
                    <p className="mt-1 text-base font-semibold text-gray-900">
                      {contract.farmerName}
                    </p>
                    <p className="text-sm text-gray-600">{contract.region}</p>
                  </div>

                  {/* Crop Info */}
                  <div>
                    <p className="text-xs font-medium uppercase text-gray-500">
                      Crop Type & Volume
                    </p>
                    <p className="mt-1 text-base font-semibold text-gray-900">
                      {contract.cropType}
                    </p>
                    <p className="text-sm text-gray-600">
                      Locked: {contract.lockedVolume}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Pricing & Action */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="mb-4 grid gap-4 md:grid-cols-3">
                    {/* Price Per KG */}
                    <div>
                      <p className="text-xs font-medium uppercase text-gray-500">
                        Price per kg
                      </p>
                      <p className="mt-1 text-lg font-bold"
                        style={{ color: '#2E7D32' }}
                      >
                        {contract.pricePerKg}/kg
                      </p>
                    </div>

                    {/* Total Settlement */}
                    <div>
                      <p className="text-xs font-medium uppercase text-gray-500">
                        Total Settlement Value
                      </p>
                      <p className="mt-1 text-lg font-bold text-gray-900">
                        {contract.totalSettlementValue}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-end justify-start md:justify-end">
                      <button
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
                        View Legal Terms
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
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
          Showing {filteredContracts.length} of {mockContracts.length} contracts
        </div>
      </div>
    </div>
  )
>>>>>>> 8d282be6528be5fa383e82fa7a58c9ffcd476c18
}