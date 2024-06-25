import { BehaviorSubject, Observable, map } from 'rxjs'
import { Notification } from '../types'
import NotificationModel from '../models/Notification'

export class NotificationService {
  notificationSubject = new BehaviorSubject<Notification[]>([])
  unreadSubject: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>([])

  constructor() {
    this.fetchNotifications()
  }

  async fetchNotifications() {
    const notifications = await NotificationModel.find()

    this.notificationSubject.next(notifications)
  }

  async send(notification: Notification) {
    const newNotification = new NotificationModel(notification)

    await newNotification.save()
    await this.fetchNotifications()
  }

  list(): Observable<Notification[]> {
    return this.notificationSubject.asObservable()
  }

  getUnreadNotifications(): Observable<Notification[]> {
    return this.notificationSubject
      .asObservable()
      .pipe(map(notifications => notifications.filter(n => n.read === false)))
  }

  async markAsRead(notificationId: string) {
    await NotificationModel.findByIdAndUpdate(notificationId, { read: true })
    await this.fetchNotifications()
  }
}
