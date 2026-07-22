'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  Search,
  MapPin,
  Scale,
  ShoppingBag,
  CheckCircle,
  Building2,
  Sliders,
  X,
} from 'lucide-react'
import api from '@/lib/api'

interface RequirementCard {
  id: string
  company: string
  verified: boolean
  cropNeeded: string
  quantity: string
  qualityGrade: string
  basePrice: string
  currency: string
  location: string
  deliveryDate: string
  description?: string
}

const mapRequirement = (item: any): RequirementCard => ({
  id: item._id || item.id || String(Math.random()),
  company: item.buyer || 'Buyer Request',
  verified: true,
  cropNeeded: item.cropName || 'Unknown Crop',
  quantity: `${item.quantity ?? 0} ${item.unit || 'kg'}`,
  qualityGrade: item.description ? item.description : 'Standard',
  basePrice: `₹${item.expectedPrice ?? 0}`,
  currency: 'INR',
  location: item.location || 'Unknown',
  deliveryDate: item.requiredBy
    ? new Date(item.requiredBy).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : 'N/A',
  description: item.description,
})

interface FilterState {
  minPrice: string
  locationRadius: string
}

export default function BuyerMarketplace() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filters, setFilters] = useState<FilterState>({
    minPrice: '',
    locationRadius: '',
  })
  const [showFilters, setShowFilters] = useState(false)
  const [requirements, setRequirements] = useState<RequirementCard[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const categories = ['all', 'Vegetables', 'Grains', 'Fruits', 'Pulses']

  useEffect(() => {
    let isMounted = true

    const fetchRequirements = async () => {
      try {
        setLoading(true)
        const response = await api.get('/requirements')
        const list = response?.data ?? []

        if (isMounted) {
          setRequirements(
            Array.isArray(list)
              ? list.map(mapRequirement)
              : []
          )
          setError(null)
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'Failed to load requirements.')
          setRequirements([])
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
  }, [])

  const filteredRequirements = useMemo(() => {
    return requirements.filter((req) => {
      const matchesSearch =
        req.cropNeeded.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.company.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === 'all' ||
        req.cropNeeded.toLowerCase().includes(selectedCategory.toLowerCase())

      return matchesSearch && matchesCategory
    })
  }, [requirements, searchQuery, selectedCategory])

  const handleSendProposal = (companyName: string) => {
    alert(`Proposal sent to ${companyName}! You will be contacted shortly.`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="border-b border-green-100 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-8 w-8 text-green-700" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Buyer Requirements Marketplace
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Browse and respond to bulk crop purchase requests from verified buyers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by crop name or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-green-200 bg-white py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
            />
          </div>

          {/* Category Filter Tabs and Advanced Filters */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-green-700 text-white shadow-md'
                      : 'border border-green-200 bg-white text-gray-700 hover:border-green-400'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 rounded-lg border border-green-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-green-50"
            >
              <Sliders className="h-4 w-4" />
              Filters
            </button>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Advanced Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Minimum Price Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Minimum Price (₹/Quintal)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 1500"
                    value={filters.minPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, minPrice: e.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-green-200 bg-white px-4 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                  />
                </div>

                {/* Location Radius Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location Radius (km)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 50"
                    value={filters.locationRadius}
                    onChange={(e) =>
                      setFilters({ ...filters, locationRadius: e.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-green-200 bg-white px-4 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                  />
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() =>
                    setFilters({ minPrice: '', locationRadius: '' })
                  }
                  className="flex-1 rounded-lg border border-green-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-6 text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-900">{filteredRequirements.length}</span> requirement
          {filteredRequirements.length !== 1 ? 's' : ''}
        </div>

        {/* Requirements Grid */}
        {filteredRequirements.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredRequirements.map((req) => (
              <div
                key={req.id}
                className="flex flex-col rounded-lg border border-green-100 bg-white shadow-sm transition-all hover:border-green-300 hover:shadow-md"
              >
                {/* Card Header */}
                <div className="border-b border-green-50 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 flex-shrink-0 text-green-700" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {req.company}
                        </p>
                        <p className="text-xs text-gray-600">
                          Verified buyer
                        </p>
                      </div>
                    </div>
                    {req.verified && (
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 space-y-4 p-4">
                  {/* Crop Needed */}
                  <div>
                    <p className="text-sm text-gray-600">Required Crop</p>
                    <p className="mt-1 text-lg font-bold text-gray-900">
                      {req.quantity} of {req.cropNeeded}
                    </p>
                  </div>

                  {/* Description */}
                  {req.description && (
                    <p className="text-sm text-gray-600">{req.description}</p>
                  )}

                  {/* Specifications Grid */}
                  <div className="space-y-3">
                    {/* Quality Grade */}
                    <div className="flex items-start gap-3">
                      <Scale className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="text-xs font-medium text-gray-600 uppercase">
                          Quality Grade
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {req.qualityGrade}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-start gap-3">
                      <ShoppingBag className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="text-xs font-medium text-gray-600 uppercase">
                          Base Price / Quintal
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {req.basePrice}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="text-xs font-medium text-gray-600 uppercase">
                          Delivery Location
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {req.location}
                        </p>
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-4 w-4 flex-shrink-0 rounded bg-green-600" />
                      <div>
                        <p className="text-xs font-medium text-gray-600 uppercase">
                          Delivery Deadline
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {req.deliveryDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="border-t border-green-50 p-4">
                  <button
                    onClick={() => handleSendProposal(req.company)}
                    className="w-full rounded-lg bg-green-700 px-4 py-3 font-semibold text-white transition-all hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                  >
                    Send Supply Proposal
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-green-100 bg-green-50 p-12 text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-green-300" />
            <p className="mt-4 text-lg font-medium text-gray-900">
              No requirements found
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Try adjusting your search or filters to find more opportunities
            </p>
          </div>
        )}
      </div>
    </div>
  )
}