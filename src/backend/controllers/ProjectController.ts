import { ProjectService } from '../services/ProjectService'
import { Request, Response } from 'express'

class ProjectController {
  projectsService: ProjectService = new ProjectService()

  fetchProjects = async (_: Request, res: Response) => {
    try {
      const projects = await this.projectsService.fetchProjects()
      res.status(200).send(projects)
    } catch (error) {
      console.error('Error fetching projects: ', error)
      res.status(500).send({ message: 'Failed to fetch projects' })
    }
  }

  fetchProject = async (req: Request, res: Response) => {
    try {
      const project = await this.projectsService.fetchProject(req.params.projectId)
      if (project !== null) res.status(200).json(project)
      else res.status(404).json({ message: 'Project not found' })
    } catch (error) {
      console.error('Error fetching project: ', error)
      res.status(500).send({ message: 'Failed to fetch project' })
    }
  }

  addProject = async (req: Request, res: Response) => {
    const { id, name, description } = req.body

    try {
      const project = await this.projectsService.addProject({
        id,
        name,
        description,
        current: false,
      })
      res.status(201).json(project)
    } catch (error) {
      console.error('Error creating project: ', error)
      res.status(500).send({ message: 'Failed to create project' })
    }
  }

  deleteProject = async (req: Request, res: Response) => {
    try {
      const project = await this.projectsService.deleteProject(req.params.projectId)

      if (project.acknowledged) {
        res.status(204).send({ message: 'Project deleted' })
      } else {
        res.status(404).send({ message: 'Project not found' })
      }
    } catch (error) {
      console.error('Error deleting project: ', error)
      res.status(500).send({ message: 'Failed to delete project' })
    }
  }

  updateProject = async (req: Request, res: Response) => {
    const projectId = req.params.projectId
    const { name, description, current } = req.body

    try {
      await this.projectsService.updateProject(projectId, { name, description, current })
      res.status(200).send({ message: 'Project updated' })
    } catch (error) {
      console.error('Error updating project: ', error)
      res.status(500).send({ message: 'Failed to update project' })
    }
  }

  setCurrentProject = async (req: Request, res: Response) => {
    const projectId = req.params.projectId

    try {
      await this.projectsService.setCurrentProject(projectId)
      res.status(200).send({ message: 'Project set as current' })
    } catch (error) {
      console.error('Error setting as current project: ', error)
      res.status(500).send({ message: 'Failed to set as current project' })
    }
  }
}

export default ProjectController
