import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useProjects } from './useProjects'
import { Project } from '../types/types'

export const useProjectEditForm = (projectId: string) => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [formErrors, setFormErrors] = useState<string>('')
  const { projects, updateProject } = useProjects()
  const [currentProject, setCurrentProject] = useState<Project | null>(null)

  useEffect(() => {
    if (projectId) {
      const currentProject = projects?.find(project => project.id === projectId)
      if (currentProject) {
        setName(currentProject.name)
        setDescription(currentProject.description)
        setCurrentProject(currentProject)
      }
    }
  }, [projectId, projects])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name || !description) {
      setFormErrors('Please fill out all fields!')
      return
    }

    try {
      if (currentProject) updateProject({ ...currentProject, name, description })
    } catch (error) {
      setFormErrors('Failed to update project.')
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value)

  return {
    name,
    description,
    handleSubmit,
    formErrors,
    handleNameChange,
    handleDescriptionChange,
  }
}
