import { BehaviorSubject } from 'rxjs'
import { Notification } from '../types/types'
import { v4 as uuidv4 } from 'uuid'

class NotificationService {
  private notifications$ = new BehaviorSubject<Notification[]>([])
  private unreadCount$ = new BehaviorSubject<number>(0)

  send(notification: Omit<Notification, 'id'>) {
    const notifications = this.notifications$.getValue()
    this.notifications$.next([...notifications, { ...notification, id: uuidv4() }])

    if (!notification.read) this.unreadCount$.next(this.unreadCount$.getValue() + 1)
  }

  list() {
    return this.notifications$.asObservable()
  }

  unreadCount() {
    return this.unreadCount$.asObservable()
  }

  markAsRead(id: string) {
    const updatedState = this.notifications$.getValue().map(n => {
      if (n.id === id) {
        n.read = true
      }
      return n
    })

    this.notifications$.next(updatedState)
    this.unreadCount$.next(this.unreadCount$.getValue() - 1)
  }
}

export const notificationService = new NotificationService()
