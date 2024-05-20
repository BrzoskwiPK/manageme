import { useMemo, useState } from 'react'
import { Project } from '../types/types'
import { LocalStorageRepository } from '../backend/ApiClient'

export const useProject = () => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const apiClient = useMemo(() => new LocalStorageRepository('projects'), [])

  const getProject = (projectId: string) => {
    const p = apiClient.getById(projectId) as Project

    setProject(p)

    setName(p.name)
    setDescription(p.description)
    setIsLoading(false)
  }

  const updateProject = () => {
    if (project) {
      apiClient.update({ ...project, name, description })
    }
  }

  const getData = () => {
    return { name, description }
  }

  return {
    isLoading,
    project,
    getData,
    getProject,
    updateProject,
    name,
    setName,
    description,
    setDescription,
  }
}
