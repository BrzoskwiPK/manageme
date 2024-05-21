import { FC } from 'react'
import { useStories } from '../hooks/useStories'
import { State, Story } from '../types/types'

interface StoryListProps {
  projectId: string
  openModal: (type: 'add' | 'edit', storyId?: string) => void
}

const StoryList: FC<StoryListProps> = ({ projectId, openModal }: StoryListProps) => {
  const { stories, isLoading, error, deleteStory } = useStories(projectId)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading stories</div>

  const groupedStories: Record<State, Story[] | undefined> = {
    [State.TODO]: stories?.filter(story => story.state === State.TODO),
    [State.DOING]: stories?.filter(story => story.state === State.DOING),
    [State.DONE]: stories?.filter(story => story.state === State.DONE),
  }

  return (
    <div className='p-4 flex items-start justify-center gap-8 flex-wrap w-full h-full overflow-y-scroll'>
      {Object.values(State).map(state => (
        <div key={state} className='mb-6 w-full md:w-[30%]'>
          <div className='bg-gray-200 p-2 rounded-t-lg'>
            <h2 className='text-xl font-bold mb-2'>{state}</h2>
          </div>
          <div className='space-y-4'>
            {groupedStories[state as State]?.map((story: Story) => (
              <div key={story.id} className='p-4 bg-white shadow-md rounded-lg'>
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
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default StoryList
