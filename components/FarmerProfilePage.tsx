// "use client";

// import { useState } from "react";

// import FarmerHero from "./FarmerHero";
// import FarmerStats from "./FarmerStats";
// import FarmerTabs from "./FarmerTabs";
// import FarmerOverview from "./FarmerOverview";
// import FarmerActivity from "./FarmerActivity";
// import FarmerDocuments from "./FarmerDocuments";
// import FarmerCrops from "./FarmerCrops";

// export default function FarmerProfilePage() {

//   const [activeTab, setActiveTab] = useState("Overview");

//   return (
//     <div className="flex-1 bg-[#F8F6F0] p-6 space-y-6">

//       <FarmerHero />

//       <FarmerStats />

//       <FarmerTabs
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />


//       {activeTab === "Overview" && (
//         <FarmerOverview />
//       )}


//       {activeTab === "Crops" && (
//         <FarmerCrops />
//       )}


//       {activeTab === "Activity" && (
//         <FarmerActivity />
//       )}


//       {activeTab === "Documents" && (
//         <FarmerDocuments />
//       )}


//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Loader2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

import FarmerHero from "./FarmerHero";
import FarmerStats from "./FarmerStats";
import FarmerTabs from "./FarmerTabs";
import FarmerOverview from "./FarmerOverview";
import FarmerActivity from "./FarmerActivity";
import FarmerDocuments from "./FarmerDocuments";
import FarmerCrops from "./FarmerCrops";

export interface UserProfileData {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  village?: string;
  district?: string;
  state?: string;
  address?: string;
  landSize?: number | string;
  waterAvailability?: string;
  farmingExperience?: number | string;
  crops?: any[];
  role?: string;
}

export default function FarmerProfilePage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Overview");
  const [profileData, setProfileData] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        // GET request to /users/profile (as defined in userRoutes.js)
        const res = await api.get('/auth/profile');
        console.log("PROFILE API RESPONSE:", res);
        if (isMounted && res.success) {
          
          setProfileData(res.user);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          console.error("Profile Fetch Error:", err);
          setError(err.response?.data?.message || err.message || "Failed to load profile.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUserProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-[#F8F6F0] min-h-[60vh]">
        <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
        <p className="mt-4 text-sm font-semibold text-gray-600">{t("farmer.loadingProfile")}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#F8F6F0] p-6">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700 flex items-center justify-center gap-2 max-w-2xl mx-auto">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#F8F6F0] p-6 space-y-6">

      {/* Passing profileData cleanly using spread to prevent TS Property mismatch */}
      <FarmerHero {...(profileData as any)} user={profileData} />

      <FarmerStats {...(profileData as any)} user={profileData} />

      <FarmerTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "Overview" && (
        <FarmerOverview {...(profileData as any)} user={profileData} />
      )}

      {activeTab === "Crops" && (
        <FarmerCrops {...(profileData as any)} crops={profileData?.crops || []} />
      )}

      {activeTab === "Activity" && (
        <FarmerActivity />
      )}

      {activeTab === "Documents" && (
        <FarmerDocuments />
      )}

    </div>
  );
}
