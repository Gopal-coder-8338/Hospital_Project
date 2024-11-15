//import React from 'react'

import { useState } from "react"

const Login = () => {

  const [state, setState] = useState('Sign Up'); 

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSublitForm = async (e) => {
    e.preventDefault();
  }
  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={handleSublitForm}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>{state === 'Sign Up' ? 'sign up' : 'login'} to book appointment</p>
        {
          state === 'Sign Up' && 
          <div className="w-full">
          <p>Full Name</p>
          <input className="border w-full p-2 mt-1 border-zinc-300 rounded" type="text" onChange={(e) => setName(e.target.value)} required value={name} />
        </div> 
        }
        
        <div className="w-full">
          <p>Email</p>
          <input className="border w-full p-2 mt-1 border-zinc-300 rounded" type="email" onChange={(e) => setEmail(e.target.value)} required value={email} />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input className="border w-full p-2 mt-1 border-zinc-300 rounded" type="password" onChange={(e) => setPassword(e.target.value)} required value={password} />
        </div>
        <button className="bg-primary w-full text-base text-white py-2 rounded-md">{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        {
          state === 'Sign Up' 
          ? 
          <p>Already have an account? <span onClick={() => setState('Login')} className="text-primary underline cursor-pointer">Login here</span></p>
           : 
          <p>Create an new accunt? <span onClick={() => setState('Sign Up')} className="text-primary underline cursor-pointer">click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login