import { FC } from 'react'
import { State, Story } from '../types/types'
import StoryCard from './StoryCard'

interface StoryColumnProps {
  state: State
  stories: Story[] | undefined
  showTasks: (storyId: string) => void
  openModal: (type: 'add' | 'edit', storyId?: string) => void
  deleteStory: (storyId: string) => void
}

const StoryColumn: FC<StoryColumnProps> = ({
  state,
  stories,
  showTasks,
  openModal,
  deleteStory,
}) => {
  return (
    <div className='mb-6 w-full md:w-[30%]'>
      <div className='bg-gray-200 p-2 rounded-t-lg'>
        <h2 className='text-xl font-bold mb-2'>{state}</h2>
      </div>
      <div className='space-y-4'>
        {stories?.map(story => (
          <StoryCard
            key={story.id}
            story={story}
            showTasks={showTasks}
            openModal={openModal}
            deleteStory={deleteStory}
          />
        ))}
      </div>
    </div>
  )
}

export default StoryColumn
