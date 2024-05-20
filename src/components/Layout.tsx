import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { FC } from 'react'

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className='w-full h-[80vh] flex items-center justify-center'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
