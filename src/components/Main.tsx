import { FC } from 'react'
import { Link } from 'react-router-dom'

const Main: FC = () => {
  return (
    <section className='h-full w-full flex flex-col items-center bg-gray-100 text-gray-800 text-center'>
      <header className='w-full bg-indigo-600 text-white py-6'>
        <h1 className='text-3xl font-bold text-center'>Welcome to Manage.me</h1>
        <p className='text-center mt-2'>Your ultimate productivity companion</p>
      </header>
      <main className='flex flex-col items-center py-10 px-4 max-w-4xl w-full'>
        <div className='bg-white shadow-md rounded-lg p-6 mb-10'>
          <h2 className='text-2xl font-semibold mb-4'>
            Why <span className='font-bold'>Manage.me</span>?
          </h2>
          <p className='mb-2'>
            You can streamline your tasks, organize your projects, and boost your efficiency like
            never before.
          </p>
          <ul className='list-disc list-inside'>
            <li>Organize tasks effortlessly</li>
            <li>Track project progress in real-time</li>
            <li>Collaborate with your team seamlessly</li>
            <li>Access your data from anywhere</li>
          </ul>
        </div>
        <div className='flex flex-wrap justify-around w-full'>
          <div className='bg-white shadow-md rounded-lg p-6 m-2 w-full md:w-[30%]'>
            <h3 className='text-xl font-semibold mb-2'>Task Management</h3>
            <p>
              Keep track of all your tasks in one place. Prioritize and complete them efficiently.
            </p>
          </div>
          <div className='bg-white shadow-md rounded-lg p-6 m-2 w-full md:w-[30%]'>
            <h3 className='text-xl font-semibold mb-2'>Project Tracking</h3>
            <p>Monitor the progress of your projects and ensure everything is on track.</p>
          </div>
          <div className='bg-white shadow-md rounded-lg p-6 m-2 w-full md:w-[30%]'>
            <h3 className='text-xl font-semibold mb-2'>Team Collaboration</h3>
            <p>Collaborate with your team in real-time and keep everyone updated.</p>
          </div>
        </div>
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
      </main>
    </section>
  )
}

export default Main
