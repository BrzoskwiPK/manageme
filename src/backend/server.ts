import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { UserRouter } from './routes/User'
import { ProjectRouter } from './routes/Project'
import { StoryRouter } from './routes/Story'
import { TaskRouter } from './routes/Task'

dotenv.config()

const app: Application = express()
const PORT: number = 3000
const CONNECTION_STRING =
  'mongodb+srv://admin:admin@manageme.6igt2tx.mongodb.net/?retryWrites=true&w=majority&appName=ManageMe'

app.use(cors())
app.use(express.json())

app.use(UserRouter)
app.use(ProjectRouter)
app.use(StoryRouter)
app.use(TaskRouter)

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
