import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Layout = lazy(() => import('./components/Layout'))
const Loading = lazy(() => import('./components/Loading'))
const Main = lazy(() => import('./components/Main'))
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'))
const RouteError = lazy(() => import('./components/RouteError'))

const SignIn = lazy(() => import('./pages/SignIn'))
const Projects = lazy(() => import('./pages/Projects'))
const CurrentProject = lazy(() => import('./pages/CurrentProject'))

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
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path='/login'
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
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path='/projects/current'
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute>
              <CurrentProject />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path='*'
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute>
              <RouteError />
            </ProtectedRoute>
          </Suspense>
        }
      />
    </Route>
  )
)

export default AppRouter
