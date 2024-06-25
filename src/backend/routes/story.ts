import express from 'express'
import StoryController from '../controllers/StoryController'

const router = express.Router()
const storyController = new StoryController()

router.get('/stories/:id', storyController.fetchStories)
router.post('/stories', storyController.addStory)
router.delete('/stories/:id', storyController.deleteStory)
router.patch('/stories/:id', storyController.updateStory)

export { router as StoryRouter }
