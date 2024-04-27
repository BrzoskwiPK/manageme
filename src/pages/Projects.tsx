import { FC, useState } from 'react'
import ProjectsList from '../components/ProjectsList'
import ProjectCreationModal from '../components/modals/ProjectCreationModal'

const Projects: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className='flex flex-col items-center justify-center w-full h-full'>
      <ProjectsList openModal={openModal} />
      <ProjectCreationModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </section>
  )
}

export default Projects
