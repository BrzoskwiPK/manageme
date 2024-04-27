import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className='flex justify-between h-[15vh] w-full items-center'>
      <div className='flex items-center justify-center pl-8'>
        <img src='/assets/logo.png' alt='Logo' className='w-12 h-12' />
        <h1 className='text-xl font-semibold'>anage.me</h1>
      </div>
      <p className='mr-8 text-xl font-semibold'>john kovalsky</p>
    </header>
  )
}

export default Header
