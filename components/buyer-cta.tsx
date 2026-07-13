'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBasket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BuyerCta() {
<section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* लेफ्ट साइड: आपका टेक्स्ट और बटन */}
        <div className="text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            <ShoppingBasket className="h-4 w-4" />
            For Buyers
          </span>

          <h2 className="mt-5 font-heading text-3xl font-bold text-gray-900">
            Looking For Specific crops?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Need flowers, fruits, vegetables, grains, or bulk agricultural produce? Post your requirement and get direct supplies.
          </p>

          <div className="mt-8 flex justify-start">
            <Link href="/buyer/post-requirement" passHref>
              <Button size="lg" className="h-12 bg-[#02e7d32] hover:bg-[#01b4d1e] text-white px-6 rounded-xl flex items-center gap-2">
                Post Your Requirement
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Be the first buyer to create demand on KrishiSetu.
          </p>
        </div>

        {/* राइट साइड: आपकी नई बैनर इमेज */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100">
          <Image
            src="/requirement-banner.png"
            alt="Looking for specific crops banner"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

      </div>
    </section>
}