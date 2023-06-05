import { LockClosedIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectAuth } from '../app/features/Auth/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errors, setErrors] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = useSelector(selectAuth)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let { data } = await axios.post('https://dapur-solo.cyclic.app//auth/login', {
                email,
                password
            }, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            
            if (data.error) {
                setErrors(data.response)
            } else {
                const { user, token } = data
                alert('Login successfully!')
                dispatch(login({ user, token }))
                setErrors([])
                navigate(-1)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth))
    }, [auth])

    return (
        <>
            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://dapursolo.com/library/2022/10/200x60-dapur-solologofin-rgbprimary-logo-1665116236.png"
                            alt="Dapur Solo"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="register" className="font-medium text-amber-600 hover:text-amber-500">
                                Register
                            </a>
                        </p>
                    </div>
                    <div className='bg-red-200 rounded-lg'>
                        <p className='text-center'>{errors}</p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="account" className="font-medium text-amber-600 hover:text-amber-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div className="text-sm">
                            <a href="home" className="font-medium text-amber-600 hover:text-amber-500">
                                &larr; Back Home
                            </a>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-amber-500 group-hover:text-amber-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
