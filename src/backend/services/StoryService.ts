import StoryModel from '../models/Story'
import TaskModel from '../models/Task'
import { Story } from '../types'

export class StoryService {
  async fetchStories(id: string) {
    const stories = await StoryModel.find({ projectId: id })
    return stories ?? []
  }

  async addStory(story: Story) {
    const newStory = new StoryModel(story)

    return await newStory.save()
  }

  async deleteStory(id: string) {
    const story = await StoryModel.deleteOne({ id })
    return story
  }

  async deleteStories(projectId: string) {
    const storyModels = await StoryModel.find({ projectId: projectId })
    const storyIds = storyModels.map(story => story.id)

    const stories = await StoryModel.deleteMany({ projectId })

    await TaskModel.deleteMany({ storyId: { $in: storyIds } })

    return stories
  }

  async updateStory(id: string, story: Partial<Story>) {
    const { title, description, priority, state } = story
    return await StoryModel.updateOne(
      { id },
      { title, description, priority, state },
      { new: true, runValidators: true }
    )
  }
}
