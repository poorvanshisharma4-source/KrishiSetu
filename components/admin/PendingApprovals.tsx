import {
  UserCheck,
  ShoppingBag,
  FileClock,
  AlertTriangle,
} from "lucide-react";

import { farmers } from "@/data/farmers";
import { buyers } from "@/data/buyers";
import { contracts } from "@/data/contracts";
import { requirements } from "@/data/requirements";


export default function PendingApprovals() {


  const approvals = [

    {
      title: "Farmer Verifications",
      pending: farmers.filter(
        (item) => item.status === "Pending"
      ).length,
      icon: UserCheck,
      color: "bg-green-100 text-green-700",
    },


    {
      title: "Buyer Verifications",
      pending: buyers.filter(
        (item) => item.status === "Pending"
      ).length,
      icon: ShoppingBag,
      color: "bg-blue-100 text-blue-700",
    },


    {
      title: "Pending Contracts",
      pending: contracts.filter(
        (item) => item.status === "Pending"
      ).length,
      icon: FileClock,
      color: "bg-yellow-100 text-yellow-700",
    },


    {
      title: "Pending Requirements",
      pending: requirements.filter(
        (item) => item.status === "Pending"
      ).length,
      icon: AlertTriangle,
      color: "bg-red-100 text-red-700",
    },

  ];



  return (
    <div className="mt-10 bg-white rounded-3xl shadow-sm p-6">

      <h2 className="text-2xl font-bold text-[#2E7D32] mb-6">
        Pending Approvals
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


        {approvals.map((item, index) => {

          const Icon = item.icon;


          return (

            <div
              key={index}
              className="flex items-center justify-between p-5 rounded-2xl border hover:border-[#2E7D32] transition-all"
            >


              <div className="flex items-center gap-4">


                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
                >

                  <Icon className="w-6 h-6" />

                </div>


                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>


                  <p className="text-sm text-gray-500">
                    {item.pending} Pending
                  </p>


                </div>


              </div>


              <button className="bg-[#2E7D32] text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
                Review
              </button>


            </div>

          );

        })}


      </div>


    </div>
  );
}