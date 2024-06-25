import mongoose, { model } from 'mongoose'
import { ISOString, Priority } from '../types'

export interface INotification extends Document {
  id: string
  title: string
  message: string
  date: ISOString
  priority: Priority
  read: boolean
  owner: string
}

const notificationSchema = new mongoose.Schema<INotification>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: String, required: true },
  priority: { type: String, required: true, enum: Object.values(Priority) },
  read: { type: Boolean, default: false },
  owner: { type: String, required: true },
})

const NotificationModel = model<INotification>('Notification', notificationSchema)

export default NotificationModel
