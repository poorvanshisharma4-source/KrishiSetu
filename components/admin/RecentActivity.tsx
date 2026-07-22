import {
  UserPlus,
  ShoppingCart,
  FileCheck,
  IndianRupee,
} from "lucide-react";

import { farmers } from "@/data/farmers";
import { requirements } from "@/data/requirements";
import { contracts } from "@/data/contracts";
import { payments } from "@/data/payments";


export default function RecentActivity() {


  const activities = [

    {
      title: `${farmers[0]?.name || "New Farmer"} registered as a Farmer`,
      time: "Recently",
      icon: UserPlus,
      color: "bg-green-100 text-green-700",
    },


    {
      title: `${requirements[0]?.crop || "Crop"} requirement posted`,
      time: "Recently",
      icon: ShoppingCart,
      color: "bg-blue-100 text-blue-700",
    },


    {
      title: `Contract ${contracts[0]?.id || ""} created`,
      time: "Recently",
      icon: FileCheck,
      color: "bg-yellow-100 text-yellow-700",
    },


    {
      title: `${payments[0]?.amount || "Payment"} payment received`,
      time: "Recently",
      icon: IndianRupee,
      color: "bg-emerald-100 text-emerald-700",
    },

  ];



  return (
    <div className="mt-10 bg-white rounded-3xl shadow-sm p-6">

      <h2 className="text-2xl font-bold text-[#2E7D32] mb-6">
        Recent Activity
      </h2>


      <div className="space-y-5">

        {activities.map((activity, index) => {

          const Icon = activity.icon;


          return (
            <div
              key={index}
              className="flex items-center justify-between border-b last:border-none pb-4"
            >

              <div className="flex items-center gap-4">


                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${activity.color}`}
                >

                  <Icon className="w-6 h-6" />

                </div>


                <div>

                  <h3 className="font-medium text-gray-800">
                    {activity.title}
                  </h3>


                  <p className="text-sm text-gray-500">
                    {activity.time}
                  </p>


                </div>


              </div>


            </div>
          );

        })}

      </div>


    </div>
  );
}