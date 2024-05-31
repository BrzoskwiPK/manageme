import express, { Request, Response } from 'express'
import TaskModel from '../models/Task'

const router = express.Router()

router.get('/tasks/:id', async (req: Request, res: Response) => {
  try {
    const tasks = await TaskModel.find({ storyId: req.params.id })

    if (!tasks) {
      res.status(404).send()
    } else {
      res.send(tasks)
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/tasks', async (req: Request, res: Response) => {
  try {
    const task = new TaskModel(req.body)
    await task.save()
    res.status(201).send(task)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.patch('/tasks/:id', async (req: Request, res: Response) => {
  const {
    name,
    description,
    priority,
    estimatedTime,
    state,
    startedAt,
    finishedAt,
    responsibleUser,
  } = req.body
  try {
    const task = await TaskModel.updateOne(
      { id: req.params.id },
      { name, description, priority, estimatedTime, state, startedAt, finishedAt, responsibleUser },
      {
        new: true,
        runValidators: true,
      }
    )
    if (!task) {
      res.status(404).send()
    } else {
      res.send(task)
    }
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete('/tasks/:id', async (req: Request, res: Response) => {
  try {
    const task = await TaskModel.deleteOne({ id: req.params.id })
    if (!task) {
      res.status(404).send()
    } else {
      res.send(task)
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

export { router as TaskRouter }
