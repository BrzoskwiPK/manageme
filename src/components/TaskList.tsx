import { FC } from 'react'
import { useTasks } from '../hooks/useTasks'
import { useLocation } from 'react-router-dom'

interface TaskListProps {
  openModal?: (type: 'add' | 'edit', taskId?: string) => void
}

const TaskList: FC<TaskListProps> = ({ openModal }: TaskListProps) => {
  const { state } = useLocation()
  const { tasks, deleteTask } = useTasks(state.storyId)

  //   const handleTaskEdit = (taskId: string) => {
  //     openModal('edit', taskId)
  //   }

  return (
    <div className='container mx-auto px-4 py-8 bg-gray-100'>
      <h1 className='text-4xl font-bold text-center mb-8'>Tasks</h1>
      <div className='flex flex-wrap justify-center gap-6'>
        {tasks?.length ? (
          tasks.map(task => (
            <div
              key={task.id}
              className='w-full max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center'>
              <h2 className='text-2xl font-bold mb-2'>{task.name}</h2>
              <p className='text-gray-700 mb-4'>{task.description}</p>
              <p className='text-gray-600 mb-4'>Priority: {task.priority}</p>
              <p className='text-gray-600 mb-4'>State: {task.state}</p>
              <p className='text-gray-600 mb-4'>Estimated Time: {task.estimatedTime} hours</p>
              <div className='flex justify-center gap-2'>
                <button
                  onClick={() => console.log('edit')}
                  className='rounded-md bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600'>
                  EDIT
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className='rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'>
                  DELETE
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-xl text-gray-600'>Start by adding your first task!</p>
        )}
      </div>
      <div className='mt-8 text-center'>
        <button
          onClick={() => console.log('add')}
          className='inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>
          ADD A TASK
        </button>
      </div>
    </div>
  )
}

export default TaskList
