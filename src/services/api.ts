import axios, { AxiosResponse } from 'axios'
import { LoginRequest, Project } from '../types/types'

const BASE_URL = 'http://localhost:3000'

export const loginUser = (loginData: LoginRequest) => axios.post(`${BASE_URL}/login`, loginData)

export const getProjects = async (): Promise<Project[]> => {
  const response: AxiosResponse<Project[]> = await axios.get(`${BASE_URL}/projects`)
  return response.data
}

export const getProject = async (projectId: string): Promise<Project> => {
  const response: AxiosResponse<Project> = await axios.get(`${BASE_URL}/projects/${projectId}`)
  return response.data
}

export const addProject = async (newProject: Project): Promise<Project> => {
  const response = await axios.post(`${BASE_URL}/projects`, newProject)
  return response.data
}

export const updateProject = async (updatedProject: Project): Promise<Project> => {
  const response = await axios.put(`${BASE_URL}/projects/${updatedProject.id}`, updatedProject)
  return response.data
}

export const deleteProject = async (projectId: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/projects/${projectId}`)
}

export const selectCurrentProject = async (projectId: string): Promise<void> => {
  const response = await axios.patch(`${BASE_URL}/projects/${projectId}/current`)
  return response.data
}
