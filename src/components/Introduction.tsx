import { FC } from 'react'

const Introduction: FC = () => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 mb-10'>
      <h2 className='text-2xl font-semibold mb-4'>
        Why <span className='font-bold'>Manage.me</span>?
      </h2>
      <p className='mb-2'>
        You can streamline your tasks, organize your projects, and boost your efficiency like never
        before.
      </p>
      <ul className='list-disc list-inside'>
        <li>Organize tasks effortlessly</li>
        <li>Track project progress in real-time</li>
        <li>Collaborate with your team seamlessly</li>
        <li>Access your data from anywhere</li>
      </ul>
    </div>
  )
}

export default Introduction
