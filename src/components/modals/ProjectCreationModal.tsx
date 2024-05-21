import { FC } from 'react'
import { useProjectForm } from '../../hooks/useProjectForm'
import AddProjectForm from '../forms/AddProjectForm'

interface ProjectCreationModalProps {
  isModalOpen: boolean
  closeModal: () => void
}

const ProjectCreationModal: FC<ProjectCreationModalProps> = ({
  isModalOpen,
  closeModal,
}: ProjectCreationModalProps) => {
  const { formErrors, handleSubmit, handleNameChange, handleDescriptionChange } = useProjectForm()

  return (
    <>
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg p-6 shadow-lg w-full max-w-md mx-4'>
            <div className='flex justify-center items-center mb-4 text-center'>
              <h1 className='text-2xl font-semibold text-gray-900 w-full'>Add New Project</h1>
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
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <AddProjectForm
              onSubmit={handleSubmit}
              onNameChange={handleNameChange}
              onDescriptionChange={handleDescriptionChange}
              closeModal={closeModal}
              formErrors={formErrors}
            />
            {formErrors && (
              <div className='w-full text-red-600 font-semibold text-center mt-4'>{formErrors}</div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCreationModal
