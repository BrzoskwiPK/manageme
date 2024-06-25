import UserModel from '../models/User'
import bcrypt from 'bcrypt'
import jwt, { Secret, VerifyErrors, VerifyOptions } from 'jsonwebtoken'
import { UserEntity } from '../types'

export class UserService {
  private refreshTokens: string[] = []

  async getUsers() {
    const users = await UserModel.find()

    return users ?? []
  }

  async login(username: string, password: string) {
    const user = await UserModel.findOne({ username })

    if (!user) return null

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) return null

    const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET!, {
      expiresIn: '7d',
    })

    const refreshToken = jwt.sign({ username: user.username }, process.env.REFRESH_TOKEN_SECRET!)

    this.refreshTokens.push(refreshToken)

    return { accessToken, refreshToken }
  }

  async refreshToken(token: string) {
    if (!this.refreshTokens.includes(token)) {
      return null
    }

    jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET as Secret,
      ((err: VerifyErrors, user: UserEntity) => {
        if (err) return null

        const accessToken = jwt.sign(
          { username: user.username },
          process.env.ACCESS_TOKEN as Secret,
          {
            expiresIn: '7d',
          }
        )

        return { accessToken }
      }) as VerifyOptions
    )
  }

  async logout(refreshToken: string) {
    this.refreshTokens = this.refreshTokens.filter(t => t !== refreshToken)

    return true
  }
}
