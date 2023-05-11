import React from 'react'
import useFetch from '../hooks/useFetch'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultRegisterValues from '../components/utils/defaultRegisterValues'
import '../components/Authentication/styles/register.css'

const Register = () => {

    const { register, handleSubmit, reset } = useForm()

    const { createNewUser } = useAuthentication()

    const sumit = data => {
        createNewUser(data)
        reset(defaultRegisterValues)
    }

  return (
    <div className="register">
        
   <form className='register__form' onSubmit={handleSubmit(sumit)}>
    <h1>Sign Up</h1>
    <div className='register__fields'>
        <label htmlFor="firstName">First Name</label>
        <input {...register('firstName')} type="text" id='firstName' placeholder='Joe'  />
    </div>
    <div className='register__fields'>
        <label htmlFor="lasttName">Last Name</label>
        <input {...register('lastName')} type="text" id='lasttName' placeholder='Black' />
    </div>
    <div className='register__fields'>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="text" id='email' placeholder='name@domain.com' />
    </div>
    <div className='register__fields'>
        <label htmlFor="password">Password</label>
        <input {...register('password')}  type="text" id='password' placeholder='password' />
    </div>
    <div className='register__fields'>
        <label htmlFor="phone">Phone(10 characters)</label>
        <input {...register('phone')}  type="tel" id='phone' placeholder='12345678' />
    </div>
    <button>Register</button>
   </form>
   </div>
  )
}

export default Register