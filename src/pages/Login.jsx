import React from 'react'
import useAuthentication from '../hooks/useAuthentication'
import '../components/Authentication/styles/login.css'
import { Link } from 'react-router-dom'

const Login = () => {

    const { loginUser } = useAuthentication()

    const handleLogin = e => {
        const email = e.target.email.value
        const password = e.target.password.value
        const data = { email, password }
        loginUser(data)
    }

    return (
        <div className='login'>

            <form className='login__form' onSubmit={handleLogin}>
                <h1>
                    Welcome! Enter your email and password to continue
                </h1>

                <div className='login__fields'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='name@domain.com' id='email' />
                </div>

                <div className='login__fields'>
                    <label htmlFor="password" >Password</label>
                    <input type="password" placeholder='password' id='password' />
                </div>

                <button>Sign in</button>
                
            </form>
            <p className='login_register'>
                Don't have an account?
                <Link to='/register'>
                    Sign up
                </Link>
            </p>
        </div>
    )
}

export default Login