import { FC } from 'react'
import EditProjectForm from '../forms/EditProjectForm'

interface ProjectEditionModalProps {
  isModalOpen: boolean
  projectId: string
  closeModal: () => void
}

const ProjectEditionModal: FC<ProjectEditionModalProps> = ({
  isModalOpen,
  projectId,
  closeModal,
}: ProjectEditionModalProps) => {
  return (
    <>
      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50'>
          <div className='bg-white rounded-md p-4 flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-2xl'>Edit The Project</h1>
            <EditProjectForm closeModal={closeModal} projectId={projectId} />
            <button
              onClick={closeModal}
              className='flex w-full mt-2 justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              CANCEL
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectEditionModal
