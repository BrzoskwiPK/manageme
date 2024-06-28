import { FC, useState } from 'react'
import { useTasks } from '../hooks/useTasks'
import { useLocation } from 'react-router-dom'
import AddTaskForm from './forms/AddTaskForm'
import { State, Task } from '../types/types'
import TaskColumn from './TaskColumn'
import EditTaskForm from './forms/EditTaskForm'

const TaskList: FC = () => {
  const { state } = useLocation()
  const { tasks, deleteTask } = useTasks(state)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'add' | 'edit'>('add')
  const [taskId, setTaskId] = useState<string>('')

  const openModal = (type: 'add' | 'edit', taskId?: string) => {
    setIsModalOpen(true)
    setModalType(type)

    if (taskId) {
      setTaskId(taskId)
    }
  }

  const groupedTasks: Record<State, Task[] | undefined> = {
    [State.TODO]: tasks?.filter(task => task.state === State.TODO),
    [State.DOING]: tasks?.filter(task => task.state === State.DOING),
    [State.DONE]: tasks?.filter(task => task.state === State.DONE),
  }

  return (
    <div className='container mx-auto px-4 py-8 bg-gray-100 max-h-[80vh] overflow-y-scroll'>
      <h1 className='text-4xl font-bold text-center mb-8'>Tasks</h1>
      <div className='flex flex-wrap justify-center gap-6'>
        {Object.values(State).map(state => (
          <TaskColumn
            key={state}
            state={state as State}
            openModal={openModal}
            tasks={groupedTasks[state as State]}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      <div className='mt-8 text-center'>
        <button
          onClick={() => {
            setModalType('add')
            setIsModalOpen(true)
          }}
          className='inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>
          ADD A TASK
        </button>
      </div>
      {isModalOpen && modalType === 'add' && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='relative bg-white rounded-lg p-6 w-full max-w-lg shadow-lg'>
            <div className='absolute top-0 right-8 m-4'>
              <button
                onClick={() => setIsModalOpen(false)}
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
            <AddTaskForm storyId={state} closeModal={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
      {isModalOpen && modalType === 'edit' && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='relative bg-white rounded-lg p-6 w-full max-w-lg shadow-lg'>
            <div className='absolute top-0 right-8 m-4'>
              <button
                onClick={() => setIsModalOpen(false)}
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
            <EditTaskForm taskId={taskId} closeModal={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskList
