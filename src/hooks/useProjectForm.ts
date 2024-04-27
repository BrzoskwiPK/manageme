import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useProjectForm = () => {
  //   const [id, setId] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [formError, setFormError] = useState<string>('')

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setFormError('')
    navigate('/projects')
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value)

  return {
    name,
    description,
    formError,
    handleSubmit,
    handleNameChange,
    handleDescriptionChange,
  }
}
