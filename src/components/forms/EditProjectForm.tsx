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
  const { name, description, handleSubmit, handleNameChange, handleDescriptionChange } =
    useProjectEditForm(projectId)

  const handleSubmitForm = (e: FormEvent) => {
    handleSubmit(e)
    closeModal(e)
  }

  return (
    <form className='space-y-6 w-[500px]' onSubmit={handleSubmitForm}>
      <div>
        <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>
          Project name <span className='text-red-500'>*</span>
        </label>
        <div className='mt-2'>
          <input
            id='name'
            name='name'
            type='name'
            autoComplete='name'
            required
            maxLength={50}
            value={name}
            onChange={handleNameChange}
            className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label
            htmlFor='description'
            className='block text-sm font-medium leading-6 text-gray-900'>
            Project description <span className='text-red-500'>*</span>
          </label>
        </div>
        <div className='mt-2'>
          <textarea
            id='description'
            name='description'
            autoComplete='description'
            required
            maxLength={150}
            value={description}
            onChange={handleDescriptionChange}
            className='w-full block max-h-[200px] rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
        <div className='mt-2'>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  )
}

export default EditProjectForm
