import express from 'express'
import TaskController from '../controllers/TaskController'

const router = express.Router()
const taskController = new TaskController()

router.get('/tasks/:id', taskController.fetchTasks)
router.post('/tasks', taskController.addTask)
router.patch('/tasks/:id', taskController.updateTask)
router.delete('/tasks/:id', taskController.deleteTask)

export { router as TaskRouter }
