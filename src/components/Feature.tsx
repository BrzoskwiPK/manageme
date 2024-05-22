import { FC } from 'react'

interface FeatureProps {
  title: string
  description: string
}

const Feature: FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 m-2 w-full md:w-[30%]'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Feature
