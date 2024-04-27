import { FC } from 'react'
import { Link } from 'react-router-dom'

const RouteError: FC = () => {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center'>
      <section className='flex flex-col items-center justify-center'>
        <p className='md:text-9xl text-7xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight'>
          404
        </p>
        <p className='text-lg font-semibold my-5 text-center'>
          Hey captain! <br /> Looks like you're heading to a wrong planet!
        </p>
        <Link
          to='/'
          type='button'
          className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          Go back
        </Link>
      </section>
    </main>
  )
}

export default RouteError
