import { FC } from 'react'
import { Link } from 'react-router-dom'

const ActionButtons: FC = () => {
  return (
    <div className='flex items-center justify-center w-full h-full my-8'>
      <Link to='/projects'>
        <button className='flex w-[1/3] justify-center rounded-md bg-indigo-600 m-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          VIEW ALL PROJECTS
        </button>
      </Link>
      <Link to='/projects/current'>
        <button className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 m-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          CURRENT PROJECT
        </button>
      </Link>
    </div>
  )
}

export default ActionButtons
