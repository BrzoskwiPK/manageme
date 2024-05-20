import { useQuery } from '@tanstack/react-query'
import { Project } from '../types/types'
import { getProject } from '../services/api'

export const useProject = (projectId: string) => {
  return useQuery<Project, Error>({
    queryKey: [`projectToEdit`],
    queryFn: () => getProject(projectId),
    enabled: !!projectId,
  })
}
