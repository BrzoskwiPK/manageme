import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import SignIn from './pages/SignIn'
import Projects from './pages/Projects'

const Layout = lazy(() => import('./components/Layout'))
const Loading = lazy(() => import('./components/Loading'))
const RouteError = lazy(() => import('./components/RouteError'))

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      }>
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <SignIn />
          </Suspense>
        }
      />
      <Route
        path='/projects'
        element={
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        }
      />
      <Route
        path='*'
        element={
          <Suspense fallback={<Loading />}>
            <RouteError />
          </Suspense>
        }
      />
    </Route>
  )
)

export default AppRouter
