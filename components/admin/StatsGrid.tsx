import {
  Users,
  ShoppingCart,
  FileText,
  IndianRupee,
  Star,
  Truck,
} from "lucide-react";

import StatCard from "./StatCard";

import { farmers } from "@/data/farmers";
import { buyers } from "@/data/buyers";
import { contracts } from "@/data/contracts";
import { requirements } from "@/data/requirements";
import { payments } from "@/data/payments";


export default function StatsGrid() {


  const stats = [
    {
      title: "Total Farmers",
      value: farmers.length.toString(),
      icon: Users,
      color: "bg-green-100",
      iconColor: "text-green-700",
    },

    {
      title: "Total Buyers",
      value: buyers.length.toString(),
      icon: ShoppingCart,
      color: "bg-blue-100",
      iconColor: "text-blue-700",
    },


    {
      title: "Active Contracts",
      value: contracts.length.toString(),
      icon: FileText,
      color: "bg-yellow-100",
      iconColor: "text-yellow-700",
    },


    {
      title: "Total Payments",
      value: payments.length.toString(),
      icon: IndianRupee,
      color: "bg-emerald-100",
      iconColor: "text-emerald-700",
    },


    {
      title: "Verified Farmers",
      value: farmers.filter(
        (item) => item.status === "Verified"
      ).length.toString(),
      icon: Star,
      color: "bg-purple-100",
      iconColor: "text-purple-700",
    },


    {
      title: "Requirements",
      value: requirements.length.toString(),
      icon: Truck,
      color: "bg-orange-100",
      iconColor: "text-orange-700",
    },

  ];



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {stats.map((item, index) => (

        <StatCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
          color={item.color}
          iconColor={item.iconColor}
        />

      ))}

    </div>
  );
}
