import { Schema, model } from 'mongoose'

export interface IProject extends Document {
  id: string
  name: string
  description: string
  current: boolean
}

const projectSchema = new Schema<IProject>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  current: { type: Boolean, required: true, default: false },
})

const ProjectModel = model<IProject>('Project', projectSchema)

export default ProjectModel
