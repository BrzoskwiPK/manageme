import { FC } from 'react'
import { useProjects } from '../hooks/useProjects'
import { useNavigate } from 'react-router-dom'

interface ProjectsListProps {
  openModal: (type: 'add' | 'edit', projectId?: string) => void
}

const ProjectList: FC<ProjectsListProps> = ({ openModal }: ProjectsListProps) => {
  const { projects, deleteProject, selectProjectAsCurrent } = useProjects()

  const navigate = useNavigate()

  const handleProjectEdit = (projectId: string) => {
    openModal('edit', projectId)
  }

  const handleProjectSelection = (projectId: string) => {
    selectProjectAsCurrent(projectId)

    navigate('current')
  }

  return (
    <div className='container mx-auto px-4 py-8 bg-gray-100 max-h-[80vh] overflow-y-scroll'>
      <h1 className='text-4xl font-bold text-center mb-8'>Projects</h1>
      <div className='flex flex-wrap justify-center gap-6'>
        {projects?.length ? (
          projects.map(project => (
            <div
              key={project.id}
              className='w-full max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center'>
              <h2 className='text-2xl font-bold mb-2'>{project.name}</h2>
              <p className='text-gray-700 mb-4'>{project.description}</p>
              <div className='flex justify-center gap-2 w-full'>
                <button
                  onClick={() => handleProjectSelection(project.id)}
                  className='w-1/3 text-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600'>
                  SELECT
                </button>
                <button
                  onClick={() => handleProjectEdit(project.id)}
                  className='w-1/3 text-center rounded-md bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600'>
                  EDIT
                </button>
                <button
                  onClick={() => deleteProject(project.id)}
                  className='w-1/3 text-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'>
                  DELETE
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-xl text-gray-600'>Start by adding your first project!</p>
        )}
      </div>
      <div className='mt-8 text-center'>
        <button
          onClick={() => openModal('add')}
          className='inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>
          ADD A PROJECT
        </button>
      </div>
    </div>
  )
}

export default ProjectList
