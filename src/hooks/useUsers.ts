import { useQuery } from '@tanstack/react-query'
import { User } from '../types/types'
import { getUsers } from '../services/api'

export const useUsers = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[], Error>({ queryKey: ['users'], queryFn: () => getUsers() })

  return {
    users,
    error,
    isLoading,
  }
}
