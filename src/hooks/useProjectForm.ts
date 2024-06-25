import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Project } from '../types/types'
import { useProjects } from './useProjects'

export const useProjectForm = () => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [formErrors, setFormErrors] = useState<string>('')
  const { projects, addProject } = useProjects()

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name || !description) {
      setFormErrors('Please fill out all fields!')
      return
    }

    const project: Project = {
      id: crypto.randomUUID() as string,
      name,
      description,
      current: false,
    }

    if (Array.isArray(project) && projects?.some(p => p.name === name)) {
      setFormErrors('Project with this name already exists!')
      return
    }

    addProject(project)

    setFormErrors('')
    navigate('/projects')
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value)

  return {
    name,
    description,
    formErrors,
    handleSubmit,
    handleNameChange,
    handleDescriptionChange,
  }
}
