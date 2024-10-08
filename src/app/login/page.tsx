"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import AuthInput from '@/components/Authentication/AuthInput';
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';

axios.defaults.withCredentials = true

function Login() {
  const router = useRouter()
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
            <AuthInput label="Password" password={true} onChange={handleChange} />
          </div>
          <Link href="/register" className='text-gray-300  underline'>Already have an account? Sign up</Link>
          <button onClick={() => {
            axios.post('http://localhost:8000/api/users/login/', credentials).then((res) => {
              if (res.status == 200) {
                router.push('/')
              }
            }
            ).catch(error => console.error('Login error', error))
          }} className='self-center bg-green-600 text-gray-200 py-1 px-4 rounded-sm text-md'>Sign in</button>
        </div>
        <div className='flex flex-col p-4'>
          <h1 className='text-center text-lg pb-6 border-b border-slate-700'>Or</h1>
          <div className='py-6 px-[6rem] flex flex-col'>
            {/* <GoogleLogin onSuccess={() => console.log('hi')} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login