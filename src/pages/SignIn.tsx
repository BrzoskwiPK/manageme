import { FC } from 'react'
import SignInForm from '../components/forms/SignInForm'
import { useSignInForm } from '../hooks/useSignInForm'

const SignIn: FC = () => {
  const { formError, handleSignIn, handleUsernameChange, handlePasswordChange } = useSignInForm()
  // const { isAuthenticated, isLoading } = useAuthenticatedUser()
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (isAuthenticated) navigate('/feed')
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoading])

  return (
    <div className='h-[80vh] w-full flex flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img className='mx-auto h-10 w-auto' src='/assets/logo.png' alt='WSEI' />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <SignInForm
          onSubmit={handleSignIn}
          onPasswordChange={handlePasswordChange}
          onUsernameChange={handleUsernameChange}
        />
      </div>
      {formError ? (
        <div className='w-full text-red-600 font-bold text-center mt-5'>{formError}</div>
      ) : null}
    </div>
  )
}

export default SignIn
