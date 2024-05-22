import { FC, FormEvent } from 'react'
import { useStoryEditForm } from '../../hooks/useStoryEditForm'
import { Priority, State } from '../../types/types'

interface EditStoryFormProps {
  storyId: string
  closeModal: () => void
}

const EditStoryForm: FC<EditStoryFormProps> = ({ storyId, closeModal }) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    priority,
    setPriority,
    state,
    setState,
    handleSubmit,
  } = useStoryEditForm(storyId)

  const combinedHandleSubmit = (e: FormEvent) => {
    handleSubmit(e)
    closeModal()
  }

  return (
    <form onSubmit={(e: FormEvent) => combinedHandleSubmit(e)} className='space-y-6'>
      <h2 className='text-2xl font-bold text-center mb-4'>Edit Story</h2>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Title <span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
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

export default EditStoryForm
