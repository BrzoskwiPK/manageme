import { FormEvent, useState } from 'react'
import { Priority, State, Task } from '../types/types'
import { useTasks } from './useTasks'

export const useTaskForm = (storyId: string) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>(Priority.LOW)
  const [estimatedTime, setEstimatedTime] = useState<number>(0)
  const [state, setState] = useState<State>(State.TODO)
  const [startedAt, setStartedAt] = useState<Date>()
  const [finishedAt, setFinishedAt] = useState<Date>()
  const [responsibleUser, setResponsibleUser] = useState<string>()

  const { addTask } = useTasks(storyId)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const newTask: Task = {
      id: crypto.randomUUID(),
      name,
      description,
      priority,
      storyId,
      estimatedTime,
      state,
      createdAt: new Date(),
      startedAt: [State.DOING, State.DONE].includes(state) ? startedAt : undefined,
      finishedAt: state === State.DONE ? new Date() : undefined,
      responsibleUser,
    }

    addTask(newTask)
  }

  return {
    name,
    setName,
    description,
    setDescription,
    priority,
    setPriority,
    estimatedTime,
    setEstimatedTime,
    state,
    setState,
    startedAt,
    setStartedAt,
    finishedAt,
    setFinishedAt,
    responsibleUser,
    setResponsibleUser,
    handleSubmit,
  }
}
