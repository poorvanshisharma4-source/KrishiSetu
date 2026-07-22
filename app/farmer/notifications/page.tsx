'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Bell, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Sprout, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

export default function FarmerNotificationsPage() {
  const router = useRouter();

  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: Sprout,
      title: "New Buyer Match Found 🌱",
      message: "FreshMart Pvt Ltd is looking for 20 Quintals of Wheat near your location.",
      time: "15 minutes ago",
      unread: true,
      path: "/farmer/buyer-requirements",
    },
    {
      id: 2,
      icon: MessageSquare,
      title: "New Requirement Request Received 📩",
      message: "Anil Sharma sent a request to connect regarding your Organic Tomato crop.",
      time: "1 hour ago",
      unread: true,
      path: "/farmer/incoming-requests",
    },
    {
      id: 3,
      icon: DollarSign,
      title: "Advance Payment Received 💰",
      message: "Advance of ₹25,000 released for Wheat Contract #KC-8921.",
      time: "Yesterday",
      unread: false,
      path: "/farmer/my-contracts",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Mandi Price Alert 📈",
      message: "AI Alert: Potato market rates in your district increased by 8% today.",
      time: "2 days ago",
      unread: false,
      path: "/farmer/ai-analytics",
    },
    {
      id: 5,
      icon: CheckCircle2,
      title: "Contract Successfully Signed ✅",
      message: "AgriCorp Ltd signed the contract for Soybean harvest 2026.",
      time: "3 days ago",
      unread: false,
      path: "/farmer/my-contracts",
    },
  ]);

  const unreadCount = notifications.filter((item) => item.unread).length;

  // Filtered List
  const displayedNotifications = filter === 'unread' 
    ? notifications.filter(item => item.unread) 
    : notifications;

  const markAllAsRead = () => {
    setNotifications(notifications.map(item => ({ ...item, unread: false })));
  };

  const handleNotificationClick = (id: number, path: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
    router.push(path);
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative bg-emerald-50 p-3.5 rounded-2xl">
            <Bell className="text-emerald-600 w-6 h-6" />
            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[11px] font-extrabold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                {unreadCount}
              </span>
            )}
          </div>

          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              Farmer Notifications
            </h1>
            <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">
              Stay updated with buyers, payments, and AI market alerts.
            </p>
          </div>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-xs sm:text-sm text-emerald-700 font-bold hover:text-emerald-800 hover:underline bg-emerald-50 px-3.5 py-2 rounded-xl transition-colors self-start sm:self-auto"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'all'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          All ({notifications.length})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'unread'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Unread ({unreadCount})
        </button>
      </div>

      {/* Notifications Cards Container */}
      <div className="space-y-3.5">
        {displayedNotifications.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100">
            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-base font-bold text-gray-700">No unread notifications!</p>
            <p className="text-xs text-gray-400 mt-1">You are all caught up with your updates.</p>
          </div>
        ) : (
          displayedNotifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => handleNotificationClick(item.id, item.path)}
                className={`rounded-2xl p-5 border shadow-sm flex items-start gap-4 cursor-pointer hover:shadow-md transition-all ${
                  item.unread
                    ? "bg-emerald-50/60 border-emerald-200"
                    : "bg-white border-gray-100"
                }`}
              >
                {/* Icon Wrapper */}
                <div className={`p-3 rounded-xl shrink-0 ${
                  item.unread ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-600"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-bold text-gray-900 text-base truncate">
                      {item.title}
                    </h2>

                    {item.unread && (
                      <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-extrabold shrink-0">
                        NEW
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {item.message}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[11px] text-gray-400 font-medium">
                      {item.time}
                    </span>

                    {item.unread && (
                      <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 hover:underline">
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}