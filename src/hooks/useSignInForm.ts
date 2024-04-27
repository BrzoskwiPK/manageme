import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useSignInForm = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [formError, setFormError] = useState<string>('')

  const navigate = useNavigate()

  const handleAuthentication = () => {
    // TODO: IMPLEMENT
    if (username === 'admin' && password === 'admin') {
      navigate('/projects')

      setFormError('')
    } else {
      setFormError('Invalid username or password')
    }
  }

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    handleAuthentication()
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  return {
    username,
    password,
    formError,
    handleSignIn,
    handlePasswordChange,
    handleUsernameChange,
  }
}
