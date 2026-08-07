'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import api from '@/lib/api';

import BuyerHero from './components/BuyerHero';
import BuyerStats from './components/BuyerStats';
import BuyerCompanyDetails from './components/BuyerCompanyDetails';
import BuyerRequirements from './components/BuyerRequirements';
import BuyerPurchaseHistory from './components/BuyerPurchaseHistory';
import BuyerReviews from './components/BuyerReviews';
import BuyerAIInsights from './components/BuyerAIInsights';

export default function BuyerProfilePage() {
  const router = useRouter();

  const [buyerProfile, setBuyerProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/users/profile');

        const profileData =
          response?.data ??
          response?.user ??
          null;

        setBuyerProfile(profileData);
        setError(null);
      } catch (err: any) {
        console.error('Profile fetch error:', err);

        setError(
          err?.message ||
            'Unable to load profile'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleProfileUpdate = async (
    payload: Record<string, any>
  ) => {
    try {
      setLoading(true);

      const response = await api.put(
        '/users/profile',
        payload
      );

      const updatedProfile =
        response?.data ??
        response?.user ??
        null;

      setBuyerProfile(updatedProfile);
      setError(null);

      return updatedProfile;
    } catch (err: any) {
      console.error('Profile update error:', err);

      setError(
        err?.message ||
          'Unable to update profile'
      );

      return null;
    } finally {
      setLoading(false);
    }
  };

  const profileUpdateProps = {
    onProfileUpdate: handleProfileUpdate,
  };

  return (
    <main className="min-h-screen bg-[#F8F6F0] text-black">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">

        {/* Back Navigation */}
        <div className="pb-2">
          <button
            onClick={() =>
              router.push('/buyer/dashboard')
            }
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>

          {loading && (
            <p className="mt-2 text-sm text-gray-500">
              Loading profile...
            </p>
          )}

          {error && (
            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>

        {/* Profile Sections */}

        <BuyerHero
          buyer={buyerProfile}
          {...profileUpdateProps}
        />

        <BuyerStats buyer={buyerProfile}/>

        <BuyerCompanyDetails
          buyer={buyerProfile}
          {...profileUpdateProps}
        />

        <BuyerRequirements />

        <BuyerPurchaseHistory />

        <BuyerReviews />

        <BuyerAIInsights />

      </div>
    </main>
  );
}
