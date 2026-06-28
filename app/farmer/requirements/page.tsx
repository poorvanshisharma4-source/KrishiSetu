'use client';

import BuyerMarketplace from "../../../components/buyer-marketplace";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
// Sidebar import kiya (Apne folder structure ke hissab se path check kar lein)
import { FarmerSidebar } from "../../../components/FarmerSidebar"; 

export default function FarmerRequirementsPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] flex flex-col justify-between">
      <div>
        <Navbar />
        
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Sidebar aur Marketplace ko ek sath side-by-side align karne ke liye */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Sidebar Section */}
            <div className="lg:w-64 flex-shrink-0">
              <FarmerSidebar />
            </div>

            {/* Buyer Marketplace Content Section */}
            <div className="flex-1">
              <BuyerMarketplace />
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}