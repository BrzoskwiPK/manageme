import axios, { AxiosResponse } from 'axios'
import { LoginRequest, Project, Story, Task } from '../types/types'

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
  const response = await axios.patch(`${BASE_URL}/projects/${updatedProject.id}`, updatedProject)
  return response.data
}

export const deleteProject = async (projectId: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/projects/${projectId}`)
}

export const selectCurrentProject = async (projectId: string): Promise<void> => {
  const response = await axios.patch(`${BASE_URL}/projects/${projectId}/current`)
  return response.data
}

export const getStories = async (projectId: string): Promise<Story[]> => {
  const response = await axios.get(`${BASE_URL}/stories/${projectId}`)
  return response.data
}

export const deleteStory = async (projectId: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/stories/${projectId}`)
}

export const addStory = async (newStory: Story): Promise<Story> => {
  const response: AxiosResponse<Story> = await axios.post(`${BASE_URL}/stories`, newStory)
  return response.data
}

export const updateStory = async (updatedStory: Story): Promise<Story> => {
  const response: AxiosResponse<Story> = await axios.patch(
    `${BASE_URL}/stories/${updatedStory.id}`,
    updatedStory
  )
  return response.data
}

export const getTasks = async (storyId: string): Promise<Task[]> => {
  const response = await axios.get(`${BASE_URL}/tasks/${storyId}`)
  return response.data
}

export const addTask = async (newTask: Task): Promise<Task> => {
  const response = await axios.post(`${BASE_URL}/tasks`, newTask)
  return response.data
}

export const deleteTask = async (taskId: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/tasks/${taskId}`)
}

export const updateTask = async (updatedTask: Task): Promise<Task> => {
  const response = await axios.patch(`${BASE_URL}/tasks/${updatedTask.id}`, updatedTask)
  return response.data
}
