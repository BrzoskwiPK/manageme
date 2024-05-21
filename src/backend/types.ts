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
