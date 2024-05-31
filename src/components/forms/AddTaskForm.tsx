import { FC, FormEvent, useState } from 'react'
import { useTaskForm } from '../../hooks/useTaskForm'
import { Priority, State } from '../../types/types'
import { useUsers } from '../../hooks/useUsers'

interface AddTaskFormProps {
  storyId: string
  closeModal: () => void
}

const AddTaskForm: FC<AddTaskFormProps> = ({ storyId, closeModal }) => {
  const {
    setName,
    setDescription,
    setPriority,
    setEstimatedTime,
    state,
    setState,
    startedAt,
    setStartedAt,
    finishedAt,
    setFinishedAt,
    setResponsibleUser,
    handleSubmit,
  } = useTaskForm(storyId)

  const { users } = useUsers()

  const filteredUsers = users?.filter(user => ['DEVELOPER', 'DEVOPS'].includes(user.role))

  const [error, setError] = useState<string | null>(null)

  const submitForm = (e: FormEvent) => {
    e.preventDefault()

    if (state === 'DONE' && startedAt && finishedAt) {
      if (startedAt >= finishedAt) {
        setError('Finish date must be after start date')
        return
      }
    }

    handleSubmit(e)
    closeModal()
  }

  return (
    <form
      className='space-y-6 w-full max-w-lg p-6 bg-white rounded-lg shadow-md max-h-[80vh] overflow-y-scroll'
      onSubmit={e => submitForm(e)}>
      <div>
        <h1 className='text-4xl font-bold text-center mb-8'>Add Task</h1>
        <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>
          Name <span className='text-red-500'>*</span>
        </label>
        <div className='mt-2'>
          <input
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            maxLength={50}
            onChange={e => setName(e.target.value)}
            required
            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div>
        <label htmlFor='description' className='block text-sm font-medium leading-6 text-gray-900'>
          Description <span className='text-red-500'>*</span>
        </label>
        <div className='mt-2'>
          <textarea
            id='description'
            name='description'
            autoComplete='description'
            maxLength={150}
            onChange={e => setDescription(e.target.value)}
            required
            className='max-h-48 w-full block rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div>
        <label htmlFor='priority' className='block text-sm font-medium leading-6 text-gray-900'>
          Priority <span className='text-red-500'>*</span>
        </label>
        <div className='mt-2'>
          <select
            id='priority'
            name='priority'
            onChange={e => setPriority(e.target.value as Priority)}
            required
            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
            <option value='LOW'>LOW</option>
            <option value='MEDIUM'>MEDIUM</option>
            <option value='HIGH'>HIGH</option>
          </select>
        </div>
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
            min={0}
            max={1000}
            onChange={e => setEstimatedTime(parseInt(e.target.value))}
            required
            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div>
        <label htmlFor='state' className='block text-sm font-medium leading-6 text-gray-900'>
          State <span className='text-red-500'>*</span>
        </label>
        <div className='mt-2'>
          <select
            id='state'
            name='state'
            onChange={e => setState(e.target.value as State)}
            required
            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
            <option value='TODO'>TODO</option>
            <option value='DOING'>DOING</option>
            <option value='DONE'>DONE</option>
          </select>
        </div>
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
      {error && <p className='mt-1 text-sm text-red-500 text-center font-bold'>{error}</p>}
      <div className='mt-4 flex justify-center space-x-2'>
        <button
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
          SUBMIT
        </button>
      </div>
    </form>
  )
}

export default AddTaskForm
