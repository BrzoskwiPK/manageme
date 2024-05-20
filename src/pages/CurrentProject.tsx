import { useParams } from 'react-router-dom'

const CurrentProject = () => {
  const { projectId } = useParams<{ projectId: string }>()

  return (
    <div className='w-full h-full flex items-center justify-center'>
      CurrentProject {projectId}{' '}
    </div>
  )
}

export default CurrentProject
