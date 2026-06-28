'use client';

import Link from 'next/link';
import { ShoppingBasket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BuyerCta() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#2E7D32]">
          <ShoppingBasket className="h-4 w-4" />
          For Buyers
        </span>
        
        <h2 className="mt-5 font-heading text-3xl font-bold text-gray-900">
          Looking For Specific Crops?
        </h2>
        
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Need flowers, fruits, vegetables, grains, or bulk agricultural produce? Post your requirement and connect directly with farmers.
        </p>

        <div className="mt-8 flex justify-center">
          <Link href="/buyer/post-requirement">
            <Button size="lg" className="h-12 bg-[#2E7D32] hover:bg-[#1b4d1e] text-white px-6 rounded-xl font-semibold shadow-md transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
              Post Your Requirement
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Be the first buyer to create demand on KrishiSetu.
        </p>
      </div>
    </section>
  );
}