"use client";

import { useEffect, useState } from "react";
import { Package, Calendar, MapPin } from "lucide-react";
import api from "@/lib/api";
import { useLanguage } from '@/components/LanguageContext'

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
const { t } = useLanguage();

const [requirements, setRequirements] = useState<RequirementItem[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
let isMounted = true;
const fetchRequirements = async () => {
  try {
    setLoading(true);

    const response = await api.get("/requirements");
    const rawData = response?.data ?? response;
    const data =
      rawData?.data ||
      rawData?.requirements ||
      rawData ||
      [];

    if (isMounted) {
      setRequirements(Array.isArray(data) ? data : []);
      setError(null);
    }
  } catch (err: any) {
    if (isMounted) {
      setError(err?.message || t("couldNotLoadRequirements"));
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

}, [t]);

const getStatusColor = (status: string) => {
switch (status) {
case "Active":
return "bg-green-100 text-green-700";

  case "Completed":
    return "bg-blue-100 text-blue-700";

  case "Cancelled":
    return "bg-red-100 text-red-700";

  default:
    return "bg-amber-100 text-amber-700";
}

};

const getTranslatedStatus = (status: string) => {
switch (status) {
case "Completed":
return t("completed");

  case "Cancelled":
    return t("cancelled");

  default:
    return t("active");
}

};

return ( <div className="bg-white rounded-2xl border shadow-sm p-6"> <div className="flex items-center justify-between mb-6"> <h2 className="text-2xl font-bold text-gray-800">
{t("currentBuyingRequirements")} </h2>
    <span className="text-sm text-gray-500">
      {requirements.length} {t("activeRecords")}
    </span>
  </div>

  {loading ? (
    <div className="py-10 text-center text-gray-500">
      {t("loadingRequirements")}
    </div>
  ) : error ? (
    <div className="py-10 text-center text-red-600">
      {error}
    </div>
  ) : requirements.length === 0 ? (
    <div className="py-10 text-center text-gray-500">
      {t("noRequirementsFound")}
    </div>
  ) : (
    <div className="space-y-4">
      {requirements.map((item) => {
        const formattedQuantity = `${item.quantity ?? 0} ${
          item.unit ?? "kg"
        }`;

        const formattedPrice = item.expectedPrice
          ? `₹${item.expectedPrice.toLocaleString("en-US")} / ${
              item.unit ?? "kg"
            }`
          : t("priceNotSet");

        const displayStatus =
          item.status === "fulfilled"
            ? "Completed"
            : item.status === "cancelled"
            ? "Cancelled"
            : "Active";

        return (
          <div
            key={item._id}
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">
                  🌾 {item.cropName || t("unknownCrop")}
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
                    {item.location || t("unknownLocation")}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-2">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                    displayStatus
                  )}`}
                >
                  {getTranslatedStatus(displayStatus)}
                </span>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={16} />

                  {item.requiredBy
                    ? new Date(item.requiredBy).toLocaleDateString(
                        "en-US"
                      )
                    : t("noDeadlineSet")}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )}
</div>
);
}
