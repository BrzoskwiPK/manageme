import express from 'express'
import UserController from '../controllers/UserController'

const router = express.Router()
const userController = new UserController()

router.get('/users', userController.getUsers)
router.post('/login', userController.login)
router.post('/refresh-token', userController.refreshToken)
router.post('/logout', userController.logout)

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
