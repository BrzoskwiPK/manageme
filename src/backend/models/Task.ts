import { Schema, model } from 'mongoose'
import { Priority, State } from '../types'

interface ITask extends Document {
  id: string
  name: string
  description: string
  priority: Priority
  storyId: string
  estimatedTime: number
  state: State
  createdAt: Date
  startedAt?: Date
  finishedAt?: Date
  responsibleUser?: string
}

const taskSchema = new Schema<ITask>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, enum: Object.values(Priority), required: true },
  storyId: { type: String, required: true },
  estimatedTime: { type: Number, required: true },
  state: { type: String, enum: Object.values(State), required: true },
  createdAt: { type: Date, default: Date.now },
  startedAt: Date,
  finishedAt: Date,
  responsibleUser: { type: String },
})

const TaskModel = model<ITask>('Task', taskSchema)

export default TaskModel
