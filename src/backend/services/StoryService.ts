import StoryModel from '../models/Story'
import { Story } from '../types'

export class StoryService {
  async fetchStories(id: string) {
    const stories = await StoryModel.find({ projectId: id })
    return stories ?? []
  }

  async addStory(story: Story) {
    const newStory = new StoryModel(story)

    await newStory.save()
  }

  async deleteStory(id: string) {
    const story = await StoryModel.deleteOne({ id })
    return story
  }

  async updateStory(id: string, story: Partial<Story>) {
    console.log(story)
    await StoryModel.updateOne({ id }, { story }, { new: true, runValidators: true })
  }
}
