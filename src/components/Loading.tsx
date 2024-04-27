import { FC } from 'react'
import { BarLoader } from 'react-spinners'

const Loading: FC = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <BarLoader color='#6366f1' width={500} />
    </div>
  )
}

export default Loading
