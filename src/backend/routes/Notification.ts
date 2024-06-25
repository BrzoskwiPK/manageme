import express from 'express'
import NotificationController from '../controllers/NotificationController'

const router = express.Router()
const notificationController = new NotificationController()

router.get('/notifications', notificationController.list)
router.post('/notifications', notificationController.send)
router.patch('/notifications/:id', notificationController.markAsRead)

export { router as NotificationRouter }
