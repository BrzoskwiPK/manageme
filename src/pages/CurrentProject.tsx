import StoryList from '../components/StoryList'
import AddStoryForm from '../components/forms/AddStoryForm'
import EditStoryForm from '../components/forms/EditStoryForm'
import { useProjects } from '../hooks/useProjects'
import { FC, useState } from 'react'

const CurrentProject: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'add' | 'edit'>('add')
  const [storyId, setStoryId] = useState<string>('')

  const openModal = (type: 'add' | 'edit', storyId?: string) => {
    setIsModalOpen(true)
    setModalType(type)

    if (storyId) {
      setStoryId(storyId)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const { getCurrentProject } = useProjects()

  const project = getCurrentProject()

  if (!project) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <p className='text-lg text-gray-500'>No current project found</p>
      </div>
    )
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-4 text-center'>
      <div className='bg-white shadow-md rounded-lg p-6 w-full h-full flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-semibold mb-2'>PROJECT: {project.name}</h2>
        <p className='text-gray-700 mb-4'>Description: {project.description}</p>
        <StoryList projectId={project.id} openModal={openModal} />
        <button
          onClick={() => openModal('add')}
          className='justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
          ADD STORY
        </button>
        {isModalOpen && modalType === 'add' && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative bg-white rounded-lg p-6 w-full max-w-lg shadow-lg'>
              <div className='absolute top-0 right-0 m-4'>
                <button
                  onClick={closeModal}
                  className='text-gray-400 hover:text-gray-600 focus:outline-none'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <AddStoryForm projectId={project.id} closeModal={closeModal} />
            </div>
          </div>
        )}
        {isModalOpen && modalType === 'edit' && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative bg-white rounded-lg p-6 w-full max-w-lg shadow-lg'>
              <div className='absolute top-0 right-0 m-4'>
                <button
                  onClick={closeModal}
                  className='text-gray-400 hover:text-gray-600 focus:outline-none'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <EditStoryForm storyId={storyId} closeModal={closeModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CurrentProject
