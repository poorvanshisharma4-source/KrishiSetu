'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'
import {
  ArrowLeft,
  TrendingUp,
  Calendar,
  AlertTriangle,
  BarChart3,
  Lightbulb,
} from 'lucide-react'

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

  const [aiResponse, setAiResponse] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        const profileResponse = await api.get('/auth/profile')

        const profile =
          profileResponse?.user ??
          profileResponse?.data ??
          profileResponse

        const buyerId = profile?.id ?? profile?._id

        if (!buyerId) {
          throw new Error('Unable to resolve buyer ID for analytics')
        }

        const analyticsResponse = await api.post(
          '/ai/buyer-analytics',
          {
            buyerId,
            targetCrops: ['wheat', 'rice', 'tomatoes'],
          }
        )

        setAiResponse(
          analyticsResponse?.data ?? analyticsResponse
        )

        setError(null)
      } catch (err: any) {
        console.error(
          'Buyer analytics fetch failed:',
          err
        )

        setError(
          err?.message ||
            'Unable to load buyer analytics data'
        )
      } finally {
        setLoading(false)
      }
    }

    loadAnalytics()
  }, [])

  const metrics: MetricCard[] = [
    {
      title: 'Procurement Savings Index',
      value: '₹2.4M',
      change: '+12.5% vs last quarter',
      changeType: 'positive',
      icon: <TrendingUp className="size-5" />,
    },
    {
      title: 'Optimal Sourcing Window',
      value: '3-5 Days',
      change: 'Best window: Rice & Onions',
      changeType: 'neutral',
      icon: <Calendar className="size-5" />,
    },
    {
      title: 'Supply Volatility Alert',
      value: 'High',
      change: 'Tomatoes: +18% volatility',
      changeType: 'negative',
      icon: <AlertTriangle className="size-5" />,
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
      icon: <BarChart3 className="size-5" />,
      items: [
        'Bulk purchase Rice within 3-5 days for 12% savings',
        'Consider alternative suppliers for Tomatoes to mitigate volatility',
        'Optimize transportation route to North region suppliers',
      ],
    },
    {
      title: 'Quality & Grade Advisor',
      icon: <Lightbulb className="size-5" />,
      items: [
        'Grade A Tomatoes available at premium margin - recommend for premium buyers',
        'Standard Grade Rice offers best value this quarter',
        'Organic Onions showing premium demand - stock recommended',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 space-y-2">
          <button
            onClick={() =>
              router.push('/buyer/dashboard')
            }
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>

          <h1 className="text-3xl font-black text-gray-900 tracking-tight sm:text-4xl">
            Buyer AI Analytics Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            AI-powered procurement insights and predictive marketplace recommendations.
          </p>
        </div>

        {/* Top Metric Cards */}
        <div className="mb-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                  {metric.title}
                </h3>

                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-emerald-700">
                  {metric.icon}
                </div>
              </div>

              <div className="mb-2">
                <p className="text-3xl font-black text-gray-900 tracking-tight">
                  {metric.value}
                </p>
              </div>

              <p
                className={`text-xs font-bold ${
                  metric.changeType === 'positive'
                    ? 'text-emerald-600'
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
        <div className="mb-8 rounded-2xl bg-white p-6 border border-gray-200/60 shadow-sm">
          <h2 className="mb-6 text-lg font-black text-gray-900 tracking-tight">
            AI Price Forecast
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {priceForecasts.map((forecast, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200/60 p-5 bg-gray-50/20 space-y-4"
              >
                <h3 className="font-extrabold text-gray-900 text-base border-b border-gray-100 pb-2">
                  {forecast.commodity}
                </h3>

                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Current Price
                    </p>

                    <p className="text-lg font-black text-gray-900">
                      ₹{forecast.current}/kg
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      AI Forecasted Price
                    </p>

                    <p className="text-lg font-black text-emerald-600">
                      ₹{forecast.forecasted}/kg
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-2.5 text-center">
                    <p
                      className={`text-xs font-bold ${
                        forecast.change >= 0
                          ? 'text-red-600'
                          : 'text-emerald-600'
                      }`}
                    >
                      {forecast.change >= 0
                        ? '▲ +'
                        : '▼ '}

                      {forecast.changePercent}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendation Cards */}
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {recommendations.map((rec, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-emerald-700">
                  {rec.icon}
                </div>

                <h2 className="text-lg font-black text-gray-900 tracking-tight">
                  {rec.title}
                </h2>
              </div>

              <ul className="space-y-3.5">
                {rec.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex gap-3 text-gray-700 items-start"
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-600 shrink-0" />

                    <span className="text-sm font-medium leading-relaxed text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI Analytics Results */}
        <div className="mt-8 rounded-2xl bg-white p-6 border border-gray-200/60 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                AI Analytics Results
              </h2>

              <p className="text-sm text-gray-500">
                Loaded from the buyer analytics endpoint.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="rounded-2xl bg-gray-50 p-6 text-center text-gray-600">
              Loading AI analytics...
            </div>
          ) : error ? (
            <div className="rounded-2xl bg-red-50 border border-red-200 p-6 text-sm text-red-700">
              {error}
            </div>
          ) : aiResponse ? (
            <pre className="overflow-x-auto rounded-2xl bg-gray-50 p-4 text-xs text-gray-800">
              {JSON.stringify(
                aiResponse,
                null,
                2
              )}
            </pre>
          ) : (
            <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-600">
              No AI analytics data is available at the moment.
            </div>
          )}
        </div>

      </div>
    </div>
  )
}