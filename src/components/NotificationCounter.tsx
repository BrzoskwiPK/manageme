import { FC } from 'react'
import { useNotifications } from '../hooks/useNotifications'

const NotificationCounter: FC = () => {
  const { unreadCount } = useNotifications()

  return (
    <button
      type='button'
      className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300'>
      Messages
      <span className='inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-600 bg-indigo-100 rounded-full'>
        {unreadCount}
      </span>
    </button>
  )
}

export default NotificationCounter
