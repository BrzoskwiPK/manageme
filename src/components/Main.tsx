import { FC } from 'react'
import MainHeader from './MainHeader'
import Introduction from './Introduction'
import FeatureList from './FeatureList'
import ActionButtons from './ActionButtons'

const Main: FC = () => {
  return (
    <section className='h-full w-full flex flex-col items-center bg-background text-gray-800 text-center'>
      <MainHeader />
      <main className='flex flex-col items-center py-10 px-4 max-w-4xl w-full'>
        <Introduction />
        <FeatureList />
        <ActionButtons />
      </main>
    </section>
  )
}

export default Main
