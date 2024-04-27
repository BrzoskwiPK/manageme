import React, { FC } from 'react'
import { useProjectForm } from '../../hooks/useProjectForm'
import ProjectForm from '../forms/ProjectForm'

interface ProjectCreationModalProps {
  isModalOpen: boolean
  closeModal: () => void
}

const ProjectCreationModal: FC<ProjectCreationModalProps> = ({
  isModalOpen,
  closeModal,
}: ProjectCreationModalProps) => {
  const { formError, handleSubmit, handleNameChange, handleDescriptionChange } = useProjectForm()

  return (
    <>
      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50'>
          <div className='bg-white rounded-md p-4 flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-2xl'>Add New Project</h1>
            <ProjectForm
              onSubmit={handleSubmit}
              onNameChange={handleNameChange}
              onDescriptionChange={handleDescriptionChange}
            />
            <button
              onClick={closeModal}
              className='flex w-full mt-2 justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              CLOSE
            </button>
            {formError ? (
              <div className='w-full text-red-600 font-bold text-center mt-5'>{formError}</div>
            ) : null}
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCreationModal
