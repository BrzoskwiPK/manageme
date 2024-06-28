import TaskModel from '../models/Task'
import { Task } from '../types'

export class TaskService {
  async fetchTasks(id: string) {
    const tasks = await TaskModel.find({ storyId: id })
    return tasks ?? []
  }

  async addTask(task: Task) {
    const newTask = new TaskModel(task)

    return await newTask.save()
  }

  async updateTask(id: string, task: Partial<Task>) {
    const { name, description, priority, estimatedTime, state, startedAt, responsibleUser } = task

    return await TaskModel.updateOne(
      { id },
      { name, description, priority, estimatedTime, state, startedAt, responsibleUser },
      { new: true, runValidators: true }
    )
  }

  async deleteTask(id: string) {
    const task = await TaskModel.deleteOne({ id })
    return task
  }
}
