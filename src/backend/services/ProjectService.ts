import ProjectModel from '../models/Project'
import { Project } from '../types'

export class ProjectService {
  async fetchProjects() {
    const project = await ProjectModel.find()

    return project ?? []
  }

  async fetchProject(id: string) {
    const project = await ProjectModel.findOne({ id })

    return project ?? null
  }

  async addProject({ id, name, description, current }: Project) {
    await ProjectModel.create({ id, name, description, current })
  }

  async deleteProject(id: string) {
    const project = await ProjectModel.deleteOne({ id })
    return project
  }

  async updateProject(id: string, { name, description, current }: Partial<Project>) {
    await ProjectModel.updateOne({ id }, { name, description, current }, { new: true })
  }

  async setCurrentProject(id: string) {
    await ProjectModel.updateMany({}, { current: false })
    await ProjectModel.updateOne({ id }, { current: true })
  }
}
