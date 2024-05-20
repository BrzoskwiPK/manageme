import { useEffect, useMemo, useState } from 'react'
import { Project } from '../types/types'
import { LocalStorageRepository } from '../backend/ApiClient'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const apiClient = useMemo(() => new LocalStorageRepository('projects'), [])
  const navigate = useNavigate()

  const { data } = useQuery({ queryKey: ['projects'], queryFn: apiClient.getAll })

  const handleStorageChange = () => {
    if (data) {
      setProjects(data)
    }
  }

  useEffect(() => {
    handleStorageChange()

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  // const getProjects: Project[] = () => {

  //   return apiClient.getAll()
  // }

  const addProject = (project: Project) => {
    apiClient.create(project)

    setProjects([...projects, project])
  }

  const deleteProject = (projectId: string) => {
    apiClient.delete(projectId)

    setProjects(projects.filter(p => p.id !== projectId))
  }

  const selectProject = (projectId: string) => {
    const projects = apiClient.getAll()

    projects.forEach((project: Project) => {
      if (project.current === true && project.id !== projectId) {
        apiClient.update({ ...project, current: false })
      }
    })

    apiClient.update({ ...apiClient.getById(projectId), current: true })

    navigate(`${projectId}`)
  }

  return {
    projects,
    addProject,
    // getProjects,
    deleteProject,
    selectProject,
  }
}
