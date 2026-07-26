'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Leaf,
  Shield,
  Globe,
  Heart,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import AICopilotPanel from '@/components/ai-copilot/AICopilotPanel';
import { useLanguage } from '@/components/LanguageContext';

export default function AboutPage() {
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('about.farmerFirst'),
      description: t('about.farmerFirstDescription'),
    },
    {
      icon: Shield,
      title: t('about.trustTransparency'),
      description: t('about.trustTransparencyDescription'),
    },
    {
      icon: Lightbulb,
      title: t('about.innovation'),
      description: t('about.innovationDescription'),
    },
    {
      icon: Globe,
      title: t('about.accessibility'),
      description: t('about.accessibilityDescription'),
    },
  ];

  const milestones = [
    {
      year: '2022',
      title: t('about.founded'),
      description: t('about.foundedDescription'),
    },
    {
      year: '2023',
      title: t('about.farmersOnboarded'),
      description: t('about.farmersOnboardedDescription'),
    },
    {
      year: '2023',
      title: t('about.aiIntegration'),
      description: t('about.aiIntegrationDescription'),
    },
    {
      year: '2024',
      title: t('about.activeUsers'),
      description: t('about.activeUsersDescription'),
    },
  ];

  const team = [
    {
      name: 'Vikram Singh',
      role: 'CEO & Co-Founder',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Priya Sharma',
      role: 'CTO & Co-Founder',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Rahul Mehta',
      role: 'Head of Operations',
      image:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Ananya Patel',
      role: 'Head of Farmer Relations',
      image:
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  return (
    <div className="min-h-screen bg-beige-200">
      <Navbar onCopilotClick={() => setIsCopilotOpen(true)} />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-[#2E8B3C] text-white flex items-center justify-center min-h-[40vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto space-y-6"
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-[#2E7D32] rounded-full mx-auto">
                <Leaf className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  {t('about.story')}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t('about.title')}
              </h1>

              <p className="text-base md:text-lg text-green-50 max-w-2xl mx-auto opacity-90 leading-relaxed">
                {t('about.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  {t('about.mission')}
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                  {t('about.missionParagraph1')}
                </p>

                <p className="text-lg text-gray-600 mb-6">
                  {t('about.missionParagraph2')}
                </p>

                <p className="text-lg text-gray-600">
                  {t('about.missionParagraph3')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-80 lg:h-96 rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.pexels.com/photos/2165759/pexels-photo-2165759.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Farmer in field"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#F7F4EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.coreValues')}
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('about.coreValuesDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index}>
                  <div className="bg-white rounded-2xl border border-[#E5DCCB] shadow-sm p-8 text-center h-full">
                    <div className="w-16 h-16 bg-[#D7E8D2] rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <value.icon className="w-8 h-8 text-[#2F8A3A]" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-[#F7F4EC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.journey')}
              </h2>

              <p className="text-lg text-gray-600">
                {t('about.journeyDescription')}
              </p>
            </motion.div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#2F8A3A] text-white font-bold flex items-center justify-center shadow-md">
                      {milestone.year.slice(2)}
                    </div>

                    {index < milestones.length - 1 && (
                      <div className="w-[2px] h-32 bg-[#8BC48A] mt-2"></div>
                    )}
                  </div>

                  <div className="flex-1 bg-white rounded-3xl border border-[#E5DCCB] shadow-md p-8">
                    <div className="text-[#2F8A3A] font-semibold mb-2">
                      {milestone.year}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>

                    <p className="text-gray-600 text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                {t('about.team')}
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('about.teamDescription')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="rounded-2xl border border-border bg-card p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-display font-bold text-gray-900">
                      {member.name}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-[#2E8B3C] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {t('about.impact')}
              </h2>

              <p className="text-lg text-primary-100 max-w-2xl mx-auto">
                {t('about.impactDescription')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  value: '10,000+',
                  label: t('about.farmersEmpowered'),
                },
                {
                  value: '5,000+',
                  label: t('about.verifiedBuyers'),
                },
                {
                  value: '₹50 Cr+',
                  label: t('about.transactionsFacilitated'),
                },
                {
                  value: '45%',
                  label: t('about.reducedCropWastage'),
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                    {stat.value}
                  </div>

                  <div className="text-primary-100">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                {t('about.ctaTitle')}
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                {t('about.ctaDescription')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/farmer/login">
                  <Button variant="default" size="lg">
                    {t('about.joinFarmer')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <Link href="/buyer/login">
                  <Button variant="secondary" size="lg">
                    {t('about.joinBuyer')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <AICopilotPanel
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
        userRole="farmer"
      />
    </div>
  );
}