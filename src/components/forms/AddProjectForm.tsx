import { ChangeEvent, FC, FormEvent } from 'react'

interface AddProjectFormProps {
  onSubmit: (e: FormEvent) => Promise<void>
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void
  onDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  closeModal: (e: FormEvent) => void
  formErrors: string
}

const AddProjectForm: FC<AddProjectFormProps> = ({
  onSubmit,
  onNameChange,
  onDescriptionChange,
  closeModal,
  formErrors,
}: AddProjectFormProps) => {
  const handleSubmit = (e: FormEvent) => {
    if (!formErrors.length) {
      onSubmit(e)
      closeModal(e)
    }
  }

  return (
    <form
      className='space-y-6 w-full max-w-lg p-6 bg-white rounded-lg shadow-md'
      onSubmit={handleSubmit}>
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
            maxLength={50}
            onChange={onNameChange}
            required
            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
            maxLength={150}
            onChange={onDescriptionChange}
            required
            className='max-h-48 w-full block rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      {formErrors && <div className='text-red-500 text-sm'>{formErrors}</div>}
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

export default AddProjectForm
