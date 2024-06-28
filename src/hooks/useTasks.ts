import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addTask, deleteTask, getTasks, updateTask } from '../services/api'
import { Task } from '../types/types'
import { notificationService } from '../services/notifications'

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
    onSuccess: task => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })

      const newNotification = {
        title: 'New Task Added',
        message: `A new task "${task.name}" has been added.`,
        date: new Date().toISOString(),
        priority: task.priority,
        read: false,
        owner: task.responsibleUser as string,
      }

      notificationService.send(newNotification)
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
