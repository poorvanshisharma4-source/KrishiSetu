'use client'

import { Button } from '@/components/ui/button'
import {
  TrendingUp,
  Calendar,
  AlertTriangle,
  BarChart3,
  Lightbulb,
  ArrowLeft,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

interface MetricCard {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  icon: React.ReactNode
}

interface PriceData {
  commodity: string
  current: number
  forecasted: number
  change: number
  changePercent: number
}

interface RecommendationCard {
  title: string
  icon: React.ReactNode
  items: string[]
}

export default function BuyerAnalyticsDashboard() {
  const router = useRouter()

  const metrics: MetricCard[] = [
    {
      title: 'Procurement Savings Index',
      value: '₹2.4M',
      change: '+12.5% vs last quarter',
      changeType: 'positive',
      icon: <TrendingUp className="size-6" />,
    },
    {
      title: 'Optimal Sourcing Window',
      value: '3-5 Days',
      change: 'Best window: Rice & Onions',
      changeType: 'neutral',
      icon: <Calendar className="size-6" />,
    },
    {
      title: 'Supply Volatility Alert',
      value: 'High',
      change: 'Tomatoes: +18% volatility',
      changeType: 'negative',
      icon: <AlertTriangle className="size-6" />,
    },
  ]

  const priceForecasts: PriceData[] = [
    {
      commodity: 'Tomatoes',
      current: 45,
      forecasted: 52,
      change: 7,
      changePercent: 15.6,
    },
    {
      commodity: 'Rice',
      current: 120,
      forecasted: 118,
      change: -2,
      changePercent: -1.7,
    },
    {
      commodity: 'Onions',
      current: 30,
      forecasted: 28,
      change: -2,
      changePercent: -6.7,
    },
  ]

  const recommendations: RecommendationCard[] = [
    {
      title: 'Logistics & Sourcing Opportunity',
      icon: <BarChart3 className="size-6" />,
      items: [
        'Bulk purchase Rice within 3-5 days for 12% savings',
        'Consider alternative suppliers for Tomatoes to mitigate volatility',
        'Optimize transportation route to North region suppliers',
      ],
    },
    {
      title: 'Quality & Grade Advisor',
      icon: <Lightbulb className="size-6" />,
      items: [
        'Grade A Tomatoes available at premium margin - recommend for premium buyers',
        'Standard Grade Rice offers best value this quarter',
        'Organic Onions showing premium demand - stock recommended',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#F5F0E6] p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#2E7D32] sm:text-4xl">
            Buyer AI Analytics Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            AI-powered procurement insights and recommendations
          </p>
        </div>
        <Button
          onClick={() => router.push('/buyer/dashboard')}
          variant="outline"
          className="gap-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </Button>
      </div>

      {/* Top Metric Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700">
                {metric.title}
              </h3>
              <div className="rounded-full bg-[#E8F5E9] p-3 text-[#2E7D32]">
                {metric.icon}
              </div>
            </div>
            <div className="mb-3">
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
            </div>
            <p
              className={`text-sm font-medium ${
                metric.changeType === 'positive'
                  ? 'text-green-600'
                  : metric.changeType === 'negative'
                    ? 'text-red-600'
                    : 'text-blue-600'
              }`}
            >
              {metric.change}
            </p>
          </div>
        ))}
      </div>

      {/* AI Price Forecast Card */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-xl font-bold text-gray-900">
          AI Price Forecast
        </h2>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
          {priceForecasts.map((forecast, idx) => (
            <div key={idx} className="rounded-lg border border-gray-200 p-4">
              <h3 className="mb-4 font-semibold text-gray-800">
                {forecast.commodity}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600">Current Price</p>
                  <p className="text-lg font-bold text-gray-900">
                    ₹{forecast.current}/kg
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">AI Forecasted Price</p>
                  <p className="text-lg font-bold text-[#2E7D32]">
                    ₹{forecast.forecasted}/kg
                  </p>
                </div>
                <div className="rounded-full bg-gray-100 p-3 text-center">
                  <p
                    className={`text-sm font-semibold ${
                      forecast.change >= 0
                        ? 'text-red-600'
                        : 'text-green-600'
                    }`}
                  >
                    {forecast.change >= 0 ? '+' : ''}
                    {forecast.changePercent}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendation Cards */}
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-[#E8F5E9] p-3 text-[#2E7D32]">
                {rec.icon}
              </div>
              <h2 className="text-lg font-bold text-gray-900">{rec.title}</h2>
            </div>
            <ul className="space-y-3">
              {rec.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex gap-3 text-gray-700">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#2E7D32]" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}