"use client";

import { useEffect, useState } from "react";
import { Package, Calendar, MapPin } from "lucide-react";
import api from "@/lib/api";

interface RequirementItem {
  _id: string;
  cropName: string;
  quantity: number;
  unit: string;
  expectedPrice: number;
  requiredBy: string;
  location: string;
  description?: string;
  status?: string;
}

export default function BuyerRequirements() {
  const [requirements, setRequirements] = useState<RequirementItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchRequirements = async () => {
      try {
        setLoading(true);
        const response = await api.get("/requirements");
        const data = response?.data ?? [];

        if (isMounted) {
          setRequirements(Array.isArray(data) ? data : []);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || "Could not load requirements.");
          setRequirements([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchRequirements();

    return () => {
      isMounted = false;
    };
  }, []);

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

        {requirements.map((item, index) => {
          const formattedQuantity = `${item.quantity ?? 0} ${item.unit ?? "kg"}`;
          const formattedPrice = item.expectedPrice
            ? `₹${item.expectedPrice.toLocaleString()} / ${item.unit ?? "kg"}`
            : "Price not set";
          const displayStatus =
            item.status === "fulfilled"
              ? "Completed"
              : item.status === "cancelled"
              ? "Cancelled"
              : "Active";

          return (
            <div
              key={index}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                <div>

                  <h3 className="text-xl font-semibold">
                    🌾 {item.cropName || "Unknown Crop"}
                  </h3>

                  <div className="flex flex-wrap gap-5 mt-3 text-gray-600">

                    <div className="flex items-center gap-2">
                      <Package size={18} />
                      {formattedQuantity}
                    </div>

                    <div className="flex items-center gap-2">
                      💰 {formattedPrice}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      {item.location || "Unknown location"}
                    </div>

                  </div>

                </div>

                <div className="flex flex-col items-start lg:items-end gap-2">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                      displayStatus
                    )}`}
                  >
                    {displayStatus}
                  </span>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    {item.requiredBy
                      ? new Date(item.requiredBy).toLocaleDateString()
                      : "No deadline set"}
                  </div>

                </div>

              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}