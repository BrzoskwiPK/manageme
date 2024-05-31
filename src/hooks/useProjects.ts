import { Project } from '../types/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  addProject,
  deleteProject,
  getProjects,
  selectCurrentProject,
  updateProject,
} from '../services/api'

export const useProjects = () => {
  const queryClient = useQueryClient()

  const {
    data: projects,
    error,
    isLoading,
  } = useQuery<Project[], Error>({
    queryKey: ['projects'],
    staleTime: 100 * 60 * 1000,
    queryFn: getProjects,
  })

  const addProjectMutation = useMutation({
    mutationFn: addProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })

  const updateProjectMutation = useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })

  const deleteProjectMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })

  const selectProjectAsCurrentMutation = useMutation({
    mutationFn: selectCurrentProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })

  const getCurrentProject = () => {
    return projects?.find(project => project.current === true)
  }

  return {
    projects,
    error,
    isLoading,
    addProject: addProjectMutation.mutate,
    updateProject: updateProjectMutation.mutate,
    deleteProject: deleteProjectMutation.mutate,
    selectProjectAsCurrent: selectProjectAsCurrentMutation.mutate,
    getCurrentProject,
  }
}
