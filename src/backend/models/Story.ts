import mongoose, { model } from 'mongoose'
import { Priority, State } from '../types'

export interface IStory extends Document {
  id: string
  title: string
  description: string
  priority: Priority
  projectId: string
  created: Date
  state: State
  owner: string
}

const storySchema = new mongoose.Schema<IStory>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true, enum: Object.values(Priority) },
  projectId: { type: String, required: true },
  created: { type: Date, required: true, default: Date.now },
  state: { type: String, required: true, enum: Object.values(State), default: State.TODO },
  owner: { type: String, required: true },
})

const StoryModel = model<IStory>('Story', storySchema)

export default StoryModel
