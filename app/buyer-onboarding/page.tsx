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

export default function BuyerOnboarding() {
  const router = useRouter()

  const steps = [
    {
      icon: Building2,
      title: 'Create a Buyer Account',
      description:
        'Sign up with your company details, select "Buyer" as your account type, and verify your business email.',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: FileCheck,
      title: 'Complete Business Verification',
      description:
        'Submit your business registration (GSTIN/Trade License) so farmers can trust and connect with a verified buyer.',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Search,
      title: 'Post a Requirement',
      description:
        'Specify the crop, quantity, budget, quality grade, and delivery location you need — matched farmers will be shown automatically.',
      color: 'bg-amber-100 text-amber-700',
    },
    {
      icon: Handshake,
      title: 'Connect & Finalize Contracts',
      description:
        'Chat with matched farmers, agree on terms, and finalize a contract directly through the platform.',
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
              <span className="text-sm font-medium">Buyer Onboarding</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Getting Started as a Buyer
            </h1>
            <p className="text-lg text-primary-100">
              Follow these steps to set up your buyer account and start sourcing directly from farmers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Button
              onClick={() => router.push('/')}
              variant="outline"
              className="mb-8 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
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
                  <div className={`w-12 h-12 shrink-0 ${step.color} rounded-xl flex items-center justify-center`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 mb-1">STEP {index + 1}</p>
                    <h3 className="text-lg font-display font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 bg-green-50 rounded-lg p-5">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600 mt-0.5" />
              <p className="text-sm text-gray-700">
                Once onboarded, the buyer&apos;s dashboard shows connected farmers, active orders, and
                spending analytics — all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
