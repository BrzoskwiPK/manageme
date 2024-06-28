import { StoryService } from '../services/StoryService'
import { Request, Response } from 'express'

class StoryController {
  storyService: StoryService = new StoryService()

  fetchStories = async (req: Request, res: Response) => {
    try {
      const stories = await this.storyService.fetchStories(req.params.id)
      res.status(200).json(stories)
    } catch (error) {
      console.error('Error fetching stories: ', error)
      res.status(500).send({ message: 'Failed to fetch stories' })
    }
  }

  addStory = async (req: Request, res: Response) => {
    try {
      const story = await this.storyService.addStory(req.body)

      res.status(201).send(story)
    } catch (error) {
      console.error('Error adding story: ', error)
      res.status(500).send({ message: 'Failed to add story' })
    }
  }

  deleteStory = async (req: Request, res: Response) => {
    try {
      const story = await this.storyService.deleteStory(req.params.id)

      if (story.acknowledged) {
        res.status(204).send(story)
      } else {
        res.status(404).send({ message: 'Story not found' })
      }
    } catch (error) {
      console.error('Error deleting story: ', error)
      res.status(500).send({ message: 'Failed to delete story' })
    }
  }

  updateStory = async (req: Request, res: Response) => {
    try {
      const story = await this.storyService.updateStory(req.params.id, req.body)
      res.status(200).send(story)
    } catch (error) {
      console.error('Error updating story: ', error)
      res.status(500).send({ message: 'Failed to update story' })
    }
  }
}

export default StoryController
