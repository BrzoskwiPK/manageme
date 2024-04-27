export type Project = {
  id: string
  name: string
  description: string
  current: boolean
}

export interface APIDataAccess {
  getAll(): Project[]
  get(id: string): Project | null
  create(project: Project): void
  update(project: Project): void
  delete(id: string): void
}

export type User = {
  id: string
  name: string
  surname: string
  role: Role
}

export type Story = {
  id: string
  title: string
  description: string
  priority: Priority
  project: Project
  created: Date
  state: State
  owner: string
}

export enum Priority {
  LOW,
  MEDIUM,
  HIGH,
}

export enum State {
  DEFINED,
  IN_PROGRESS,
  COMPLETED,
}

export enum TaskState {
  TODO,
  DOING,
  DONE,
}

export enum Role {
  ADMIN,
  DEVOPS,
  DEVELOPER,
}

export type Task = {
  name: string
  description: string
  priority: Priority
  story: Story
  estimatedTime: number // estimated in hours
  state: TaskState
  createdAt: Date
  startedAt?: Date
  finishedAt?: Date
  responsibleUser?: User
}
