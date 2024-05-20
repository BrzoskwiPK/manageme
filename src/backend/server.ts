import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { UserRouter } from './routes/user'
// import User from './models/User'
// import users from './users'
dotenv.config()

const app: Application = express()
const PORT: number = 3000
const CONNECTION_STRING =
  'mongodb+srv://admin:admin@manageme.6igt2tx.mongodb.net/?retryWrites=true&w=majority&appName=ManageMe'

app.use(cors())
app.use(express.json())

app.use(UserRouter)

mongoose.connect(CONNECTION_STRING, { dbName: 'main' })

// mongoose.connection.once('open', async () => {
//   console.log('Connected to database')
//   console.log('Seeding the database...')

//   try {
//     await User.deleteMany()
//     await User.insertMany(users)
//   } catch (error) {
//     console.log('Error while seeding the database', error)
//   } finally {
//     mongoose.connection.close()
//   }

//   console.log('Database seeding ended')
// })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
