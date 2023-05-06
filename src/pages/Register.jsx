import React from 'react'
import useFetch from '../hooks/useFetch'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultRegisterValues from '../components/utils/defaultRegisterValues'

const Register = () => {

    const { register, handleSubmit, reset } = useForm()

    const { createNewUser } = useAuthentication()

    const sumit = data => {
        createNewUser(data)
        reset(defaultRegisterValues)

    }

  return (
   <form onSubmit={handleSubmit(sumit)}>
    <h1>Create a new User</h1>
    <div>
        <label htmlFor="firstName">First Name</label>
        <input {...register('firstName')} type="text" id='firstName' />
    </div>
    <div>
        <label htmlFor="lasttName">Last Name</label>
        <input {...register('lastName')} type="text" id='lasttName' />
    </div>
    <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="text" id='email' />
    </div>
    <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')}  type="text" id='password' />
    </div>
    <div>
        <label htmlFor="phone">Phone</label>
        <input {...register('phone')}  type="tel" id='phone' />
    </div>
    <button>Register</button>
   </form>
  )
}

export default Register