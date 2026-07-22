"use client";

import {
  Users,
  ShoppingCart,
  FileText,
  IndianRupee,
  Star,
  Truck,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Farmers",
      value: "2,350",
      icon: Users,
      color: "bg-green-100",
      iconColor: "text-green-700",
    },
    {
      title: "Total Buyers",
      value: "410",
      icon: ShoppingCart,
      color: "bg-blue-100",
      iconColor: "text-blue-700",
    },
    {
      title: "Active Contracts",
      value: "520",
      icon: FileText,
      color: "bg-yellow-100",
      iconColor: "text-yellow-700",
    },
    {
      title: "Revenue",
      value: "₹24.5L",
      icon: IndianRupee,
      color: "bg-emerald-100",
      iconColor: "text-emerald-700",
    },
    {
      title: "Verified Farmers",
      value: "1,980",
      icon: Star,
      color: "bg-purple-100",
      iconColor: "text-purple-700",
    },
    {
      title: "Deliveries",
      value: "450",
      icon: Truck,
      color: "bg-orange-100",
      iconColor: "text-orange-700",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E6] p-6">
      <div className="max-w-7xl mx-auto">

        {/* Welcome Card */}
        <div className="bg-white rounded-3xl shadow-sm p-8 mb-8">
          <h1 className="text-4xl font-bold text-[#2E7D32]">
            Welcome Admin 👋
          </h1>

          <p className="text-gray-600 mt-2 text-lg">
            Manage Farmers, Buyers, Contracts and the entire KrishiSetu platform from one place.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-gray-500 text-sm">
                      {item.title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                      {item.value}
                    </h2>
                  </div>

                  <div className={`${item.color} p-4 rounded-2xl`}>
                    <Icon
                      className={`w-7 h-7 ${item.iconColor}`}
                    />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}