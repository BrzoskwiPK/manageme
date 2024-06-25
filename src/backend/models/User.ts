import { Schema, model } from 'mongoose'
import { Role } from '../types'

export interface IUser extends Document {
  name: string
  surname: string
  role: Role
  username: string
  password: string
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  role: { type: String, required: true, enum: Object.values(Role) },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

const UserModel = model<IUser>('User', userSchema)

export default UserModel
