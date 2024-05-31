import { FC, FormEvent } from 'react'
import { Priority, State } from '../../types/types'
import { useTaskEditForm } from '../../hooks/useTaskEditForm'
import { useUsers } from '../../hooks/useUsers'

interface EditTaskFormProps {
  taskId: string
  closeModal: () => void
}

const EditTaskForm: FC<EditTaskFormProps> = ({ taskId, closeModal }) => {
  const {
    name,
    setName,
    description,
    setDescription,
    priority,
    setPriority,
    state,
    setState,
    estimatedTime,
    setEstimatedTime,
    startedAt,
    setStartedAt,
    finishedAt,
    setFinishedAt,
    responsibleUser,
    setResponsibleUser,
    handleSubmit,
  } = useTaskEditForm(taskId)

  const { users } = useUsers()

  const filteredUsers = users?.filter(user => ['DEVELOPER', 'DEVOPS'].includes(user.role))

  const combinedHandleSubmit = (e: FormEvent) => {
    handleSubmit(e)
    closeModal()
  }

  return (
    <form onSubmit={(e: FormEvent) => combinedHandleSubmit(e)} className='space-y-6'>
      <h2 className='text-2xl font-bold text-center mb-4'>Edit Task</h2>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Name <span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'
          required
        />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Description <span className='text-red-500'>*</span>
        </label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className='max-h-48 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'
          required></textarea>
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Priority <span className='text-red-500'>*</span>
        </label>
        <select
          value={priority}
          onChange={e => setPriority(e.target.value as Priority)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'>
          <option value={Priority.LOW}>Low</option>
          <option value={Priority.MEDIUM}>Medium</option>
          <option value={Priority.HIGH}>High</option>
        </select>
      </div>
      <div>
        <label
          htmlFor='estimatedTime'
          className='block text-sm font-medium leading-6 text-gray-900'>
          Estimated Time (hours) <span className='text-red-500'>*</span>
        </label>
        <div className='mt-2'>
          <input
            id='estimatedTime'
            name='estimatedTime'
            type='number'
            value={estimatedTime}
            min={0}
            max={1000}
            onChange={e => setEstimatedTime(parseInt(e.target.value))}
            required
            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          State <span className='text-red-500'>*</span>
        </label>
        <select
          value={state}
          onChange={e => setState(e.target.value as State)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'>
          <option value={State.TODO}>TODO</option>
          <option value={State.DOING}>DOING</option>
          <option value={State.DONE}>DONE</option>
        </select>
      </div>
      <div>
        <label htmlFor='startedAt' className='block text-sm font-medium leading-6 text-gray-900'>
          Started At
        </label>
        <div className='mt-2'>
          <input
            id='startedAt'
            name='startedAt'
            type='datetime-local'
            value={startedAt ? new Date(startedAt).toISOString().slice(0, 16) : ''}
            onChange={e => setStartedAt(new Date(e.target.value))}
            disabled={state === 'TODO'}
            required={state === 'DOING'}
            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div>
        <label htmlFor='finishedAt' className='block text-sm font-medium leading-6 text-gray-900'>
          Finished At
        </label>
        <div className='mt-2'>
          <input
            id='finishedAt'
            name='finishedAt'
            type='datetime-local'
            disabled={state !== 'DONE'}
            required={state === 'DONE'}
            value={finishedAt ? new Date(finishedAt).toISOString().slice(0, 16) : ''}
            onChange={e => setFinishedAt(new Date(e.target.value))}
            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div>
        <label
          htmlFor='responsibleUser'
          className='block text-sm font-medium leading-6 text-gray-900'>
          Responsible User
        </label>
        <div className='mt-2'>
          <select
            id='responsibleUser'
            name='responsibleUser'
            required={state !== 'TODO'}
            value={responsibleUser}
            onChange={e => setResponsibleUser(e.target.value)}
            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
            {filteredUsers?.map(user => (
              <option key={user.username} value={user.id}>
                {`${user.name} ${user.surname}`}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex flex-col justify-center w-full gap-4'>
        <button
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
          UPDATE
        </button>
      </div>
    </form>
  )
}

export default EditTaskForm
