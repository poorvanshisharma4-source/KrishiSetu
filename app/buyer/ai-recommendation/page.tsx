'use client';

import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Bot,
  CheckCircle,
  MapPin,
  Sprout,
  Droplets,
  Star,
  Tractor,
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

const farmers = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    match: 97,
    land: '8 Acres',
    water: 'Available',
    yield: '6500 kg',
    trust: '4.9',
    location: 'Indore, MP',
  },
  {
    id: 2,
    name: 'Mohan Patel',
    match: 92,
    land: '6 Acres',
    water: 'Available',
    yield: '5400 kg',
    trust: '4.8',
    location: 'Dewas, MP',
  },
  {
    id: 3,
    name: 'Ajay Singh',
    match: 89,
    land: '5 Acres',
    water: 'Medium',
    yield: '5000 kg',
    trust: '4.7',
    location: 'Ujjain, MP',
  },
];

export default function AIRecommendationPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5F0E6] p-6">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-green-700 mb-6 hover:underline"
        >
          <ArrowLeft size={20} />
          {t('aiRecommendation.back')}
        </button>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <div className="flex items-center gap-4">

            <div className="bg-green-100 p-3 rounded-full">
              <Bot
                size={35}
                className="text-green-700"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {t('aiRecommendation.title')}
              </h1>

              <p className="text-gray-600 mt-1">
                {t('aiRecommendation.description')}
              </p>
            </div>

          </div>
        </div>

        {/* Farmer Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {farmers.map((farmer) => (

            <div
              key={farmer.id}
              className="bg-white rounded-2xl shadow p-6"
            >

              {/* Farmer Name */}
              <div className="flex justify-between items-center mb-4">

                <h2 className="text-xl font-bold text-gray-800">
                  {farmer.name}
                </h2>

                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {farmer.match}% {t('aiRecommendation.match')}
                </div>

              </div>

              {/* Details */}
              <div className="space-y-3 text-gray-600">

                <p className="flex items-center gap-2">
                  <Tractor size={18} />
                  {t('aiRecommendation.land')}: {farmer.land}
                </p>

                <p className="flex items-center gap-2">
                  <Droplets size={18} />
                  {t('aiRecommendation.water')}:{' '}
                  {farmer.water === 'Available'
                    ? t('aiRecommendation.available')
                    : t('aiRecommendation.medium')}
                </p>

                <p className="flex items-center gap-2">
                  <Sprout size={18} />
                  {t('aiRecommendation.yield')}: {farmer.yield}
                </p>

                <p className="flex items-center gap-2">
                  <Star size={18} />
                  {t('aiRecommendation.trustScore')}: {farmer.trust}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={18} />
                  {farmer.location}
                </p>

              </div>

              {/* View Profile Button */}
              <button
                onClick={() =>
                  router.push(`/buyer/farmer/${farmer.id}`)
                }
                className="mt-4 w-full border border-green-700 text-green-700 py-3 rounded-xl hover:bg-green-50"
              >
                {t('aiRecommendation.viewProfile')}
              </button>

              {/* Select Farmer Button */}
              <button
                onClick={() =>
                  router.push(`/buyer/request?farmer=${farmer.id}`)
                }
                className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 flex items-center justify-center gap-2"
              >
                <CheckCircle size={18} />
                {t('aiRecommendation.selectFarmer')}
              </button>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}