import express, { Request, Response } from 'express'
import Project from '../models/Project'

const router = express.Router()

router.get('/projects', async (_: Request, res: Response) => {
  try {
    const projects = await Project.find()
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch projects' })
  }
})

router.get('/projects/:projectId', async (req: Request, res: Response) => {
  const projectId = req.params.projectId
  try {
    const project = await Project.findOne({ id: projectId })
    if (project) {
      res.status(200).json(project)
    } else {
      res.status(404).json({ message: 'Project not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch project' })
  }
})

router.post('/projects', async (req: Request, res: Response) => {
  const { id, name, description } = req.body

  try {
    const project = new Project({ id, name, description, current: false })
    await project.save()
    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ message: 'Failed to create project' })
  }
})

router.delete('/projects/:projectId', async (req: Request, res: Response) => {
  const projectId = req.params.projectId
  try {
    const deletedProject = await Project.deleteOne({ id: projectId })

    if (deletedProject) {
      res.status(200).json(deletedProject)
    } else {
      res.status(404).json({ message: 'Project not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete project' })
  }
})

router.patch('/projects/:projectId', async (req: Request, res: Response) => {
  const projectId = req.params.projectId
  const { name, description, current } = req.body
  try {
    const updatedProject = await Project.updateOne(
      { id: projectId },
      { name, description, current },
      { new: true }
    )
    if (updatedProject) {
      res.status(200).json(updatedProject)
    } else {
      res.status(404).json({ message: 'Project not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update project' })
  }
})

router.patch('/projects/:projectId/current', async (req: Request, res: Response) => {
  const projectId = req.params.projectId

  try {
    await Project.updateMany({}, { current: false })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update projects' })
  }

  try {
    const updatedProject = await Project.updateOne(
      { id: projectId },
      { current: true },
      { new: true }
    )

    if (updatedProject) {
      return res.status(200).json(updatedProject)
    } else {
      return res.status(404).json({ message: 'Project not found' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update project' })
  }
})

export { router as ProjectRouter }
