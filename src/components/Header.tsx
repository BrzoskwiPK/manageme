import { FC, useEffect, useState } from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { Link, useLocation } from 'react-router-dom'

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
      <p className='mr-8 text-xl font-semibold text-content'>{authUser?.username}</p>
    </header>
  )
}

export default Header
