'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Leaf,
  Sprout,
  ShoppingBag,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Award,
  BarChart3,
  FileText,
  Globe,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {Button} from '@/components/ui/button';

export default function DashboardPage() {
  const farmerFeatures = [
    { icon: FileText, text: 'Manage active contracts' },
    { icon: Sprout, text: 'Track your crops' },
    { icon: TrendingUp, text: 'AI-powered recommendations' },
    { icon: Award, text: 'Build your reputation' },
  ];

  const buyerFeatures = [
    { icon: ShoppingBag, text: 'Post requirements' },
    { icon: Users, text: 'Connect with farmers' },
    { icon: Shield, text: 'Secure contracts' },
    { icon: BarChart3, text: 'Analytics dashboard' },
  ];

  const stats = [
    { value: '10,000+', label: 'Active Farmers', icon: Sprout, color: 'text-green-600' },
    { value: '5,000+', label: 'Verified Buyers', icon: ShoppingBag, color: 'text-blue-600' },
    { value: '₹50Cr+', label: 'Transactions', icon: TrendingUp, color: 'text-amber-600' },
    { value: '95%', label: 'Success Rate', icon: Shield, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-beige-200">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-[#2E7D32] -to-br from-primary-800 to-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-[#2E7D32] rounded-full mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Dashboard Portal</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display bg-[#2E7D32] font-bold mb-6">
                Your Agricultural <br />Command Center
              </h1>
              <p className="text-xl text-primary-100 mb-8 bg-[#2E7D32]">
                Access your personalized dashboard to manage contracts, track crops,
                and connect with verified partners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Role Selection */}
        <section className="py-16 -mt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Farmer Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="h-full bg-white rounded-2x1 p-8 shadow-md border-2 border-transparent hover:border-green-200 transition-all group">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Sprout className="w-10 h-10 text-green-700" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      Farmer Dashboard
                    </h2>
                    <p className="text-gray-600">
                      Manage your crops, contracts, and connect with buyers directly.
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {farmerFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-green-700" />
                        </div>
                        <span className="text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
  <Link href="/farmer/dashboard" className="block">
    <Button
      variant="default"
      size="lg"
      className="w-full"
    >
      Login to Dashboard
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  </Link>

  
</div>
                </div>
              </motion.div>

              {/* Buyer Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="h-full bg-white rounded-2x1 p-8 shadow-md border-2 border-transparent hover:border-green-200 transition-all group">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-10 h-10 text-amber-700" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      Buyer Dashboard
                    </h2>
                    <p className="text-gray-600">
                      Post requirements, manage orders, and connect with verified farmers.
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {buyerFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-amber-700" />
                        </div>
                        <span className="text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
  <Link href="/buyer/dashboard" className="block">
    <Button
      variant="default"
      size="lg"
      className="w-full bg-amber-600 hover:bg-amber-700"
    >
      Login to Dashboard
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  </Link>

</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platform Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Platform at a Glance
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join thousands of farmers and buyers already transforming agriculture
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                What You Can Do
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Powerful tools designed for seamless agricultural trade
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: FileText,
                  title: 'Smart Contracts',
                  description: 'Create and manage digital agreements with automatic payment release on delivery.',
                  color: 'bg-blue-100 text-blue-700',
                },
                {
                  icon: TrendingUp,
                  title: 'AI Analytics',
                  description: 'Get crop recommendations, demand forecasts, and profit estimations powered by AI.',
                  color: 'bg-green-100 text-green-700',
                },
                {
                  icon: Shield,
                  title: 'Secure Payments',
                  description: 'Escrow-based payment system ensures safe transactions for both parties.',
                  color: 'bg-amber-100 text-amber-700',
                },
                {
                  icon: Users,
                  title: 'Verified Network',
                  description: 'Connect with verified farmers and buyers with trust badges and ratings.',
                  color: 'bg-purple-100 text-purple-700',
                },
                {
                  icon: Globe,
                  title: 'Multi-Language',
                  description: 'Available in 8 Indian languages for farmers across the country.',
                  color: 'bg-cyan-100 text-cyan-700',
                },
                {
                  icon: Award,
                  title: 'Reputation System',
                  description: 'Build credibility with every successful transaction and earn trust badges.',
                  color: 'bg-rose-100 text-rose-700',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-full bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#2E7D32] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                Join KrishiSetu today and experience the future of agricultural trade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
  <Link href="/farmer/login">
  <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-xl shadow-md hover:bg-green-700 hover:text-white transition-all duration-300 flex items-center gap-2">
    <Sprout className="w-5 h-5" />
    Join as Farmer
  </button>
</Link>

  <Link href="/buyer/login">
    <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-700 transition-all flex items-center gap-2">
      <ShoppingBag className="w-5 h-5" />
      Join as Buyer
    </button>
  </Link>
</div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}