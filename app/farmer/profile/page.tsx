<<<<<<< HEAD
'use client';

import FarmerProfilePage from "../../../components/FarmerProfilePage";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
// Sidebar import kiya (Apne folder structure ke hissab se path check kar lein)
import { FarmerSidebar } from "../../../components/FarmerSidebar"; 

export default function FarmerProfileRoute() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] flex flex-col justify-between">
      <div>
        <Navbar />
        
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Sidebar aur Profile Page ko ek sath align karne ke liye flex wrapper */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Sidebar Section */}
            <div className="lg:w-64 flex-shrink-0">
              <FarmerSidebar />
            </div>

            {/* Profile Page Content Section */}
            <div className="flex-1">
              <FarmerProfilePage />
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
=======
'use client';

import FarmerProfilePage from "../../../components/FarmerProfilePage";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
// Sidebar import kiya (Apne folder structure ke hissab se path check kar lein)
import { FarmerSidebar } from "../../../components/FarmerSidebar"; 

export default function FarmerProfileRoute() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] flex flex-col justify-between">
      <div>
        <Navbar />
        
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Sidebar aur Profile Page ko ek sath align karne ke liye flex wrapper */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Sidebar Section */}
            <div className="lg:w-64 flex-shrink-0">
              <FarmerSidebar />
            </div>

            {/* Profile Page Content Section */}
            <div className="flex-1">
              <FarmerProfilePage />
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
>>>>>>> 8d282be6528be5fa383e82fa7a58c9ffcd476c18
}