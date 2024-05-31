import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addTask, deleteTask, getTasks, updateTask } from '../services/api'
import { Task } from '../types/types'

export const useTasks = (storyId: string) => {
  const queryClient = useQueryClient()

  const {
    data: tasks,
    error,
    isLoading,
  } = useQuery<Task[], Error>({
    queryKey: ['tasks'],
    staleTime: 100 * 60 * 1000,
    queryFn: () => getTasks(storyId),
  })

  const addTaskMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return {
    tasks,
    error,
    isLoading,
    addTask: addTaskMutation.mutate,
    updateTask: updateTaskMutation.mutate,
    deleteTask: deleteTaskMutation.mutate,
  }
}
