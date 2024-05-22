import { FormEvent, useEffect, useState } from 'react'
import { Priority, State, Task } from '../types/types'
import { useTasks } from './useTasks'

export const useTaskEditForm = (taskId: string) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>(Priority.LOW)
  const [estimatedTime, setEstimatedTime] = useState<number>(0)
  const [state, setState] = useState<State>(State.TODO)
  const [startedAt, setStartedAt] = useState<Date>()
  const [finishedAt, setFinishedAt] = useState<Date>()
  const [responsibleUser, setResponsibleUser] = useState<string>()
  const [currentTask, setCurrentTask] = useState<Task | null>(null)
  const [formErrors, setFormErrors] = useState<string>('')
  const { tasks, updateTask } = useTasks(taskId)

  useEffect(() => {
    if (taskId) {
      const currentTask = tasks?.find(task => task.id === taskId)

      if (currentTask) {
        setName(currentTask.name)
        setDescription(currentTask.description)
        setPriority(currentTask.priority)
        setEstimatedTime(currentTask.estimatedTime)
        setState(currentTask.state)
        setStartedAt(currentTask.startedAt)
        setFinishedAt(currentTask.finishedAt)
        setResponsibleUser(currentTask.responsibleUser)
        setCurrentTask(currentTask)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskId])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name || !description || !priority || !estimatedTime || !state) {
      setFormErrors('Please fill out all fields!')
      return
    }

    try {
      if (currentTask)
        updateTask({
          ...currentTask,
          name,
          description,
          priority,
          estimatedTime,
          state,
          startedAt,
          finishedAt,
          responsibleUser,
        })
    } catch (error) {
      setFormErrors('Failed to update task.')
    }
  }

  return {
    name,
    description,
    priority,
    estimatedTime,
    state,
    startedAt,
    finishedAt,
    responsibleUser,
    handleSubmit,
    formErrors,
    setName,
    setDescription,
    setPriority,
    setEstimatedTime,
    setState,
    setStartedAt,
    setFinishedAt,
    setResponsibleUser,
  }
}
