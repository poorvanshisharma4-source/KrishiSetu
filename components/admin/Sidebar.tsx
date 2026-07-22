"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { notifications } from "@/data/notifications";

import {
  Sprout,
  LayoutDashboard,
  FileText,
  ShoppingCart,
  IndianRupee,
  Bell,
} from "lucide-react";


const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    name: "Farmers",
    icon: Sprout,
    path: "/admin/farmers",
  },
  {
    name: "Buyers",
    icon: ShoppingCart,
    path: "/admin/buyers",
  },
  {
    name: "Contracts",
    icon: FileText,
    path: "/admin/contracts",
  },
  {
    name: "Requirements",
    icon: FileText,
    path: "/admin/requirements",
  },
  {
    name: "Payments",
    icon: IndianRupee,
    path: "/admin/payments",
  },
  {
    name: "Notifications",
    icon: Bell,
    path: "/admin/notifications",
  },
];


export default function Sidebar() {

  const pathname = usePathname();


  const unreadNotifications = notifications.filter(
    (item) => item.status === "Unread"
  ).length;



  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-[#0F172A] via-[#111827] to-[#0B1220] text-white p-6 flex flex-col">


      {/* Logo */}

      <div className="flex items-center gap-3">

        <div className="bg-[#2E7D32] p-2.5 rounded-full">

          <Sprout className="w-6 h-6 text-white" />

        </div>



        <div>

          <h1 className="text-2xl font-bold">

            <span className="text-white">
              Krishi
            </span>

            <span className="text-[#4CAF50]">
              Setu
            </span>

          </h1>


          <p className="text-gray-400 text-sm">
            Admin Panel
          </p>


        </div>


      </div>




      {/* Menu Items */}

      <div className="mt-10 space-y-2">


        {menuItems.map((item) => {


          const Icon = item.icon;


          const isActive = pathname.startsWith(item.path);



          return (

            <Link

              href={item.path}

              key={item.name}

              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#2E7D32] text-white"
                  : "text-gray-300 hover:bg-[#1E293B] hover:text-white"
              }`}

            >


              <Icon className="w-5 h-5" />



              <div className="flex items-center justify-between w-full">


                <span>
                  {item.name}
                </span>



                {item.name === "Notifications" &&
                  unreadNotifications > 0 && (

                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">

                    {unreadNotifications}

                  </span>

                )}



              </div>



            </Link>

          );


        })}


      </div>


    </div>
  );
}