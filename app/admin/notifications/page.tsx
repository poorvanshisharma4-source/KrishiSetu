"use client";

import { useState } from "react";
import { notifications as notificationData } from "@/data/notifications";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function NotificationsPage() {

  const [notifications, setNotifications] = useState(notificationData);



  const unreadCount = notifications.filter(
    (item) => item.status === "Unread"
  ).length;



  const markAsRead = (id: string) => {

    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Read",
            }
          : item
      )
    );

  };



  return (
  <div className="p-6">

    <Link
      href="/admin/dashboard"
      className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-green-700 font-medium mb-4"
    >
      <ArrowLeft className="w-5 h-5" />
      Back to Dashboard
    </Link>

    <h1 className="text-3xl font-bold text-gray-800">
      Notifications
    </h1>

    <p className="mt-2 text-gray-600">
      Manage all admin notifications here.
    </p>
    


      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">


        <div className="bg-white border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Total Notifications
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {notifications.length}
          </h2>

        </div>



        <div className="bg-white border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Unread Notifications
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {unreadCount}
          </h2>

        </div>


      </div>




      {/* Notification List */}


      <div className="mt-8 space-y-4">


        {notifications.map((notification) => (


          <div
            key={notification.id}
            className="bg-white border rounded-xl p-5 shadow-sm"
          >


            <div className="flex justify-between items-start">


              <div>


                <h2 className="text-lg font-semibold text-gray-800">
                  {notification.title}
                </h2>


                <p className="mt-2 text-gray-600">
                  {notification.message}
                </p>


                <p className="mt-3 text-sm text-gray-400">
                  {notification.time}
                </p>


              </div>



              <div className="flex flex-col items-end gap-3">


                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    notification.status === "Unread"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {notification.status}
                </span>



                {notification.status === "Unread" && (

                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="bg-[#2E7D32] text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700"
                  >
                    Mark as Read
                  </button>

                )}



              </div>



            </div>


          </div>


        ))}


      </div>



    </div>
  );
}