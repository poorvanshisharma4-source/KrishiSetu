

'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { 
  Bell, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Sprout, 
  MessageSquare,
  ArrowRight,
  Loader2
} from "lucide-react";

interface NotificationItem {
  _id: string;
  icon?: any;
  title: string;
  message: string;
  time: string;
  unread: boolean;
  path: string;
}

export default function FarmerNotificationsPage() {
  const router = useRouter();

  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [loading, setLoading] = useState<boolean>(true);

  
    
      

  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await api.get('/notifications');
      
      if (res.data?.success) {
  const mappedData: NotificationItem[] = (res.data.data || []).map((item: any) => ({
    _id: item._id,
    title: item.title || "New Notification",
    message: item.message || "",
    unread: item.isRead === false,
    time: new Date(item.createdAt).toLocaleString("en-IN"),
    path: item.path || "/farmer/dashboard",
    icon: getIconByType(item.type),
  }));

  setNotifications(mappedData);
} else {
  setNotifications([]);
}
 } catch (err) {
   console.error("Notifications fetch error:", err);
   setNotifications([]);
}finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Helper to attach dynamic icons based on type
  const getIconByType = (type?: string) => {
    switch (type) {
      case 'payment': return DollarSign;
      case 'contract': return CheckCircle2;
      case 'message': return MessageSquare;
      case 'market': return TrendingUp;
      default: return Sprout;
    }
  };

  const unreadCount = notifications.filter((item) => item.unread).length;

  const displayedNotifications = filter === 'unread' 
    ? notifications.filter(item => item.unread) 
    : notifications;

  const markAllAsRead = async () => {
    try {
      setNotifications(notifications.map(item => ({ ...item, unread: false })));
      await api.put('/notifications/read-all');
    } catch (err) {
      console.error("Mark all as read failed:", err);
    }
  };

  const handleNotificationClick = async (id: string, path: string) => {
    try {
      setNotifications(
        notifications.map((n) => (n._id === id ? { ...n, unread: false } : n))
      );
      await api.put(`/notifications/${id}/read`);
    } catch (err) {
      console.error("Mark as read failed:", err);
    } finally {
      router.push(path);
    }
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
            className="text-xs sm:text-sm text-emerald-700 font-bold hover:text-emerald-800 hover:underline bg-emerald-50 px-3.5 py-2 rounded-xl transition-colors self-start sm:self-auto cursor-pointer"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          All ({notifications.length})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'unread'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Unread ({unreadCount})
        </button>
      </div>

      {/* Notifications Cards Container */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-gray-100">
          <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
          <p className="text-xs text-gray-500 font-medium mt-3">Fetching notifications...</p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {displayedNotifications.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-base font-bold text-gray-700">No notifications found!</p>
              <p className="text-xs text-gray-400 mt-1">You are all caught up with your updates.</p>
            </div>
          ) : (
            displayedNotifications.map((item) => {
              const Icon = item.icon || Sprout;

              return (
                <div
                  key={item._id}
                  onClick={() => handleNotificationClick(item._id, item.path)}
                  className={`rounded-2xl p-5 border shadow-sm flex items-start gap-4 cursor-pointer hover:shadow-md transition-all ${
                    item.unread
                      ? "bg-emerald-50/60 border-emerald-200"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${
                    item.unread ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-600"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

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
      )}

    </div>
  );
}