"use client";

import { Package, Calendar, MapPin } from "lucide-react";

export default function BuyerRequirements() {
  const requirements = [
    {
      crop: "Wheat",
      quantity: "5000 Kg",
      price: "₹28/kg",
      location: "Indore, MP",
      status: "Active",
    },
    {
      crop: "Tomato",
      quantity: "3000 Kg",
      price: "₹18/kg",
      location: "Dewas, MP",
      status: "Completed",
    },
    {
      crop: "Onion",
      quantity: "8000 Kg",
      price: "₹20/kg",
      location: "Ujjain, MP",
      status: "Pending",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-amber-100 text-amber-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Current Buying Requirements
        </h2>

        <span className="text-sm text-gray-500">
          {requirements.length} Active Records
        </span>
      </div>

      <div className="space-y-4">

        {requirements.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

              <div>

                <h3 className="text-xl font-semibold">
                  🌾 {item.crop}
                </h3>

                <div className="flex flex-wrap gap-5 mt-3 text-gray-600">

                  <div className="flex items-center gap-2">
                    <Package size={18} />
                    {item.quantity}
                  </div>

                  <div className="flex items-center gap-2">
                    💰 {item.price}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {item.location}
                  </div>

                </div>

              </div>

              <div className="flex flex-col items-start lg:items-end gap-2">

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={16} />
                  Posted 2 days ago
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}