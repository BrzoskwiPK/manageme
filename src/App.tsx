import { RouterProvider } from 'react-router-dom'
import AppRouter from './router'
import AuthProvider from 'react-auth-kit/AuthProvider'
import createStore from 'react-auth-kit/createStore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
  // refresh: refreshToken,
})

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider store={store}>
        <RouterProvider router={AppRouter} />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
