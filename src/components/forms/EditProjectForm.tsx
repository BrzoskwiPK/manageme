import { FC, FormEvent } from 'react'
import { useProjectEditForm } from '../../hooks/useProjectEditForm'

interface EditProjectFormProps {
  projectId: string
  closeModal: (e: FormEvent) => void
}

const EditProjectForm: FC<EditProjectFormProps> = ({
  closeModal,
  projectId,
}: EditProjectFormProps) => {
  const { name, description, handleSubmit, formErrors, handleNameChange, handleDescriptionChange } =
    useProjectEditForm(projectId)

  const handleSubmitForm = (e: FormEvent) => {
    handleSubmit(e)
    closeModal(e)
  }

  return (
    <form
      className='space-y-6 w-full max-w-md bg-white p-6 rounded-lg shadow-lg'
      onSubmit={handleSubmitForm}>
      <div>
        <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>
          Project name <span className='text-red-500'>*</span>
        </label>
        <div className='mt-2'>
          <input
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            required
            maxLength={50}
            value={name}
            onChange={handleNameChange}
            className='block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm'
          />
        </div>
      </div>
      <div>
        <label htmlFor='description' className='block text-sm font-medium leading-6 text-gray-900'>
          Project description <span className='text-red-500'>*</span>
        </label>
        <div className='mt-2'>
          <textarea
            id='description'
            name='description'
            autoComplete='description'
            required
            maxLength={150}
            value={description}
            onChange={handleDescriptionChange}
            className='block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm'
          />
        </div>
      </div>
      {formErrors && <div className='text-red-500 text-sm'>{formErrors}</div>}
      <div className='mt-6'>
        <button
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
          SUBMIT
        </button>
      </div>
    </form>
  )
}

export default EditProjectForm
