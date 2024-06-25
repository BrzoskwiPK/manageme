export type UserEntity = {
  id: string
  name: string
  surname: string
  role: Role
  username: string
  password: string
}

export enum Role {
  ADMIN = 'ADMIN',
  DEVOPS = 'DEVOPS',
  DEVELOPER = 'DEVELOPER',
}

export type LoginRequest = {
  username: string
  password: string
}

export enum State {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export type ISOString = string

export type Notification = {
  id: string
  title: string
  message: string
  date: ISOString
  priority: Priority
  read: boolean
  owner: string
}

export type Project = {
  id: string
  name: string
  description: string
  current: boolean
}

export type Story = {
  id: string
  title: string
  description: string
  priority: Priority
  projectId: string
  created: ISOString
  state: State
  owner: string
}

export type Task = {
  id: string
  name: string
  description: string
  priority: Priority
  storyId: string
  estimatedTime: number // estimated in hours
  state: State
  createdAt: ISOString
  startedAt?: ISOString
  finishedAt?: ISOString
  responsibleUser?: string
}
