import { FC } from 'react'
import { useProjects } from '../hooks/useProjects'

interface ProjectsListProps {
  openModal: (type: 'add' | 'edit', projectId?: string) => void
}

const ProjectsList: FC<ProjectsListProps> = ({ openModal }: ProjectsListProps) => {
  const { projects, deleteProject, selectProjectAsCurrent } = useProjects()

  const handleProjectEdit = (projectId: string) => {
    openModal('edit', projectId)
  }

  return (
    <>
      <div className='w-full text-center text-2xl font-bold'>PROJECTS</div>
      <div className='w-full flex justify-center gap-12 my-6'>
        {projects?.length ? (
          projects.map(project => {
            return (
              <div
                key={project.id}
                className='flex flex-col items-center justify-center text-center mt-5'>
                <div className='text-xl font-bold'>{project.name}</div>
                <div className='text-lg'>{project.description}</div>
                <div className='flex justify-center mt-2'>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className='rounded-md m-1 bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'>
                    DELETE
                  </button>
                  <button
                    onClick={() => handleProjectEdit(project.id)}
                    className='rounded-md m-1 bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600'>
                    EDIT
                  </button>
                  <button
                    onClick={() => selectProjectAsCurrent(project.id)}
                    className='rounded-md m-1 bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'>
                    SELECT
                  </button>
                </div>
              </div>
            )
          })
        ) : (
          <p>Start by adding your first project!</p>
        )}
      </div>
      <button
        type='submit'
        onClick={() => openModal('add')}
        className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
        ADD A PROJECT
      </button>{' '}
    </>
  )
}

export default ProjectsList
