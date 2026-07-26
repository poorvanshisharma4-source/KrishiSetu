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
import { useLanguage } from '@/components/LanguageContext'
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
  const { language } = useLanguage()

  const isHindi = language === 'hi'

  const [aiResponse, setAiResponse] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const t = (key: string) => {
    const translations = {
      en: {
        'analytics.backToDashboard': 'Back to Dashboard',
        'analytics.title': 'Buyer AI Analytics Dashboard',
        'analytics.subtitle':
          'AI-powered procurement insights and predictive marketplace recommendations.',
        'analytics.procurementSavings': 'Procurement Savings Index',
        'analytics.lastQuarter': '+12.5% vs last quarter',
        'analytics.sourcingWindow': 'Optimal Sourcing Window',
        'analytics.bestWindow': 'Best window: Rice & Onions',
        'analytics.supplyVolatility': 'Supply Volatility Alert',
        'analytics.high': 'High',
        'analytics.tomatoVolatility': 'Tomatoes: +18% volatility',
        'analytics.priceForecast': 'AI Price Forecast',
        'analytics.currentPrice': 'Current Price',
        'analytics.forecastedPrice': 'AI Forecasted Price',
        'analytics.logisticsOpportunity':
          'Logistics & Sourcing Opportunity',
        'analytics.qualityAdvisor': 'Quality & Grade Advisor',
        'analytics.analyticsResults': 'AI Analytics Results',
        'analytics.endpointData':
          'Loaded from the buyer analytics endpoint.',
        'analytics.loading': 'Loading AI analytics...',
        'analytics.noData':
          'No AI analytics data is available at the moment.',
        'analytics.tomatoes': 'Tomatoes',
        'analytics.rice': 'Rice',
        'analytics.onions': 'Onions',
        'analytics.bulkRice':
          'Bulk purchase Rice within 3-5 days for 12% savings',
        'analytics.alternativeTomatoes':
          'Consider alternative suppliers for Tomatoes to mitigate volatility',
        'analytics.optimizeRoute':
          'Optimize transportation route to North region suppliers',
        'analytics.gradeTomatoes':
          'Grade A Tomatoes available at premium margin - recommend for premium buyers',
        'analytics.standardRice':
          'Standard Grade Rice offers best value this quarter',
        'analytics.organicOnions':
          'Organic Onions showing premium demand - stock recommended',
        'analytics.currentPriceLabel': 'Current Price',
        'analytics.forecastedPriceLabel': 'AI Forecasted Price',
        'analytics.perKg': '/kg',
      },
      hi: {
        'analytics.backToDashboard': 'डैशबोर्ड पर वापस जाएं',
        'analytics.title': 'खरीदार AI विश्लेषण डैशबोर्ड',
        'analytics.subtitle':
          'AI द्वारा संचालित खरीद संबंधी जानकारी और भविष्य के बाजार सुझाव।',
        'analytics.procurementSavings': 'खरीद बचत सूचकांक',
        'analytics.lastQuarter': 'पिछली तिमाही की तुलना में +12.5%',
        'analytics.sourcingWindow': 'सर्वोत्तम खरीद समय',
        'analytics.bestWindow': 'सर्वोत्तम समय: चावल और प्याज',
        'analytics.supplyVolatility': 'आपूर्ति अस्थिरता चेतावनी',
        'analytics.high': 'उच्च',
        'analytics.tomatoVolatility': 'टमाटर: +18% अस्थिरता',
        'analytics.priceForecast': 'AI मूल्य पूर्वानुमान',
        'analytics.currentPrice': 'वर्तमान मूल्य',
        'analytics.forecastedPrice': 'AI अनुमानित मूल्य',
        'analytics.logisticsOpportunity':
          'लॉजिस्टिक्स और खरीद अवसर',
        'analytics.qualityAdvisor': 'गुणवत्ता और ग्रेड सलाहकार',
        'analytics.analyticsResults': 'AI विश्लेषण परिणाम',
        'analytics.endpointData':
          'खरीदार विश्लेषण API से प्राप्त डेटा।',
        'analytics.loading': 'AI विश्लेषण लोड हो रहा है...',
        'analytics.noData':
          'इस समय कोई AI विश्लेषण डेटा उपलब्ध नहीं है।',
        'analytics.tomatoes': 'टमाटर',
        'analytics.rice': 'चावल',
        'analytics.onions': 'प्याज',
        'analytics.bulkRice':
          '12% बचत के लिए 3-5 दिनों के भीतर चावल की थोक खरीद करें',
        'analytics.alternativeTomatoes':
          'अस्थिरता कम करने के लिए टमाटर के वैकल्पिक आपूर्तिकर्ताओं पर विचार करें',
        'analytics.optimizeRoute':
          'उत्तर क्षेत्र के आपूर्तिकर्ताओं के लिए परिवहन मार्ग को बेहतर बनाएं',
        'analytics.gradeTomatoes':
          'प्रीमियम मार्जिन पर ग्रेड A टमाटर उपलब्ध हैं - प्रीमियम खरीदारों के लिए अनुशंसित',
        'analytics.standardRice':
          'इस तिमाही में Standard Grade Rice सबसे अच्छा मूल्य प्रदान करता है',
        'analytics.organicOnions':
          'ऑर्गेनिक प्याज की मांग बढ़ रही है - स्टॉक रखने की सलाह दी जाती है',
        'analytics.currentPriceLabel': 'वर्तमान मूल्य',
        'analytics.forecastedPriceLabel': 'AI अनुमानित मूल्य',
        'analytics.perKg': '/किग्रा',
      },
    }

    return translations[isHindi ? 'hi' : 'en'][key as keyof typeof translations.en]
  }

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
            t('analytics.noData')
        )
      } finally {
        setLoading(false)
      }
    }

    loadAnalytics()
  }, [isHindi])

  const metrics: MetricCard[] = [
    {
      title: t('analytics.procurementSavings'),
      value: '₹2.4M',
      change: t('analytics.lastQuarter'),
      changeType: 'positive',
      icon: <TrendingUp className="size-5" />,
    },
    {
      title: t('analytics.sourcingWindow'),
      value: isHindi ? '3-5 दिन' : '3-5 Days',
      change: t('analytics.bestWindow'),
      changeType: 'neutral',
      icon: <Calendar className="size-5" />,
    },
    {
      title: t('analytics.supplyVolatility'),
      value: t('analytics.high'),
      change: t('analytics.tomatoVolatility'),
      changeType: 'negative',
      icon: <AlertTriangle className="size-5" />,
    },
  ]

  const priceForecasts: PriceData[] = [
    {
      commodity: t('analytics.tomatoes'),
      current: 45,
      forecasted: 52,
      change: 7,
      changePercent: 15.6,
    },
    {
      commodity: t('analytics.rice'),
      current: 120,
      forecasted: 118,
      change: -2,
      changePercent: -1.7,
    },
    {
      commodity: t('analytics.onions'),
      current: 30,
      forecasted: 28,
      change: -2,
      changePercent: -6.7,
    },
  ]

  const recommendations: RecommendationCard[] = [
    {
      title: t('analytics.logisticsOpportunity'),
      icon: <BarChart3 className="size-5" />,
      items: [
        t('analytics.bulkRice'),
        t('analytics.alternativeTomatoes'),
        t('analytics.optimizeRoute'),
      ],
    },
    {
      title: t('analytics.qualityAdvisor'),
      icon: <Lightbulb className="size-5" />,
      items: [
        t('analytics.gradeTomatoes'),
        t('analytics.standardRice'),
        t('analytics.organicOnions'),
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
            {t('analytics.backToDashboard')}
          </button>

          <h1 className="text-3xl font-black text-gray-900 tracking-tight sm:text-4xl">
            {t('analytics.title')}
          </h1>

          <p className="text-sm text-gray-500">
            {t('analytics.subtitle')}
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
            {t('analytics.priceForecast')}
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
                      {t('analytics.currentPrice')}
                    </p>

                    <p className="text-lg font-black text-gray-900">
                      ₹{forecast.current}{t('analytics.perKg')}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {t('analytics.forecastedPrice')}
                    </p>

                    <p className="text-lg font-black text-emerald-600">
                      ₹{forecast.forecasted}{t('analytics.perKg')}
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
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {t('analytics.analyticsResults')}
            </h2>

            <p className="text-sm text-gray-500">
              {t('analytics.endpointData')}
            </p>
          </div>

          {loading ? (
            <div className="rounded-2xl bg-gray-50 p-6 text-center text-gray-600">
              {t('analytics.loading')}
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
              {t('analytics.noData')}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}