import { FC } from 'react'
import Feature from './Feature'

const FeatureList: FC = () => {
  return (
    <div className='flex flex-wrap justify-around w-full'>
      <Feature
        title='Task Management'
        description='Keep track of all your tasks in one place. Prioritize and complete them efficiently.'
      />
      <Feature
        title='Project Tracking'
        description='Monitor the progress of your projects and ensure everything is on track.'
      />
      <Feature
        title='Team Collaboration'
        description='Collaborate with your team in real-time and keep everyone updated.'
      />
    </div>
  )
}

export default FeatureList
