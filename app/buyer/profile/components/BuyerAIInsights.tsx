"use client";

import {
Brain,
TrendingUp,
AlertTriangle,
Calendar,
} from "lucide-react";
import { useLanguage } from '@/components/LanguageContext'

export default function BuyerAIInsights() {
const { t } = useLanguage();

const insights = [
{
icon: TrendingUp,
title: t("highDemandAlert"),
description: t("wheatDemandIncrease"),
color: "bg-green-100 text-green-700",
},
{
icon: AlertTriangle,
title: t("pricePrediction"),
description: t("tomatoPriceIncrease"),
color: "bg-orange-100 text-orange-700",
},
{
icon: Calendar,
title: t("bestProcurementTime"),
description: t("bookContracts"),
color: "bg-blue-100 text-blue-700",
},
];

return ( <div className="rounded-2xl border bg-white p-6 shadow-sm">
{/* Header */} <div className="mb-6 flex items-center gap-3"> <div className="rounded-xl bg-green-100 p-3"> <Brain
         className="text-green-700"
         size={26}
       /> </div>

```
    <div>
      <h2 className="text-2xl font-bold text-gray-900">
        {t("buyerAIInsightsTitle")}
      </h2>

      <p className="text-sm text-gray-500">
        {t("buyerAIInsightsSubtitle")}
      </p>
    </div>
  </div>

  {/* Insights Grid */}
  <div className="grid gap-5 md:grid-cols-3">
    {insights.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className="rounded-xl border p-5 transition hover:shadow-md"
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
          >
            <Icon size={24} />
          </div>

          <h3 className="mt-4 text-lg font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-2 text-gray-600">
            {item.description}
          </p>
        </div>
      );
    })}
  </div>
</div>
);
}
