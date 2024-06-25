import { FC } from 'react'
import { useStories } from '../hooks/useStories'
import { State, Story } from '../types/types'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import StoryColumn from './StoryColumn'

interface StoryListProps {
  projectId: string
  openModal: (type: 'add' | 'edit', storyId?: string) => void
}

const StoryList: FC<StoryListProps> = ({ projectId, openModal }: StoryListProps) => {
  const { stories, isLoading, error, deleteStory } = useStories(projectId)

  const navigate = useNavigate()

  if (isLoading) return <Loading />
  if (error) return <div>Error loading stories</div>

  const groupedStories: Record<State, Story[] | undefined> = {
    [State.TODO]: Array.isArray(stories)
      ? stories?.filter(story => story.state === State.TODO)
      : [],
    [State.DOING]: Array.isArray(stories)
      ? stories?.filter(story => story.state === State.DOING)
      : [],
    [State.DONE]: Array.isArray(stories)
      ? stories?.filter(story => story.state === State.DONE)
      : [],
  }

  const showTasks = (storyId: string) => {
    navigate('tasks', { state: storyId })
  }

  return (
    <div className='p-4 flex items-start justify-center gap-8 flex-wrap w-full h-full overflow-y-scroll'>
      {Object.values(State).map(state => (
        <StoryColumn
          key={state}
          state={state as State}
          stories={groupedStories[state as State]}
          showTasks={showTasks}
          openModal={openModal}
          deleteStory={deleteStory}
        />
      ))}
    </div>
  )
}

export default StoryList
