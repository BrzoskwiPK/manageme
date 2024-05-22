import { FormEvent, useEffect, useState } from 'react'
import { useStories } from './useStories'
import { Priority, State, Story } from '../types/types'

export const useStoryEditForm = (storyId: string) => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [priority, setPriority] = useState<Priority>(Priority.LOW)
  const [state, setState] = useState<State>(State.TODO)
  const [formErrors, setFormErrors] = useState<string>('')
  const { stories, updateStory } = useStories(storyId)
  const [currentStory, setCurrentStory] = useState<Story | null>(null)

  useEffect(() => {
    if (storyId) {
      const currentStory = stories?.find(story => story.id === storyId)
      if (currentStory) {
        setTitle(currentStory.title)
        setDescription(currentStory.description)
        setPriority(currentStory.priority)
        setState(currentStory.state)
        setCurrentStory(currentStory)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyId])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!title || !description || !state || !priority) {
      setFormErrors('Please fill out all fields!')
      return
    }

    try {
      if (currentStory) updateStory({ ...currentStory, title, description, priority, state })
    } catch (error) {
      setFormErrors('Failed to update story.')
    }
  }

  return {
    title,
    description,
    priority,
    state,
    handleSubmit,
    formErrors,
    setTitle,
    setDescription,
    setState,
    setPriority,
  }
}
