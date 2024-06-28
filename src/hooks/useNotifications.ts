import { FormEvent, useEffect, useState } from 'react'
import { notificationService } from '../services/notifications'
import { Notification } from '../types/types'

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState<number>(0)

  useEffect(() => {
    const notificationSubscription = notificationService
      .list()
      .subscribe((notifications: Notification[]) => setNotifications(notifications))

    const unreadCountSubscription = notificationService
      .unreadCount()
      .subscribe((count: number) => setUnreadCount(count))

    return () => {
      notificationSubscription.unsubscribe()
      unreadCountSubscription.unsubscribe()
    }
  }, [])

  const markNotificationAsRead = (_: FormEvent, notification: Notification) => {
    notificationService.markAsRead(notification.id)
    refreshNotifications()
  }

  const refreshNotifications = () => {
    notificationService.list().subscribe((notifications: Notification[]) => {
      setNotifications(notifications)
    })
    notificationService.unreadCount().subscribe((count: number) => {
      setUnreadCount(count)
    })
  }

  return {
    notifications,
    unreadCount,
    markNotificationAsRead,
    refreshNotifications,
  }
}
