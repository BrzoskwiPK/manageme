import TaskModel from '../models/Task'
import { Task } from '../types'

export class TaskService {
  async fetchTasks(id: string) {
    const tasks = await TaskModel.find({ storyId: id })
    return tasks ?? []
  }

  async addTask(task: Task) {
    const newTask = new TaskModel(task)

    newTask.save()
  }

  async updateTask(id: string, task: Partial<Task>) {
    await TaskModel.updateOne({ id }, { task }, { new: true, runValidators: true })
  }

  async deleteTask(id: string) {
    const task = await TaskModel.deleteOne({ id })
    return task
  }
}
