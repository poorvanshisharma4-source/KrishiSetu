<<<<<<< HEAD
'use client'

import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Badge,
  Building2,
  FileText,
  MapPin,
  TrendingUp,
  Wallet,
  Leaf,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CorporateBuyerProfile() {
  const router = useRouter()

  // Mock data for demonstration
  const buyerData = {
    companyName: 'GreenHarvest Solutions Ltd.',
    legalName: 'GreenHarvest Solutions Limited Liability Company',
    tradeNumber: 'TL-2024-GH-512',
    gstin: '27AAVCT1234R1Z0',
    address: '456 Commerce Park, Bangalore, Karnataka 560034, India',
    sourcedVolume: '2,450 MT',
    activeContracts: 12,
    trustScore: 92,
    cropCategories: ['Cereals', 'Vegetables', 'Spices', 'Pulses'],
    qualityGrade: 'Grade A',
    warehouse: 'Bangalore Hub - Cold Storage Facility',
    bankName: 'State Bank of India',
    accountNumber: '****3847',
    escrowBalance: '₹12,45,000',
    paymentTerms: '45-day Net',
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F0E6' }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: '#2E7D32',
          backgroundColor: '#F5F0E6',
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
            Buyer Portal
          </h1>
          <Button
            onClick={() => router.push('/buyer/dashboard')}
            variant="outline"
            className="flex items-center gap-2"
            style={{ borderColor: '#2E7D32', color: '#2E7D32' }}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Dashboard</span>
            <span className="sm:hidden">Back</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Company Profile Header */}
        <div
          className="mb-8 rounded-lg border border-gray-200 p-6 sm:p-8"
          style={{ backgroundColor: 'white' }}
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {/* Company Avatar */}
              <div
                className="flex h-20 w-20 items-center justify-center rounded-lg"
                style={{ backgroundColor: '#E8F5E9' }}
              >
                <Building2 className="h-10 w-10" style={{ color: '#2E7D32' }} />
              </div>
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold sm:text-3xl"
                  style={{ color: '#2E7D32' }}
                >
                  {buyerData.companyName}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <Badge
                    className="flex items-center gap-1 border border-[#2E7D32] text-[#2E7D32] bg-[#F1F8F6]"
                    
                    style={{
                      borderColor: '#2E7D32',
                      color: '#2E7D32',
                      backgroundColor: '#F1F8F6',
                    }}
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    Verified Corporate
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Procurement Stats */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg p-4" style={{ backgroundColor: '#F1F8F6' }}>
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: '#2E7D32' }}
              >
                Total Sourced Volume
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {buyerData.sourcedVolume}
              </p>
            </div>
            <div className="rounded-lg p-4" style={{ backgroundColor: '#F1F8F6' }}>
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: '#2E7D32' }}
              >
                Active Contracts
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {buyerData.activeContracts}
              </p>
            </div>
            <div className="rounded-lg p-4" style={{ backgroundColor: '#F1F8F6' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: '#2E7D32' }}
                  >
                    Trust Score
                  </p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {buyerData.trustScore}%
                  </p>
                </div>
                <TrendingUp
                  className="h-6 w-6"
                  style={{ color: '#2E7D32' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Information Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Company Information Card */}
          <div
            className="rounded-lg border border-gray-200 p-6"
            style={{ backgroundColor: 'white' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <FileText className="h-5 w-5" style={{ color: '#2E7D32' }} />
              <h3 className="text-xl font-bold text-gray-900">
                Company Information
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Legal Business Name
                </p>
                <p className="mt-1 text-gray-900">{buyerData.legalName}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Trade License Number
                </p>
                <p className="mt-1 font-mono text-gray-900">
                  {buyerData.tradeNumber}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  GSTIN / Tax ID
                </p>
                <p className="mt-1 font-mono text-gray-900">
                  {buyerData.gstin}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Headquarters Address
                </p>
                <div className="mt-1 flex gap-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    style={{ color: '#2E7D32' }}
                  />
                  <p className="text-gray-900">{buyerData.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Procurement Preferences Card */}
          <div
            className="rounded-lg border border-gray-200 p-6"
            style={{ backgroundColor: 'white' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <Leaf className="h-5 w-5" style={{ color: '#2E7D32' }} />
              <h3 className="text-xl font-bold text-gray-900">
                Procurement Preferences
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Target Crop Categories
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {buyerData.cropCategories.map((category) => (
                    <Badge
                      key={category}
                      style={{
                        backgroundColor: '#E8F5E9',
                        color: '#2E7D32',
                        border: `1px solid #2E7D32`,
                      }}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Preferred Quality Grade
                </p>
                <div
                  className="mt-2 inline-block rounded-full px-4 py-2"
                  style={{ backgroundColor: '#E8F5E9', color: '#2E7D32' }}
                >
                  <span className="font-semibold">{buyerData.qualityGrade}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Default Warehouse Location
                </p>
                <p className="mt-1 text-gray-900">{buyerData.warehouse}</p>
              </div>
            </div>
          </div>

          {/* Billing & Settlement Card */}
          <div
            className="rounded-lg border border-gray-200 p-6 sm:col-span-2"
            style={{ backgroundColor: 'white' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <Wallet className="h-5 w-5" style={{ color: '#2E7D32' }} />
              <h3 className="text-xl font-bold text-gray-900">
                Billing & Settlement
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm font-semibold text-gray-600">Bank Name</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {buyerData.bankName}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Account Number
                </p>
                <p className="mt-2 font-mono text-lg font-semibold text-gray-900">
                  {buyerData.accountNumber}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Escrow/Wallet Balance
                </p>
                <p
                  className="mt-2 text-lg font-semibold"
                  style={{ color: '#2E7D32' }}
                >
                  {buyerData.escrowBalance}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Contract Payment Settings
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {buyerData.paymentTerms}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            style={{ borderColor: '#2E7D32', color: '#2E7D32' }}
          >
            Edit Profile
          </Button>
          <Button
            className="w-full sm:w-auto"
            style={{ backgroundColor: '#2E7D32', color: 'white' }}
          >
            Update Settings
          </Button>
        </div>
      </main>
    </div>
  )
=======
'use client'

import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Badge,
  Building2,
  FileText,
  MapPin,
  TrendingUp,
  Wallet,
  Leaf,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CorporateBuyerProfile() {
  const router = useRouter()

  // Mock data for demonstration
  const buyerData = {
    companyName: 'GreenHarvest Solutions Ltd.',
    legalName: 'GreenHarvest Solutions Limited Liability Company',
    tradeNumber: 'TL-2024-GH-512',
    gstin: '27AAVCT1234R1Z0',
    address: '456 Commerce Park, Bangalore, Karnataka 560034, India',
    sourcedVolume: '2,450 MT',
    activeContracts: 12,
    trustScore: 92,
    cropCategories: ['Cereals', 'Vegetables', 'Spices', 'Pulses'],
    qualityGrade: 'Grade A',
    warehouse: 'Bangalore Hub - Cold Storage Facility',
    bankName: 'State Bank of India',
    accountNumber: '****3847',
    escrowBalance: '₹12,45,000',
    paymentTerms: '45-day Net',
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F0E6' }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: '#2E7D32',
          backgroundColor: '#F5F0E6',
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
            Buyer Portal
          </h1>
          <Button
            onClick={() => router.push('/buyer/dashboard')}
            variant="outline"
            className="flex items-center gap-2"
            style={{ borderColor: '#2E7D32', color: '#2E7D32' }}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Dashboard</span>
            <span className="sm:hidden">Back</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Company Profile Header */}
        <div
          className="mb-8 rounded-lg border border-gray-200 p-6 sm:p-8"
          style={{ backgroundColor: 'white' }}
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {/* Company Avatar */}
              <div
                className="flex h-20 w-20 items-center justify-center rounded-lg"
                style={{ backgroundColor: '#E8F5E9' }}
              >
                <Building2 className="h-10 w-10" style={{ color: '#2E7D32' }} />
              </div>
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold sm:text-3xl"
                  style={{ color: '#2E7D32' }}
                >
                  {buyerData.companyName}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <Badge
                    className="flex items-center gap-1 border border-[#2E7D32] text-[#2E7D32] bg-[#F1F8F6]"
                    
                    style={{
                      borderColor: '#2E7D32',
                      color: '#2E7D32',
                      backgroundColor: '#F1F8F6',
                    }}
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    Verified Corporate
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Procurement Stats */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg p-4" style={{ backgroundColor: '#F1F8F6' }}>
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: '#2E7D32' }}
              >
                Total Sourced Volume
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {buyerData.sourcedVolume}
              </p>
            </div>
            <div className="rounded-lg p-4" style={{ backgroundColor: '#F1F8F6' }}>
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: '#2E7D32' }}
              >
                Active Contracts
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {buyerData.activeContracts}
              </p>
            </div>
            <div className="rounded-lg p-4" style={{ backgroundColor: '#F1F8F6' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: '#2E7D32' }}
                  >
                    Trust Score
                  </p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {buyerData.trustScore}%
                  </p>
                </div>
                <TrendingUp
                  className="h-6 w-6"
                  style={{ color: '#2E7D32' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Information Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Company Information Card */}
          <div
            className="rounded-lg border border-gray-200 p-6"
            style={{ backgroundColor: 'white' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <FileText className="h-5 w-5" style={{ color: '#2E7D32' }} />
              <h3 className="text-xl font-bold text-gray-900">
                Company Information
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Legal Business Name
                </p>
                <p className="mt-1 text-gray-900">{buyerData.legalName}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Trade License Number
                </p>
                <p className="mt-1 font-mono text-gray-900">
                  {buyerData.tradeNumber}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  GSTIN / Tax ID
                </p>
                <p className="mt-1 font-mono text-gray-900">
                  {buyerData.gstin}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Headquarters Address
                </p>
                <div className="mt-1 flex gap-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    style={{ color: '#2E7D32' }}
                  />
                  <p className="text-gray-900">{buyerData.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Procurement Preferences Card */}
          <div
            className="rounded-lg border border-gray-200 p-6"
            style={{ backgroundColor: 'white' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <Leaf className="h-5 w-5" style={{ color: '#2E7D32' }} />
              <h3 className="text-xl font-bold text-gray-900">
                Procurement Preferences
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Target Crop Categories
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {buyerData.cropCategories.map((category) => (
                    <Badge
                      key={category}
                      style={{
                        backgroundColor: '#E8F5E9',
                        color: '#2E7D32',
                        border: `1px solid #2E7D32`,
                      }}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Preferred Quality Grade
                </p>
                <div
                  className="mt-2 inline-block rounded-full px-4 py-2"
                  style={{ backgroundColor: '#E8F5E9', color: '#2E7D32' }}
                >
                  <span className="font-semibold">{buyerData.qualityGrade}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Default Warehouse Location
                </p>
                <p className="mt-1 text-gray-900">{buyerData.warehouse}</p>
              </div>
            </div>
          </div>

          {/* Billing & Settlement Card */}
          <div
            className="rounded-lg border border-gray-200 p-6 sm:col-span-2"
            style={{ backgroundColor: 'white' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <Wallet className="h-5 w-5" style={{ color: '#2E7D32' }} />
              <h3 className="text-xl font-bold text-gray-900">
                Billing & Settlement
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm font-semibold text-gray-600">Bank Name</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {buyerData.bankName}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Account Number
                </p>
                <p className="mt-2 font-mono text-lg font-semibold text-gray-900">
                  {buyerData.accountNumber}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Escrow/Wallet Balance
                </p>
                <p
                  className="mt-2 text-lg font-semibold"
                  style={{ color: '#2E7D32' }}
                >
                  {buyerData.escrowBalance}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Contract Payment Settings
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {buyerData.paymentTerms}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            style={{ borderColor: '#2E7D32', color: '#2E7D32' }}
          >
            Edit Profile
          </Button>
          <Button
            className="w-full sm:w-auto"
            style={{ backgroundColor: '#2E7D32', color: 'white' }}
          >
            Update Settings
          </Button>
        </div>
      </main>
    </div>
  )
>>>>>>> 8d282be6528be5fa383e82fa7a58c9ffcd476c18
}