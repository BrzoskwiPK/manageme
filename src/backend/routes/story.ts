import express, { Request, Response } from 'express'
import Story from '../models/Story'

const router = express.Router()

router.get('/stories/:id', async (req: Request, res: Response) => {
  try {
    const stories = await Story.find({ projectId: req.params.id })
    res.status(200).send(stories)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/stories', async (req: Request, res: Response) => {
  try {
    const story = new Story(req.body)
    await story.save()
    res.status(201).send(story)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.delete('/stories/:id', async (req: Request, res: Response) => {
  try {
    const story = await Story.deleteOne({ id: req.params.id })
    if (!story) {
      return res.status(404).send()
    }
    res.status(200).send(story)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.patch('/stories/:id', async (req: Request, res: Response) => {
  try {
    const story = await Story.updateOne({ id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!story) {
      return res.status(404).send()
    }
    res.status(200).send(story)
  } catch (error) {
    res.status(400).send(error)
  }
})

export { router as StoryRouter }
