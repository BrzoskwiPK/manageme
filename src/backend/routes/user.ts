import express, { Request, Response } from 'express'
import jwt, { Secret, VerifyErrors, VerifyOptions } from 'jsonwebtoken'
import User from '../models/User'
import bcrypt from 'bcrypt'
import { UserEntity } from '../types'

// TEMP SOLUTION
let refreshTokens: string[] = []

const router = express.Router()

router.get('/users', async (_: Request, res: Response) => {
  const users = await User.find()

  if (!users) return res.sendStatus(404)

  res.json(users)
})

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })

  if (!user) return res.sendStatus(401)

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) return res.sendStatus(401)

  const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '7d',
  })

  const refreshToken = jwt.sign({ username: user.username }, process.env.REFRESH_TOKEN_SECRET!)

  refreshTokens.push(refreshToken)

  res.json({ accessToken, refreshToken })
})

router.post('/refresh-token', (req: Request, res: Response) => {
  const { token } = req.body

  if (!refreshTokens.includes(token)) {
    return res.sendStatus(403)
  }

  jwt.verify(
    token,
    process.env.REFRESH_TOKEN_SECRET as Secret,
    ((err: VerifyErrors, user: UserEntity) => {
      if (err) return res.sendStatus(403)

      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN as Secret,
        {
          expiresIn: '7d',
        }
      )

      res.json({ accessToken })
    }) as VerifyOptions
  )
})

router.delete('/logout', (req, res) => {
  const { refreshToken } = req.body

  refreshTokens = refreshTokens.filter(t => t !== refreshToken)

  res.sendStatus(204)
})

// middleware
// const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers['authorization']?.split(' ')[1]

//   if (!token) return res.sendStatus(401)

//   jwt.verify(token, process.env.ACCESS_TOKEN as Secret, err => {
//     if (err) return res.sendStatus(403)

//     next()
//   })
// }

export { router as UserRouter }
