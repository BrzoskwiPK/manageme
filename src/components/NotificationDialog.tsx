import { useEffect } from 'react'
import { notificationService } from '../services/notifications'
import { Priority } from '../types/types'
import toast, { Toaster } from 'react-hot-toast'
import { Notification } from '../types/types'
import { map, filter } from 'rxjs'

const NotificationDialog: React.FC = () => {
  useEffect(() => {
    const subscription = notificationService
      .list()
      .pipe(
        map((notifications: Notification[]) => {
          const latestNotification = notifications[notifications.length - 1]
          return latestNotification
        }),
        filter((notification: Notification) =>
          [Priority.MEDIUM, Priority.HIGH].includes(notification.priority)
        )
      )
      .subscribe((latestNotification: Notification) => {
        renderToast(latestNotification)
      })

    return () => subscription.unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderToast = (notification: Notification) => {
    toast(
      <div>
        <strong>{notification.title}</strong> {notification.message}
      </div>,
      {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
          background: '#FFFAE5',
        },
      }
    )
  }

  return <Toaster position='bottom-right' reverseOrder={false} />
}

export default NotificationDialog
