"use client";
import React, { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import AuthInput from '@/components/Authentication/AuthInput';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (field: string, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }))
  }
  console.log(credentials)

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full rounded-lg flex *:flex-1 bg-slate-900 border border-slate-700 max-w-[64rem] py-6 px-2'>
        <div className='flex flex-col border-r border-slate-700 p-4 gap-6'>
          <h1 className='text-center text-lg pb-6 border-b border-slate-700'>Sign in</h1>
          <div className='flex flex-col gap-2'>
            <AuthInput label="Email" onChange={handleChange} />
            <AuthInput label="Username" onChange={handleChange} />
            <AuthInput label="Password" password={true} onChange={handleChange} />
          </div>
          <Link href="/login" className='text-gray-300  underline'>Already have an account? Sign in</Link>
          <button onClick={() => {
            axios.post('http://localhost:8000/api/users/login/', credentials).then((res) => console.log(res.data))
          }} className='self-center bg-green-600 text-gray-200 py-1 px-4 rounded-sm text-md'>Submit</button>
        </div>
        <div className='flex flex-col p-4'>
          <h1 className='text-center text-lg pb-6 border-b border-slate-700'>Social</h1>
          <div className='py-6 px-[6rem] flex flex-col'>
            <GoogleLogin onSuccess={() => console.log('hi')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login