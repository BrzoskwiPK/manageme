import { FC } from 'react'
import { Priority } from '../types/types'
import { useNotifications } from '../hooks/useNotifications'

const NotificationList: FC = () => {
  const { notifications, markNotificationAsRead } = useNotifications()

  return (
    <div className='w-full h-full mx-auto mt-6'>
      <section className='bg-indigo-600 text-white py-6 rounded-t-lg shadow-md'>
        <h1 className='text-3xl font-bold text-center'>Notifications</h1>
      </section>
      <ul className='bg-white shadow-md rounded-b-lg p-4 space-y-4 h-[65vh] overflow-y-auto'>
        {notifications.map(notification => (
          <li key={notification.id} className='p-4 border rounded-md hover:bg-gray-100 transition'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='text-xl font-semibold'>{notification.title}</h3>
                <p className='text-sm text-gray-500'>
                  {new Date(notification.date).toLocaleString()}
                </p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-sm font-medium ${
                  notification.priority === Priority.HIGH
                    ? 'bg-red-500 text-white'
                    : notification.priority === Priority.MEDIUM
                    ? 'bg-yellow-500 text-white'
                    : 'bg-green-500 text-white'
                }`}>
                {notification.priority}
              </span>
            </div>
            <p className='mt-2 text-gray-700'>{notification.message}</p>
            <div className='flex justify-end mt-4'>
              <button
                onClick={e => markNotificationAsRead(e, notification)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  notification.read
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
                disabled={notification.read}>
                {notification.read ? 'Read' : 'Mark as Read'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotificationList
