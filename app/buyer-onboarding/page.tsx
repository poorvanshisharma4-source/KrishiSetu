'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Building2,
  FileCheck,
  Search,
  Handshake,
  CheckCircle2,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/LanguageContext'

export default function BuyerOnboarding() {
  const router = useRouter()
  const { t } = useLanguage()

  const steps = [
    {
      icon: Building2,
      title: t('buyerOnboarding.step1.title'),
      description: t('buyerOnboarding.step1.description'),
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: FileCheck,
      title: t('buyerOnboarding.step2.title'),
      description: t('buyerOnboarding.step2.description'),
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Search,
      title: t('buyerOnboarding.step3.title'),
      description: t('buyerOnboarding.step3.description'),
      color: 'bg-amber-100 text-amber-700',
    },
    {
      icon: Handshake,
      title: t('buyerOnboarding.step4.title'),
      description: t('buyerOnboarding.step4.description'),
      color: 'bg-purple-100 text-purple-700',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-32 pb-16 bg-[#2E7D32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">
                {t('buyerOnboarding.badge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t('buyerOnboarding.title')}
            </h1>

            <p className="text-lg text-primary-100">
              {t('buyerOnboarding.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Button
              onClick={() => router.push('/contact')}
              variant="outline"
              className="mb-8 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('buyerOnboarding.backToHome')}
            </Button>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-colors"
                >
                  <div
                    className={`w-12 h-12 shrink-0 ${step.color} rounded-xl flex items-center justify-center`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-400 mb-1">
                      {t('buyerOnboarding.step')} {index + 1}
                    </p>

                    <h3 className="text-lg font-display font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 bg-green-50 rounded-lg p-5">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600 mt-0.5" />

              <p className="text-sm text-gray-700">
                {t('buyerOnboarding.note')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}