'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FarmerSidebar } from '@/components/FarmerSidebar' 
// 🌐 Global Navbar component import kiya
import { Navbar } from '@/components/navbar' 
import {
  FileText,
  ArrowRight,
  Clock,
  CheckCircle,
} from 'lucide-react'

// Type definitions
type ContractStatus = 'Active' | 'Pending' | 'Fulfilled'
type FilterTab = 'All' | 'Active' | 'Pending' | 'Archived'

interface Contract {
  id: string
  buyerPartner: string
  crop: string
  quantity: string
  pricePerKg: number
  status: ContractStatus
  daysLeft?: number
}

// Mock data
const mockContracts: Contract[] = [
  {
    id: 'CNT-2024-001',
    buyerPartner: 'Premium Grains Ltd',
    crop: 'Basmati Rice',
    quantity: '2000 kg',
    pricePerKg: 45,
    status: 'Active',
    daysLeft: 30,
  },
  {
    id: 'CNT-2024-002',
    buyerPartner: 'Organic Exports Co',
    crop: 'Millet',
    quantity: '1500 kg',
    pricePerKg: 28,
    status: 'Pending',
    daysLeft: 5,
  },
  {
    id: 'CNT-2024-003',
    buyerPartner: 'National Wholesale',
    crop: 'Wheat',
    quantity: '5000 kg',
    pricePerKg: 22,
    status: 'Active',
    daysLeft: 15,
  },
  {
    id: 'CNT-2024-004',
    buyerPartner: 'Urban Fresh Stores',
    crop: 'Chickpea',
    quantity: '800 kg',
    pricePerKg: 52,
    status: 'Fulfilled',
    daysLeft: 0,
  },
  {
    id: 'CNT-2024-005',
    buyerPartner: 'Export Traders Inc',
    crop: 'Soybean',
    quantity: '3000 kg',
    pricePerKg: 38,
    status: 'Active',
    daysLeft: 45,
  },
]

// Summary cards component
const SummaryCard = ({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: number | string
  color: string
}) => (
  <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
    <div className={`rounded-lg ${color} p-3`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div className="flex flex-col">
      <p className="text-sm font-medium text-gray-600">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
)

// Status badge component
const StatusBadge = ({ status }: { status: ContractStatus }) => {
  const statusConfig = {
    Active: {
      bg: 'bg-[#2E7D32]',
      text: 'text-white',
      label: 'Active',
    },
    Pending: {
      bg: 'bg-amber-500',
      text: 'text-white',
      label: 'Pending',
    },
    Fulfilled: {
      bg: 'bg-blue-500',
      text: 'text-white',
      label: 'Fulfilled',
    },
  }

  const config = statusConfig[status]

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  )
}

// Company logo placeholder
const CompanyLogoPlaceholder = ({ name }: { name: string }) => {
  const initials = name
    .split(' ')
    .map((word) => word)
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F0E6] font-bold text-[#2E7D32]">
      {initials}
    </div>
  )
}

// Table row component
const ContractRow = ({ contract }: { contract: Contract }) => {
  const router = useRouter();

  return (  
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
        {contract.id}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <CompanyLogoPlaceholder name={contract.buyerPartner} />
          <span className="text-sm text-gray-900">{contract.buyerPartner}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-700">
        <div>
          <p className="font-medium">{contract.crop}</p>
          <p className="text-xs text-gray-500">{contract.quantity}</p>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-900">
        ₹{contract.pricePerKg}/kg
      </td>
      <td className="px-6 py-4">
        <StatusBadge status={contract.status} />
      </td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={() => router.push('/farmer/contracts/detail')}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#2E7D32] hover:bg-[#F5F0E6] transition-colors"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </button>
      </td>
    </tr>
  )
}

// Main dashboard component
export default function ContractsDashboard() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All')
  const filterTabs: FilterTab[] = ['All', 'Active', 'Pending', 'Archived']

  const filteredContracts = mockContracts.filter((contract) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Active') return contract.status === 'Active'
    if (activeFilter === 'Pending') return contract.status === 'Pending'
    if (activeFilter === 'Archived') return contract.status === 'Fulfilled'
    return true
  })

  const totalActive = mockContracts.filter((c) => c.status === 'Active').length
  const totalPending = mockContracts.filter((c) => c.status === 'Pending').length
  const totalCompleted = mockContracts.filter((c) => c.status === 'Fulfilled').length

  return (
    // 🟢 FIXED: Parent ko 'flex-col' kiya taaki global Navbar upar block rahe aur uske niche sidebar-content side-by-side aayein
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* 🌐 Global Header View Wrapper Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* 🧭 Sidebar remains cleanly linked */}
        <FarmerSidebar />

        {/* Main content grid view parameters */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                My Contracts & Agreements
              </h1>
              <p className="mt-2 text-gray-600">
                Manage your agricultural contracts and agreements
              </p>
            </div>

            {/* Summary Bar */}
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <SummaryCard
                icon={FileText}
                label="Total Active Contracts"
                value={totalActive}
                color="bg-[#2E7D32]"
              />
              <SummaryCard
                icon={Clock}
                label="Pending Signatures"
                value={totalPending}
                color="bg-amber-500"
              />
              <SummaryCard
                icon={CheckCircle}
                label="Completed Settlements"
                value={totalCompleted}
                color="bg-blue-500"
              />
            </div>

            {/* Filter Tabs */}
            <div className="mb-6 flex gap-3 border-b border-gray-200">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors ${
                    activeFilter === tab
                      ? 'border-b-2 border-[#2E7D32] text-[#2E7D32]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Contracts Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Contract ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Buyer Partner</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Crop & Quantity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price Locked</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContracts.map((contract) => (
                    <ContractRow key={contract.id} contract={contract} />
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
