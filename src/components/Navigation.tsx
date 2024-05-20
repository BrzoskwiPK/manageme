import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='w-full h-[10vh] items-center justify-center font-bold text-lg tracking-wide text-indigo-600 space-x-4'>
      <Link to='/projects' className='hover:text-indigo-400'>
        PROJECTS
      </Link>
      <Link to='/projects/current' className='hover:text-indigo-400'>
        CURRENT
      </Link>
    </nav>
  )
}

export default Navigation
