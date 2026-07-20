"use client";

import {
  CheckCircle2,
  Wallet,
  Sprout,
} from "lucide-react";

const activities = [
  {
    title: "Contract Completed",
    description: "Sold Wheat to FreshMart Pvt Ltd",
    date: "Today",
    icon: CheckCircle2,
    color: "text-green-600",
  },
  {
    title: "Payment Received",
    description: "₹25,000 credited successfully",
    date: "2 days ago",
    icon: Wallet,
    color: "text-orange-600",
  },
  {
    title: "New Crop Listed",
    description: "Tomato added for sale",
    date: "1 week ago",
    icon: Sprout,
    color: "text-blue-600",
  },
];


export default function FarmerActivity() {

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h2 className="text-xl font-bold mb-6">
        Recent Activity
      </h2>


      <div className="space-y-6">

        {activities.map((item, index) => {

          const Icon = item.icon;

          return (
            <div 
              key={index}
              className="flex gap-4"
            >

              <div className="mt-1">
                <Icon 
                  size={28}
                  className={item.color}
                />
              </div>


              <div className="border-l-2 pl-5 pb-4">

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <span className="text-sm text-gray-400">
                    {item.date}
                  </span>

                </div>


                <p className="text-gray-500 text-sm mt-1">
                  {item.description}
                </p>

              </div>


            </div>
          );

        })}

      </div>

    </div>
  );
}