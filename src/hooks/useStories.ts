import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Story } from '../types/types'
import { addStory, deleteStory, getStories, updateStory } from '../services/api'
import { notificationService } from '../services/notifications'

export const useStories = (projectId: string) => {
  const queryClient = useQueryClient()

  const {
    data: stories,
    error,
    isLoading,
  } = useQuery<Story[], Error>({
    queryKey: ['stories'],
    staleTime: 100 * 60 * 1000,
    queryFn: () => getStories(projectId),
  })

  const addStoryMutation = useMutation({
    mutationFn: addStory,
    onSuccess: story => {
      queryClient.invalidateQueries({ queryKey: ['stories'] })

      const newNotification = {
        title: 'New Story Added',
        message: `A new story "${story.title}" has been added.`,
        date: new Date().toISOString(),
        priority: story.priority,
        read: false,
        owner: story.owner,
      }

      notificationService.send(newNotification)
    },
  })

  const updateStoryMutation = useMutation({
    mutationFn: updateStory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stories'] })
    },
  })

  const deleteStoryMutation = useMutation({
    mutationFn: deleteStory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stories'] })
    },
  })

  return {
    stories,
    error,
    isLoading,
    addStory: addStoryMutation.mutate,
    updateStory: updateStoryMutation.mutate,
    deleteStory: deleteStoryMutation.mutate,
  }
}
