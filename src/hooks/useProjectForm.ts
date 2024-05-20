import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Project } from '../types/types'
import { useProjects } from './useProjects'

export const useProjectForm = () => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [formErrors, setFormErrors] = useState<string>('')
  const { getProjects, addProject } = useProjects()

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name || !description) {
      setFormErrors('Please fill out all fields!')
      return
    }

    const projects: Project[] = getProjects()

    const project: Project = {
      id: crypto.randomUUID() as string,
      name,
      description,
      current: false,
    }

    if (projects.some(p => p.name === name)) {
      setFormErrors('Project with this name already exists!')
      return
    }

    addProject(project)
    window.dispatchEvent(new Event('storage'))
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
