"use client";

import {
  FileText,
  Wallet,
  Star,
  Users,
  CheckCircle2,
} from "lucide-react";


const stats = [
  {
    title: "Active Contracts",
    value: "4",
    description: "Currently running",
    color: "bg-green-50",
    icon: FileText,
    iconColor: "text-green-600",
  },
  {
    title: "Completed Contracts",
    value: "12",
    description: "Successfully delivered",
    color: "bg-orange-50",
    icon: CheckCircle2,
    iconColor: "text-orange-600",
  },
  {
    title: "Total Earnings",
    value: "₹1,24,500",
    description: "Lifetime income",
    color: "bg-blue-50",
    icon: Wallet,
    iconColor: "text-blue-600",
  },
  {
    title: "Buyer Rating",
    value: "4.8 / 5",
    description: "Based on reviews",
    color: "bg-yellow-50",
    icon: Star,
    iconColor: "text-yellow-600",
  },
  {
    title: "Connected Buyers",
    value: "7",
    description: "Trusted partners",
    color: "bg-purple-50",
    icon: Users,
    iconColor: "text-purple-600",
  },
];


export default function FarmerStats() {

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mt-6">

      {stats.map((item, index) => {

        const Icon = item.icon;


        return (

          <div
            key={index}
            className="
              bg-white 
              rounded-2xl 
              border 
              shadow-sm 
              p-4 sm:p-5
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            <div className="flex items-start justify-between">


              <div>

                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>


                <h2 className="text-2xl font-bold mt-2">
                  {item.value}
                </h2>


                <p className="text-xs text-gray-400 mt-2">
                  {item.description}
                </p>

              </div>



              <div className={`${item.color} p-3 rounded-xl`}>

                <Icon
                  className={item.iconColor}
                  size={30}
                />

              </div>


            </div>


          </div>

        );

      })}

    </div>

  );

}