import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

class UserController {
  private userService: UserService = new UserService()

  getUsers = async (_: Request, res: Response) => {
    try {
      const users = await this.userService.getUsers()
      res.status(200).send(users)
    } catch (error) {
      console.error('Error fetching users: ', error)
      res.status(500).send({ message: 'Failed to fetch users' })
    }
  }

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body

    try {
      const loginRequest: { accessToken: string; refreshToken: string } | null =
        await this.userService.login(username, password)

      if (loginRequest === null) res.status(401).send({ message: 'Invalid credentials' })
      else {
        res
          .status(200)
          .send({ accessToken: loginRequest.accessToken, refreshToken: loginRequest.refreshToken })
      }
    } catch (error) {
      console.error('Error fetching users: ', error)
      res.status(500).send({ message: 'Failed to fetch users' })
    }
  }

  refreshToken = async (req: Request, res: Response) => {
    const { refreshToken } = req.body

    try {
      const accessToken = await this.userService.refreshToken(refreshToken)

      if (accessToken === null) res.status(401).send({ message: 'Invalid refresh token' })
      else res.status(200).send({ accessToken })
    } catch (error) {
      console.error('Error refreshing token: ', error)
      res.status(500).send({ message: 'Failed to refresh token' })
    }
  }

  logout = async (req: Request, res: Response) => {
    try {
      await this.userService.logout(req.body.refreshToken)
      res.status(200).send({ message: 'Logged out successfully' })
    } catch (error) {
      console.error('Error parsing token: ', error)
      res.status(500).send({ message: 'Failed to logout' })
    }
  }
}

export default UserController
