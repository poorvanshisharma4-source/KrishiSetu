"use client";

import { useState } from "react";

import FarmerHero from "./FarmerHero";
import FarmerStats from "./FarmerStats";
import FarmerTabs from "./FarmerTabs";
import FarmerOverview from "./FarmerOverview";
import FarmerActivity from "./FarmerActivity";
import FarmerDocuments from "./FarmerDocuments";
import FarmerCrops from "./FarmerCrops";

export default function FarmerProfilePage() {

  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex-1 bg-[#F8F6F0] p-6 space-y-6">

      <FarmerHero />

      <FarmerStats />

      <FarmerTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />


      {activeTab === "Overview" && (
        <FarmerOverview />
      )}


      {activeTab === "Crops" && (
        <FarmerCrops />
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