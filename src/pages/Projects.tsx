import { FC, useState } from 'react'
import ProjectsList from '../components/ProjectsList'
import ProjectCreationModal from '../components/modals/ProjectCreationModal'
import ProjectEditionModal from '../components/modals/ProjectEditionModal'

const Projects: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'add' | 'edit'>('add')
  const [projectId, setProjectId] = useState<string>('')

  const openModal = (type: 'add' | 'edit', projectId?: string) => {
    setIsModalOpen(true)
    setModalType(type)

    if (projectId) {
      setProjectId(projectId)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className='flex flex-col items-center justify-center w-full h-full'>
      <ProjectsList openModal={openModal} />
      <ProjectCreationModal
        closeModal={closeModal}
        isModalOpen={isModalOpen && modalType === 'add'}
      />
      <ProjectEditionModal
        closeModal={closeModal}
        projectId={projectId}
        isModalOpen={isModalOpen && modalType === 'edit'}
      />
    </section>
  )
}

export default Projects
