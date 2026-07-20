"use client";

interface FarmerTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function FarmerTabs({
  activeTab,
  setActiveTab,
}: FarmerTabsProps) {

  const tabs = [
    "Overview",
    "Crops",
    "Activity",
    "Documents",
  ];

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-3">

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-xl font-medium whitespace-nowrap transition ${
              activeTab === tab
                ? "bg-green-700 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-green-50"
            }`}
          >
            {tab}
          </button>

        ))}

      </div>

    </div>
  );
}