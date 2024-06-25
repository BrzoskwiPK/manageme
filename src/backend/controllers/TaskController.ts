import { Request, Response } from 'express'
import { TaskService } from '../services/TaskService'

class TaskController {
  taskService: TaskService = new TaskService()

  fetchTasks = async (req: Request, res: Response) => {
    try {
      const tasks = await this.taskService.fetchTasks(req.params.id)

      res.send(tasks)
    } catch (error) {
      console.error('Error fetching tasks: ', error)
      res.status(500).send({ message: 'Failed to fetch tasks' })
    }
  }

  addTask = async (req: Request, res: Response) => {
    try {
      await this.taskService.addTask(req.body)
      res.status(201).send({ message: 'Task added successfully' })
    } catch (error) {
      console.error('Error adding task: ', error)
      res.status(500).send({ message: 'Failed to add task' })
    }
  }

  updateTask = async (req: Request, res: Response) => {
    try {
      await this.taskService.updateTask(req.params.id, req.body)
      res.status(200).send({ message: 'Task updated' })
    } catch (error) {
      console.error('Error updating task: ', error)
      res.status(500).send({ message: 'Failed to update task' })
    }
  }

  deleteTask = async (req: Request, res: Response) => {
    try {
      const task = await this.taskService.deleteTask(req.params.id)

      if (task.acknowledged) {
        res.status(204).send({ message: 'Task deleted' })
      } else {
        res.status(404).send({ message: 'Task not found' })
      }
    } catch (error) {
      console.error('Error deleting task: ', error)
      res.status(500).send({ message: 'Failed to delete task' })
    }
  }
}

export default TaskController
