import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Story } from '../types/types'
import { addStory, deleteStory, getStories, updateStory } from '../services/api'

export const useStories = (projectId: string) => {
  const queryClient = useQueryClient()

  const {
    data: stories,
    error,
    isLoading,
  } = useQuery<Story[], Error>({ queryKey: ['stories'], queryFn: () => getStories(projectId) })

  const addStoryMutation = useMutation({
    mutationFn: addStory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stories'] })
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
