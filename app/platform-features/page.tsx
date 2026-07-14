'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Users,
  FileSignature,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function PlatformFeatures() {
  const router = useRouter()

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Matching',
      description: 'Requirements are automatically matched with farmers based on crop category, quantity, and location.',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Farmer Network',
      description: 'Every farmer profile is KYC-verified, giving buyers confidence in who they are sourcing from.',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: MessageSquare,
      title: 'Direct Messaging',
      description: 'Chat directly with connected farmers to discuss quantity, pricing, and delivery — no middlemen.',
      color: 'bg-amber-100 text-amber-700',
    },
    {
      icon: FileSignature,
      title: 'Digital Contracts',
      description: 'Finalize agreements with clear terms — quantity, value, and delivery dates — tracked on your dashboard.',
      color: 'bg-purple-100 text-purple-700',
    },
    {
      icon: BarChart3,
      title: 'Spending Analytics',
      description: 'Track your order history and spending trends over time to plan future sourcing.',
      color: 'bg-rose-100 text-rose-700',
    },
    {
      icon: Users,
      title: 'FPO Network Access',
      description: 'Connect with Farmer Producer Organizations for bulk sourcing at scale.',
      color: 'bg-cyan-100 text-cyan-700',
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
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Platform Overview</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Platform Features
            </h1>
            <p className="text-lg text-primary-100">
              Everything you can do on KrishiSetu, in one place.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 -mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={() => router.push('/contact')}
            variant="outline"
            className="mb-8 flex items-center gap-2 bg-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full">
                  <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
