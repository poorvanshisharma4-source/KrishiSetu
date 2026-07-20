
'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import BuyerHero from "./components/BuyerHero";
import BuyerStats from "./components/BuyerStats";
import BuyerCompanyDetails from "./components/BuyerCompanyDetails";
import BuyerRequirements from "./components/BuyerRequirements";
import BuyerPurchaseHistory from "./components/BuyerPurchaseHistory";
import BuyerReviews from "./components/BuyerReviews";
import BuyerAIInsights from "./components/BuyerAIInsights";

export default function BuyerProfilePage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#F8F6F0] text-black">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        
        {/* Symmetrical Back Navigation */}
        <div className="pb-2">
          <button
            onClick={() => router.push('/buyer/dashboard')}
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>
        </div>

        {/* Existing Profile Sections */}
        <BuyerHero />
        <BuyerStats />
        <BuyerCompanyDetails />
        <BuyerRequirements />
        <BuyerPurchaseHistory />
        <BuyerReviews />
        <BuyerAIInsights />
      </div>
    </main>
  );
}