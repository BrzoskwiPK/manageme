import { FC } from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  const authUser: { username: string } | null = useAuthUser()

  return (
    <header className='flex justify-between h-[15vh] w-full items-center bg-gray-100'>
      <Link to='/'>
        <div className='flex items-center justify-center pl-8'>
          <figure className='flex items-center justify-center'>
            <img src='/assets/logo.png' alt='Logo' className='w-12 h-12' />
            <figcaption className='text-xl font-semibold'>anage.me</figcaption>
          </figure>
        </div>
      </Link>
      <p className='mr-8 text-xl font-semibold'>{authUser?.username}</p>
    </header>
  )
}

export default Header
