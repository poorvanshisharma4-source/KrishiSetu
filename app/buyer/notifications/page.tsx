'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { Bell, CheckCircle, FileText, Truck, Sprout } from 'lucide-react';

interface NotificationItem {
  _id: string;
  title: string;
  message: string;
  isRead?: boolean;
  type?: string;
  createdAt?: string;
  path?: string;
}

const getIconByType = (type?: string) => {
  switch (type) {
    case 'match':
      return Sprout;
    case 'contract':
      return CheckCircle;
    case 'delivery':
      return Truck;
    case 'requirement':
      return FileText;
    default:
      return Bell;
  }
};

export default function NotificationsPage() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await api.get('/notifications');
        const data = response?.data ?? response ?? [];
        setNotifications(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err: any) {
        console.error('Notifications fetch error:', err);
        setError(err?.message || 'Unable to load notifications.');
        setNotifications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const unreadCount = notifications.filter((item) => !item?.isRead).length;

  const handleMarkAllAsRead = async () => {
    try {
      await api.put('/notifications/read-all');
      setNotifications((current) => current.map((item) => ({ ...item, isRead: true })));
    } catch (err) {
      console.error('Mark all as read failed:', err);
    }
  };

  const handleNotificationClick = async (item: NotificationItem) => {
    try {
      if (!item.isRead) {
        await api.put(`/notifications/${item._id}/read`);
      }
      setNotifications((current) =>
        current.map((notification) =>
          notification._id === item._id
            ? { ...notification, isRead: true }
            : notification
        )
      );
    } catch (err) {
      console.error('Notification read request failed:', err);
    }

    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] p-8">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative bg-green-100 p-3 rounded-xl">
              <Bell className="text-green-700" />
              {unreadCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold">Notifications</h1>
              <p className="text-gray-500">Stay updated with your KrishiSetu activities.</p>
            </div>
          </div>

          <button
            onClick={handleMarkAllAsRead}
            className="self-start rounded-xl bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50"
          >
            Mark all as read
          </button>
        </div>

        {loading ? (
          <div className="rounded-3xl bg-white p-10 shadow-sm text-center">
            <p className="text-gray-600">Loading notifications...</p>
          </div>
        ) : error ? (
          <div className="rounded-3xl bg-red-50 p-10 shadow-sm border border-red-200 text-center">
            <p className="text-red-700">{error}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((item) => {
              const Icon = getIconByType(item.type);
              return (
                <button
                  key={item._id}
                  onClick={() => handleNotificationClick(item)}
                  className={`w-full text-left rounded-2xl p-5 border shadow-sm transition hover:shadow-md ${
                    item.isRead ? 'bg-white border-gray-100' : 'bg-green-50 border-green-200'
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="bg-green-50 p-3 rounded-xl h-fit">
                      <Icon className="text-green-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-semibold text-lg text-gray-900">{item.title}</h2>
                        {!item.isRead && (
                          <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">New</span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{item.message}</p>
                      {item.createdAt && (
                        <p className="text-xs text-gray-400 mt-2">{new Date(item.createdAt).toLocaleString()}</p>
                      )}
                      {!item.isRead && (
                        <p className="text-sm text-green-700 font-semibold mt-3">View Details →</p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
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