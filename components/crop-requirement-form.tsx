

'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  MapPin,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  HelpCircle,
  Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import api from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageContext'

interface FormData {
  crop: string
  grade: string
  quantity: string
  unit: string
  targetPrice: string
  deliveryDate: string
  deliveryLocation: string
  additionalTerms: string
}

interface FormErrors {
  [key: string]: string
}

export default function CropRequirementForm() {
  const router = useRouter()
  const { t } = useLanguage()

  const [formData, setFormData] = useState<FormData>({
    crop: '',
    grade: '',
    quantity: '',
    unit: 'Quintals',
    targetPrice: '',
    deliveryDate: '',
    deliveryLocation: '',
    additionalTerms: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const gradeOptions = [
    {
      value: 'Grade A (Premium)',
      label: t('cropRequirement.gradeA'),
    },
    {
      value: 'Grade B (Standard)',
      label: t('cropRequirement.gradeB'),
    },
    {
      value: 'Organic Certified',
      label: t('cropRequirement.organicCertified'),
    },
  ]

  const unitOptions = [
  {
    value: 'Tons',
    label: t('cropRequirement.tons'),
  },
  {
    value: 'Quintals',
    label: t('cropRequirement.quintals'),
  },
  {
    value: 'Kilograms',
    label: t('cropRequirement.kilograms'),
  },
]

  const isTomatoCase = formData.crop
    .toLowerCase()
    .trim()
    .includes('tomato')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.crop.trim()) {
      newErrors.crop = t(
        'cropRequirement.cropRequired'
      )
    }

    if (!formData.grade.trim()) {
      newErrors.grade = t(
        'cropRequirement.gradeRequired'
      )
    }

    if (
      !formData.quantity.trim() ||
      parseFloat(formData.quantity) <= 0
    ) {
      newErrors.quantity = t(
        'cropRequirement.validQuantity'
      )
    }

    if (
      !formData.targetPrice.trim() ||
      parseFloat(formData.targetPrice) <= 0
    ) {
      newErrors.targetPrice = t(
        'cropRequirement.validPrice'
      )
    }

    if (!formData.deliveryDate) {
      newErrors.deliveryDate = t(
        'cropRequirement.dateRequired'
      )
    }

    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = t(
        'cropRequirement.locationRequired'
      )
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
        HTMLSelectElement |
        HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (validateForm()) {
      setLoading(true)

      // Payload strictly mapped to API spec
      const payload = {
        cropName: formData.crop,
        quantity: Number(formData.quantity),
        unit: formData.unit,
        expectedPrice: Number(formData.targetPrice),
        requiredBy: formData.deliveryDate,
        location: formData.deliveryLocation,
        description:
  formData.additionalTerms ||
  t('cropRequirement.defaultDescription'),
      }

      try {
        const token =
          typeof window !== 'undefined'
            ? localStorage.getItem('token')
            : null

        if (!token) {
          const authError = t(
            'cropRequirement.noAuthToken'
          )

          console.warn(
            'Post requirement blocked:',
            authError
          )

          alert(authError)

          return
        }

        await api.post(
          '/requirements',
          payload
        )

        setSubmitted(true)

        alert(
          t('cropRequirement.publishedSuccess')
        )

        router.push('/buyer/dashboard')
      } catch (error: any) {
        console.error(
          'Failed to post requirement:',
          error
        )

        const message =
          error?.response?.data?.message ||
          error?.message ||
          t(
            'cropRequirement.failedToSubmit'
          )

        if (
          error?.response?.status === 401
        ) {
          alert(
            t(
              'cropRequirement.sessionExpired'
            )
          )

          router.push('/login')
        } else if (
          error?.response?.status === 403
        ) {
          alert(
            t(
              'cropRequirement.accessDenied'
            )
          )
        } else {
          alert(message)
        }
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="w-full pb-12 text-gray-900">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() =>
              router.push('/buyer/dashboard')
            }
            className="mb-6 flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft size={20} />

            {t(
              'cropRequirement.backToDashboard'
            )}
          </button>

          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            {t('cropRequirement.title')}
          </h1>

          <p className="text-base text-muted-foreground md:text-lg">
            {t(
              'cropRequirement.subtitle'
            )}
          </p>
        </div>

        {/* Responsive Grid Setup */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Left Side: Form */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-md md:p-8 lg:col-span-2">
            {submitted && (
              <div className="mb-6 rounded-lg border border-primary bg-primary/10 p-4">
                <p className="font-medium text-primary">
                  ✓{' '}
                  {t(
                    'cropRequirement.publishedSuccess'
                  )}
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Crop Selection */}
              <div>
                <label
                  htmlFor="crop"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  {t(
                    'cropRequirement.cropName'
                  )}{' '}
                  <span className="text-destructive">
                    *
                  </span>
                </label>

                <input
                  id="crop"
                  type="text"
                  name="crop"
                  value={formData.crop}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t(
                    'cropRequirement.cropNamePlaceholder'
                  )}
                />

                {errors.crop && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.crop}
                  </p>
                )}
              </div>

              {/* Quality/Grade and Quantity */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="grade"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t(
                      'cropRequirement.qualityGrade'
                    )}
                  </label>

                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">
                      {t(
                        'cropRequirement.selectGrade'
                      )}
                    </option>

                    {gradeOptions.map(
                      (option) => (
                        <option
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="quantity"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t(
                      'cropRequirement.quantityNeeded'
                    )}{' '}
                    <span className="text-destructive">
                      *
                    </span>
                  </label>

                  <div className="flex items-center gap-2">
                    <input
                      id="quantity"
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder={t(
                        'cropRequirement.enterQuantity'
                      )}
                      step="0.01"
                      min="0"
                      className="w-[68%] rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <select
                      name="unit"
                      aria-label={t('cropRequirement.selectUnit')}
                      value={formData.unit}
                      onChange={handleChange}
                      className="w-[32%] rounded-lg border border-border bg-input px-3 py-3 text-foreground transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {unitOptions.map((option) => (
  <option
    key={option.value}
    value={option.value}
  >
    {option.label}
  </option>
))}
                    </select>
                  </div>

                  {errors.quantity && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.quantity}
                    </p>
                  )}
                </div>
              </div>

              {/* Target Price */}
              <div>
                <label
                  htmlFor="targetPrice"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  {t(
                    'cropRequirement.targetPrice'
                  )}{' '}
                  <span className="text-destructive">
                    *
                  </span>
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-3.5 font-semibold text-foreground">
                    ₹
                  </span>

                  <input
                    id="targetPrice"
                    type="number"
                    name="targetPrice"
                    value={formData.targetPrice}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full rounded-lg border border-border bg-input py-3 pl-8 pr-4 text-foreground placeholder-muted-foreground transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {errors.targetPrice && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.targetPrice}
                  </p>
                )}
              </div>

              {/* Delivery Deadline */}
              <div>
                <label
                  htmlFor="deliveryDate"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  {t(
                    'cropRequirement.deliveryDeadline'
                  )}{' '}
                  <span className="text-destructive">
                    *
                  </span>
                </label>

                <input
                  id="deliveryDate"
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />

                {errors.deliveryDate && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.deliveryDate}
                  </p>
                )}
              </div>

              {/* Delivery Location */}
              <div>
                <label
                  htmlFor="deliveryLocation"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  {t(
                    'cropRequirement.deliveryLocation'
                  )}{' '}
                  <span className="text-destructive">
                    *
                  </span>
                </label>

                <div className="relative">
                  <MapPin
                    size={20}
                    className="pointer-events-none absolute left-4 top-3.5 text-secondary"
                  />

                  <input
                    id="deliveryLocation"
                    type="text"
                    name="deliveryLocation"
                    value={
                      formData.deliveryLocation
                    }
                    onChange={handleChange}
                    placeholder={t(
                      'cropRequirement.locationPlaceholder'
                    )}
                    className="w-full rounded-lg border border-border bg-input py-3 pl-12 pr-4 text-foreground placeholder-muted-foreground transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {errors.deliveryLocation && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.deliveryLocation}
                  </p>
                )}
              </div>

              {/* Additional Terms */}
              <div>
                <label
                  htmlFor="additionalTerms"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  {t(
                    'cropRequirement.additionalTerms'
                  )}{' '}
                  <span className="text-muted-foreground">
                    ({t(
                      'cropRequirement.optional'
                    )})
                  </span>
                </label>

                <textarea
                  id="additionalTerms"
                  name="additionalTerms"
                  value={
                    formData.additionalTerms
                  }
                  onChange={handleChange}
                  placeholder={t(
                    'cropRequirement.termsPlaceholder'
                  )}
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={20}
                        className="animate-spin"
                      />

                      {t(
                        'cropRequirement.publishing'
                      )}
                    </>
                  ) : (
                    t(
                      'cropRequirement.publish'
                    )
                  )}
                </Button>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="mt-8 space-y-4 border-t border-border pt-8">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="flex-shrink-0 text-primary"
                />

                <span className="text-sm text-foreground">
                  {t(
                    'cropRequirement.verifiedNetwork'
                  )}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="flex-shrink-0 text-primary"
                />

                <span className="text-sm text-foreground">
                  {t(
                    'cropRequirement.mandiPricing'
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Live AI Procurement Assistant */}
          <div className="sticky top-6 flex min-h-[420px] flex-col justify-between rounded-lg border border-amber-200/60 bg-amber-50/60 p-5 shadow-sm dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                <Sparkles className="h-4 w-4 animate-pulse fill-amber-500 text-amber-600" />

                <span>
                  {t(
                    'cropRequirement.predictorAI'
                  )}
                </span>
              </div>

              {isTomatoCase ? (
                <div className="animate-in space-y-4 fade-in zoom-in-95 duration-200">
                  <div className="space-y-1 rounded-xl border border-amber-100 bg-white p-3 shadow-sm dark:border-amber-900/40 dark:bg-zinc-900">
                    <span className="block text-[10px] font-bold uppercase text-gray-400">
                      {t(
                        'cropRequirement.demandScore'
                      )}
                    </span>

                    <div className="flex items-center gap-1 text-sm font-extrabold text-green-700 dark:text-green-400">
                      {t(
                        'cropRequirement.highMarketDemand'
                      )}

                      <TrendingUp className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-amber-100 bg-white p-3 text-center dark:border-amber-900/40 dark:bg-zinc-900">
                      <span className="block text-[9px] font-bold uppercase text-gray-400">
                        {t(
                          'cropRequirement.availableFarmers'
                        )}
                      </span>

                      <span className="text-base font-extrabold text-gray-900 dark:text-gray-100">
                        26
                      </span>
                    </div>

                    <div className="rounded-xl border border-amber-100 bg-white p-3 text-center dark:border-amber-900/40 dark:bg-zinc-900">
                      <span className="block text-[9px] font-bold uppercase text-gray-400">
                        {t(
                          'cropRequirement.estimatedResponses'
                        )}
                      </span>

                      <span className="text-base font-extrabold text-gray-900 dark:text-gray-100">
                        12
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-amber-100 bg-white p-3 shadow-sm dark:border-amber-900/40 dark:bg-zinc-900">
                    <span className="mb-0.5 block text-[10px] font-bold uppercase text-gray-400">
                      {t(
                        'cropRequirement.suggestedPrice'
                      )}
                    </span>

                    <div className="text-base font-extrabold text-amber-700 dark:text-amber-400">
                      {t('cropRequirement.currencyPerKg')}
                    </div>

                    <p className="mt-1 text-[10px] leading-normal text-gray-500">
                      {t(
                        'cropRequirement.priceBelowAverage'
                      )}{' '}
                      <strong className="text-gray-700 dark:text-gray-300">
                        ₹
                        {formData.targetPrice ||
                          '0.00'}
                      </strong>{' '}
                      {t(
                        'cropRequirement.belowClusterAverage'
                      )}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 py-20 text-center text-xs text-gray-400">
                  <HelpCircle className="h-8 w-8 text-amber-200" />

                  <p className="max-w-[190px] leading-relaxed">
                    {t(
                      'cropRequirement.typeTomato'
                    )}{' '}
                    <strong className="text-gray-600 dark:text-gray-300">
  &quot;{t('cropRequirement.tomato')}&quot;
</strong>{' '}
                    {t(
                      'cropRequirement.inCropName'
                    )}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-4 border-t border-amber-200/40 pt-3 text-center text-[10px] font-semibold text-amber-700 dark:text-amber-400">
              {t(
                'cropRequirement.supportModule'
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}