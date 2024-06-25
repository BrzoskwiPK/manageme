import { Request, Response } from 'express'
import { Notification } from '../types'
import { NotificationService } from '../services/NotificationService'

class NotificationController {
  notificationService: NotificationService = new NotificationService()

  list = (_: Request, res: Response) => {
    try {
      this.notificationService.list().subscribe(notifications => {
        res.status(200).send(notifications)
      })
    } catch (error) {
      console.error('Error fetching notifications: ', error)
      res.status(500).send({ message: 'Failed to fetch notifications' })
    }
  }

  send = async (req: Request, res: Response) => {
    const { id, title, message, date, priority, read, owner } = req.body

    const newNotification: Notification = { id, title, message, date, priority, read, owner }

    try {
      await this.notificationService.send(newNotification)

      res.status(201).send({ message: 'Notification sent successfully' })
    } catch (error) {
      console.error('Error sending notification: ', error)
      res.status(500).send({ message: 'Failed to send notification' })
    }

    res.status(201).send('Notification sent')
  }

  getUnread = async (_: Request, res: Response) => {
    try {
      this.notificationService.getUnreadNotifications().subscribe(notifications => {
        res.status(200).send(notifications)
      })
    } catch (error) {
      console.error('Error fetching unread notifications: ', error)
      res.status(500).send({ message: 'Failed to fetch unread notifications' })
    }
  }

  markAsRead = async (req: Request, res: Response) => {
    const notificationId = req.params.id
    try {
      this.notificationService.markAsRead(notificationId)
    } catch (error) {
      console.error('Error marking notification as read:', error)
      res.status(500).send({ message: 'Failed to mark notification as read' })
    } finally {
      res.status(200).send('Notification marked as read')
    }
  }
}

export default NotificationController
