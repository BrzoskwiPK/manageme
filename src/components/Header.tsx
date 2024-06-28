import { FC, useEffect, useState } from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { Link, useLocation } from 'react-router-dom'
import NotificationCounter from './NotificationCounter'
import NotificationDialog from './NotificationDialog'

const Header: FC = () => {
  const location = useLocation()
  const authKitUser: { username: string } | null = useAuthUser()
  const [authUser, setAuthUser] = useState<{ username: string } | null>(null)

  useEffect(() => {
    setAuthUser(authKitUser)
  }, [location, authKitUser])

  return (
    <header className='flex justify-between h-[15vh] w-full items-center bg-background'>
      <Link to='/'>
        <div className='flex items-center justify-center pl-8'>
          <figure className='flex items-center justify-center'>
            <img src='/assets/logo.png' alt='Logo' className='w-12 h-12' />
            <figcaption className='text-xl font-semibold text-content'>anage.me</figcaption>
          </figure>
        </div>
      </Link>
      <div className='flex items-center mr-8'>
        <Link to='/notifications'>
          <NotificationCounter />
        </Link>
        <p className='ml-4 text-xl font-semibold text-content'>{authUser?.username}</p>
        <NotificationDialog />
      </div>
    </header>
  )
}

export default Header
