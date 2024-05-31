import { FC } from 'react'
import { Task } from '../types/types'

interface TaskCardProps {
  task: Task
  openModal: (type: 'add' | 'edit', taskId?: string) => void
  deleteTask: (taskId: string) => void
}

const TaskCard: FC<TaskCardProps> = ({ task, openModal, deleteTask }) => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg h-[292px]'>
      <h3 className='text-lg font-semibold mb-2'>{task.name}</h3>
      <p className='text-gray-700 mb-2'>{task.description}</p>
      <div className='flex flex-col'>
        <p className='text-sm text-gray-500'>
          <span className='font-bold'>Priority:</span> {task.priority}
        </p>
        <p className='text-sm text-gray-500'>
          <span className='font-bold'>State:</span> {task.state}
        </p>
        <p className='text-sm text-gray-500'>
          <span className='font-bold'>Estimated Time:</span> {task.estimatedTime} hours
        </p>

        <p className='text-sm text-gray-500'>
          {task.responsibleUser ? (
            <>
              <span className='font-bold'>Responsible user: </span>
              <span>{task.responsibleUser}</span>
            </>
          ) : (
            <span className='font-bold'>No responsible user</span>
          )}
        </p>

        <p className='text-sm text-gray-500'>
          <span className='font-bold'>Created At:</span> {new Date(task.createdAt).toUTCString()}
        </p>
        {task.startedAt && (
          <p className='text-sm text-gray-500'>
            <span className='font-bold'>Started At:</span> {new Date(task.startedAt).toUTCString()}
          </p>
        )}
        {task.finishedAt && (
          <p className='text-sm text-gray-500'>
            <span className='font-bold'>Finished At:</span>{' '}
            {new Date(task.finishedAt).toUTCString()}
          </p>
        )}
      </div>
      <div className='flex justify-center gap-4 mt-4 max-w-full'>
        <button
          onClick={() => openModal('edit', task.id)}
          className='w-1/2 text-center rounded-md bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600'>
          EDIT
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className='w-1/2 text-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default TaskCard
