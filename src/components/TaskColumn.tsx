import { FC } from 'react'
import { State, Task } from '../types/types'
import TaskCard from './TaskCard'

interface TaskColumnProps {
  state: State
  tasks: Task[] | undefined
  openModal: (type: 'add' | 'edit', taskId?: string) => void
  deleteTask: (taskId: string) => void
}

const TaskColumn: FC<TaskColumnProps> = ({ state, tasks, openModal, deleteTask }) => {
  return (
    <div className='mb-6 w-full md:w-[30%]'>
      <div className='bg-gray-200 p-2 rounded-t-lg'>
        <h2 className='text-xl font-bold mb-2 text-center'>{state}</h2>
      </div>
      <div className='space-y-4'>
        {tasks?.map(task => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} openModal={openModal} />
        ))}
      </div>
    </div>
  )
}

export default TaskColumn
