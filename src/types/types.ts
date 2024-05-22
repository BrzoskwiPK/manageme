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
  created: Date
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
  createdAt: Date
  startedAt?: Date
  finishedAt?: Date
  responsibleUser?: string
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export enum State {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export enum Role {
  ADMIN = 'ADMIN',
  DEVOPS = 'DEVOPS',
  DEVELOPER = 'DEVELOPER',
}

export type User = {
  id: string
  name: string
  surname: string
  role: Role
  username: string
  password: string
}

export interface APIDataAccess {
  getAll(): Project[]
  get(id: string): Project | null
  create(project: Project): void
  update(project: Project): void
  delete(id: string): void
}

export type LoginRequest = {
  username: string
  password: string
}
