import { FC } from 'react'
import Navigation from './Navigation'

const Main: FC = () => {
  return (
    <section className='w-full h-full flex items-center justify-start text-center flex-col'>
      <Navigation />
      <div className='h-full flex items-center justify-center'>
        Welcome to Manageme, your ultimate productivity companion. <br />
        With Manage.me, you can streamline your tasks, organize your projects, and boost your
        efficiency like never before.
      </div>
    </section>
  )
}

export default Main
