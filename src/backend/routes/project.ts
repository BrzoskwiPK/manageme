import express from 'express'
import ProjectController from '../controllers/ProjectController'

const router = express.Router()
const projectController = new ProjectController()

router.get('/projects', projectController.fetchProjects)
router.get('/projects/:projectId', projectController.fetchProject)
router.post('/projects', projectController.addProject)
router.delete('/projects/:projectId', projectController.deleteProject)
router.patch('/projects/:projectId', projectController.updateProject)
router.patch('/projects/:projectId/current', projectController.setCurrentProject)

export { router as ProjectRouter }
