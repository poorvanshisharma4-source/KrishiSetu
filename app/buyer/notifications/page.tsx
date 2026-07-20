'use client';

import { useState } from "react";
import { Bell, CheckCircle, FileText, Truck, Sprout } from "lucide-react";

export default function NotificationsPage() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: Sprout,
      title: "New Farmer Match Found 🌱",
      message: "AI found 5 farmers matching your crop requirement.",
      time: "10 minutes ago",
      unread: true,
       path: "/buyer/ai-recommendation",
    },
    {
      id: 2,
      icon: CheckCircle,
      title: "Contract Accepted ✅",
      message: "Ramesh Kumar accepted your wheat requirement.",
      time: "2 hours ago",
      unread: true,
       path: "/buyer/contracts",
    },
    {
      id: 3,
      icon: Truck,
      title: "Delivery Update 🚚",
      message: "Your crop order is ready for pickup.",
      time: "Yesterday",
      unread: false,
      path: "/buyer/active-orders",
    },
    {
      id: 4,
      icon: FileText,
      title: "New Requirement Created",
      message: "Your rice procurement request is active.",
      time: "2 days ago",
      unread: false,
       path: "/buyer/post-requirement",
    },
  ]);

  const unreadCount = notifications.filter(
  (item) => item.unread
).length;


  return (
    <div className="min-h-screen bg-[#F8F6F0] p-8">

      {/* Header */}
    
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">

        <div className="relative bg-green-100 p-3 rounded-xl">
          <Bell className="text-green-700" />
          {unreadCount > 0 && (
  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
    {unreadCount}
  </span>
)}
       </div>


        <div>
          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <p className="text-gray-500">
            Stay updated with your KrishiSetu activities.
          </p>
        </div>
        <button
          onClick={() =>
            setNotifications(
              notifications.map((item)=>({
                ...item,
                unread:false
              }))
            )
          }
          className="text-sm text-green-700 font-semibold hover:underline"
        >
          Mark all as read
        </button>
        </div>
        

  

</div>

      


      {/* Notification Cards */}
      <div className="space-y-4 max-w-3xl">

        {notifications.map((item)=>{

          const Icon = item.icon;

          return (

            <div
  key={item.id}
  onClick={() => {
  setNotifications(
    notifications.map((notification) =>
      notification.id === item.id
        ? { ...notification, unread: false }
        : notification
    )
  );

  window.location.href = item.path;
}}
  className={`${item.unread ? "bg-green-50" : "bg-white"} rounded-2xl p-5 border shadow-sm flex gap-4 cursor-pointer hover:shadow-md transition ${
    item.unread 
    ? "border-green-200"
    : "border-gray-100"
  }`}
>

              <div className="bg-green-50 p-3 rounded-xl h-fit">
                <Icon className="text-green-700"/>
              </div>


              <div>

                <div className="flex items-center gap-2">

  <h2 className="font-semibold text-lg">
    {item.title}
  </h2>

  {item.unread && (
    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
      New
    </span>
  )}

</div>

                <p className="text-gray-600 text-sm mt-1">
                  {item.message}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  {item.time}
                </p>

                {item.unread && (
  <p className="text-sm text-green-700 font-semibold mt-3">
    View Details →
  </p>
)}

              </div>

            </div>

          )

        })}

      </div>


    </div>
  );
}