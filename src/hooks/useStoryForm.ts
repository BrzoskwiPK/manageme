import { FormEvent, useState } from 'react'
import { Priority, State, Story } from '../types/types'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { useStories } from './useStories'

export const useStoryForm = (projectId: string) => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [priority, setPriority] = useState<Priority>(Priority.LOW)
  const [state, setState] = useState<State>(State.TODO)
  const { addStory } = useStories(projectId)

  const authUser: { username: string } | null = useAuthUser()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const newStory: Story = {
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      projectId: projectId,
      state,
      owner: authUser?.username || '',
      created: new Date(),
    }

    addStory(newStory)
  }

  return {
    title,
    setTitle,
    description,
    setDescription,
    priority,
    setPriority,
    state,
    setState,
    handleSubmit,
  }
}
