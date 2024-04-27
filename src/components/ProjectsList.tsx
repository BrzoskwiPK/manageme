import { FC, useState } from 'react'
import { Project } from '../types/types'

interface ProjectsListProps {
  openModal: () => void
}

const ProjectsList: FC<ProjectsListProps> = ({ openModal }: ProjectsListProps) => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'Project 1',
      description: 'This is the first project',
      current: false,
    },
    {
      id: '2',
      name: 'Project 2',
      description: 'This is the second project',
      current: false,
    },
    {
      id: '3',
      name: 'Project 3',
      description: 'This is the third project',
      current: false,
    },
  ])

  const handleDeleteProject = (projectId: string) => {
    // TODO: Implement delete project logic
  }

  const handleEditProject = (projectId: string) => {
    // TODO: Implement edit project logic
  }

  const handleSelectProject = (projectId: string) => {
    // TODO: Implement select project logic
  }

  return (
    <>
      <div className='w-full text-center text-2xl font-bold'>PROJECTS</div>
      <div className='w-full flex justify-center gap-12 my-6'>
        {projects.length ? (
          projects.map(project => {
            return (
              <div
                key={project.id}
                className='flex flex-col items-center justify-center text-center mt-5'>
                <div className='text-xl font-bold'>{project.name}</div>
                <div className='text-lg'>{project.description}</div>
                <div className='flex justify-center mt-2'>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className='rounded-md m-1 bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'>
                    DELETE
                  </button>
                  <button
                    onClick={() => handleEditProject(project.id)}
                    className='rounded-md m-1 bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600'>
                    EDIT
                  </button>
                  <button
                    onClick={() => handleSelectProject(project.id)}
                    className='rounded-md m-1 bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'>
                    SELECT
                  </button>
                </div>
              </div>
            )
          })
        ) : (
          <p>Currently there are no projects available</p>
        )}
      </div>
      <button
        type='submit'
        onClick={openModal}
        className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
        ADD A PROJECT
      </button>{' '}
    </>
  )
}

export default ProjectsList
