import axios from 'axios'
import { LoginRequest } from '../types/types'

const BASE_URL = 'http://localhost:3000'

export const loginUser = (loginData: LoginRequest) => axios.post(`${BASE_URL}/login`, loginData)
