import { Role, UserEntity } from './types'
import bcrypt from 'bcrypt'

const users: UserEntity[] = [
  {
    id: '1',
    name: 'John',
    surname: 'Doe',
    role: Role.ADMIN,
    username: 'john.doe',
    password: bcrypt.hashSync('password1', 10),
  },
  {
    id: '2',
    name: 'Alice',
    surname: 'Smith',
    role: Role.DEVOPS,
    username: 'alice.smith',
    password: bcrypt.hashSync('password2', 10),
  },
  {
    id: '3',
    name: 'Bob',
    surname: 'Johnson',
    role: Role.DEVELOPER,
    username: 'bob.johnson',
    password: bcrypt.hashSync('password3', 10),
  },
  {
    id: '4',
    name: 'Sarah',
    surname: 'Williams',
    role: Role.DEVELOPER,
    username: 'sarah.williams',
    password: bcrypt.hashSync('password4', 10),
  },
  {
    id: '5',
    name: 'Michael',
    surname: 'Brown',
    role: Role.ADMIN,
    username: 'michael.brown',
    password: bcrypt.hashSync('password5', 10),
  },
  {
    id: '6',
    name: 'Emily',
    surname: 'Davis',
    role: Role.DEVOPS,
    username: 'emily.davis',
    password: bcrypt.hashSync('password6', 10),
  },
  {
    id: '7',
    name: 'David',
    surname: 'Wilson',
    role: Role.DEVELOPER,
    username: 'david.wilson',
    password: bcrypt.hashSync('password7', 10),
  },
  {
    id: '8',
    name: 'Olivia',
    surname: 'Miller',
    role: Role.ADMIN,
    username: 'olivia.miller',
    password: bcrypt.hashSync('password8', 10),
  },
  {
    id: '9',
    name: 'James',
    surname: 'Anderson',
    role: Role.DEVELOPER,
    username: 'james.anderson',
    password: bcrypt.hashSync('password9', 10),
  },
  {
    id: '10',
    name: 'Sophia',
    surname: 'Taylor',
    role: Role.DEVOPS,
    username: 'sophia.taylor',
    password: bcrypt.hashSync('password10', 10),
  },
]

export default users
