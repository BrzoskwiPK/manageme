import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import { AxiosError } from 'axios'

export const useSignInForm = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [formError, setFormError] = useState<string>('')

  const navigate = useNavigate()
  const signIn = useSignIn()

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const loginRequest = await loginUser({ username, password })
      signIn({
        auth: {
          token: loginRequest.data.accessToken,
          type: 'Bearer',
        },
        // refresh: loginRequest.data.refreshToken,
        userState: {
          username,
        },
      })

      setFormError('')
      navigate('/')
    } catch (error) {
      if (error instanceof AxiosError && error.response && error.response.status === 401) {
        setFormError('Invalid username or password')
      } else {
        setFormError('Authentication failed')
      }
    }
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
