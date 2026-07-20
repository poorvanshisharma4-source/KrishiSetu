"use client";

import {
  Brain,
  TrendingUp,
  AlertTriangle,
  Calendar,
} from "lucide-react";

export default function BuyerAIInsights() {
  const insights = [
    {
      icon: TrendingUp,
      title: "High Demand Alert",
      description:
        "Wheat demand is expected to increase by 18% in the next 30 days.",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: AlertTriangle,
      title: "Price Prediction",
      description:
        "Tomato prices may increase due to lower expected production.",
      color: "bg-orange-100 text-orange-700",
    },
    {
      icon: Calendar,
      title: "Best Procurement Time",
      description:
        "Book contracts within the next 7 days for better pricing.",
      color: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-green-100 p-3 rounded-xl">
          <Brain className="text-green-700" size={26} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            AI Market Insights
          </h2>

          <p className="text-gray-500 text-sm">
            Personalized recommendations powered by KrishiSetu AI
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-5">

        {insights.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 hover:shadow-md transition"
          >

            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
            >
              <item.icon size={24} />
            </div>

            <h3 className="font-bold text-lg mt-4">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}