'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'
import {
  Bell,
  CheckCircle,
  FileText,
  Truck,
  Sprout,
} from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

interface NotificationItem {
  _id: string
  title: string
  message: string
  isRead?: boolean
  type?: string
  createdAt?: string
  path?: string
}

const getIconByType = (type?: string) => {
  switch (type) {
    case 'match':
      return Sprout

    case 'contract':
      return CheckCircle

    case 'delivery':
      return Truck

    case 'requirement':
      return FileText

    default:
      return Bell
  }
}

export default function NotificationsPage() {
  const router = useRouter()
  const { t } = useLanguage()

  const [notifications, setNotifications] = useState<
    NotificationItem[]
  >([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true)

        const response = await api.get('/notifications')
        const rawData = response?.data ?? response

        const data =
          rawData?.data ||
          rawData?.notifications ||
          rawData ||
          []

        setNotifications(
          Array.isArray(data) ? data : []
        )

        setError(null)
      } catch (err: any) {
        console.error(
          'Notifications fetch error:',
          err
        )

        setError(
          err?.response?.data?.message ||
            err?.message ||
            t('notifications.error')
        )

        setNotifications([])
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()
  }, [t])

  const unreadCount = notifications.filter(
    (item) => !item.isRead
  ).length

  const handleMarkAllAsRead = async () => {
    try {
      await api.put('/notifications/read-all')

      setNotifications((current) =>
        current.map((item) => ({
          ...item,
          isRead: true,
        }))
      )
    } catch (err) {
      console.error(
        'Mark all as read failed:',
        err
      )
    }
  }

  const handleNotificationClick = async (
    item: NotificationItem
  ) => {
    try {
      if (!item.isRead) {
        await api.put(
          `/notifications/${item._id}/read`
        )

        setNotifications((current) =>
          current.map((notification) =>
            notification._id === item._id
              ? {
                  ...notification,
                  isRead: true,
                }
              : notification
          )
        )
      }
    } catch (err) {
      console.error(
        'Notification read request failed:',
        err
      )
    }

    if (item.path) {
      router.push(item.path)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F6F0] p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-4">

            {/* Notification Icon */}
            <div className="relative rounded-xl bg-green-100 p-3">
              <Bell className="text-green-700" />

              {unreadCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                  {unreadCount}
                </span>
              )}
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {t('notifications.title')}
              </h1>

              <p className="text-gray-500">
                {t('notifications.subtitle')}
              </p>
            </div>
          </div>

          {/* Mark All As Read */}
          <button
            onClick={handleMarkAllAsRead}
            disabled={unreadCount === 0}
            className="self-start rounded-xl bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t('notifications.markAllAsRead')}
          </button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <p className="text-gray-600">
              {t('notifications.loading')}
            </p>
          </div>
        ) : error ? (
          /* Error State */
          <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center shadow-sm">
            <p className="text-red-700">
              {error}
            </p>
          </div>
        ) : notifications.length === 0 ? (
          /* Empty State */
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <Bell
              size={40}
              className="mx-auto mb-4 text-gray-300"
              strokeWidth={1.5}
            />

            <p className="text-gray-600">
              {t('notifications.noNotifications')}
            </p>
          </div>
        ) : (
          /* Notifications List */
          <div className="space-y-4">

            {notifications.map((item) => {
              const Icon = getIconByType(item.type)

              return (
                <button
                  key={item._id}
                  type="button"
                  onClick={() =>
                    handleNotificationClick(item)
                  }
                  className={`w-full rounded-2xl border p-5 text-left shadow-sm transition hover:shadow-md ${
                    item.isRead
                      ? 'border-gray-100 bg-white'
                      : 'border-green-200 bg-green-50'
                  }`}
                >
                  <div className="flex gap-4">

                    {/* Icon */}
                    <div className="h-fit rounded-xl bg-green-100 p-3">
                      <Icon className="text-green-700" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">

                      {/* Title */}
                      <div className="flex flex-wrap items-center gap-2">

                        <h2 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h2>

                        {!item.isRead && (
                          <span className="rounded-full bg-green-600 px-2 py-1 text-xs text-white">
                            {t('notifications.new')}
                          </span>
                        )}
                      </div>

                      {/* Message */}
                      <p className="mt-1 text-sm text-gray-600">
                        {item.message}
                      </p>

                      {/* Time */}
                      {item.createdAt && (
                        <p className="mt-2 text-xs text-gray-400">
                          {new Date(
                            item.createdAt
                          ).toLocaleString()}
                        </p>
                      )}

                      {/* View Details */}
                      {!item.isRead && (
                        <p className="mt-3 text-sm font-semibold text-green-700">
                          {t('notifications.viewDetails')}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}