import { FC } from 'react'
import { Story } from '../types/types'

interface StoryCardProps {
  story: Story
  showTasks: (storyId: string) => void
  openModal: (type: 'add' | 'edit', storyId?: string) => void
  deleteStory: (storyId: string) => void
}

const StoryCard: FC<StoryCardProps> = ({ story, showTasks, openModal, deleteStory }) => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg'>
      <h3 className='text-lg font-semibold mb-2'>{story.title}</h3>
      <p className='text-gray-700 mb-2'>{story.description}</p>
      <div className='flex flex-col'>
        <p className='text-sm text-gray-500'>
          <span className='font-bold'>Priority:</span> {story.priority}
        </p>
        <p className='text-sm text-gray-500'>
          <span className='font-bold'>Owner:</span> {story.owner}
        </p>
        <p className='text-sm text-gray-500'>
          <span className='font-bold'>Created At:</span>{' '}
          {new Date(story.created).toLocaleDateString()}
        </p>
      </div>
      <div className='flex justify-center gap-4 mt-4'>
        <button
          onClick={() => showTasks(story.id)}
          className='rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600'>
          SHOW TASKS
        </button>
        <button
          onClick={() => openModal('edit', story.id)}
          className='rounded-md bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600'>
          EDIT
        </button>
        <button
          onClick={() => deleteStory(story.id)}
          className='rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default StoryCard
