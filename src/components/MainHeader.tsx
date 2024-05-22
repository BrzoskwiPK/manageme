import { FC } from 'react'

const MainHeader: FC = () => {
  return (
    <header className='w-full bg-indigo-600 text-white py-6'>
      <h1 className='text-3xl font-bold text-center'>Welcome to Manage.me</h1>
      <p className='text-center mt-2'>Your ultimate productivity companion</p>
    </header>
  )
}

export default MainHeader
