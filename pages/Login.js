import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { signIn, useSession } from 'next-auth/react'
import Layout from '../components/Layout'

function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const { redirect } = router.query

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/')
    }
  }, [router, session, redirect])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function submitHandler({ email, password }) {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (result.error) {
        console.log('Login failed')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout title='Login'>
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Welcome Back</h2>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          <div>
            <input
              {...register('email', { required: true })}
              type='email'
              className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 outline-none transition'
              id='email'
              placeholder='Email'
              autoFocus
            />
            {errors.email && (
              <p className='text-sm text-red-500 mt-1'>Please enter your email.</p>
            )}
          </div>
          <div>
            <input
              {...register('password', {
                required: 'Password is required.',
                minLength: {
                  value: 5,
                  message: 'Password must be at least 5 characters.',
                },
              })}
              type='password'
              className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 outline-none transition'
              id='password'
              placeholder='Password'
            />
            {errors.password && (
              <p className='text-sm text-red-500 mt-1'>{errors.password.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className='w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition'
            >
              Login
            </button>
          </div>
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-gray-800 hover:underline font-medium">
              Register
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default LoginPage
