import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { FC } from 'react'

const Layout: FC = () => {
  return (
    <>
      <Header></Header>
      <div className='w-full h-[80vh]'>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  )
}

export default Layout
