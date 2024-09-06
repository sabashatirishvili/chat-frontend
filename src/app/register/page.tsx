"use client";
import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthInput from '@/components/Authentication/AuthInput';
import { GoogleLogin } from '@react-oauth/google';

function Register() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/token/', credentials).then((res) => {
      if (res.status == 201) {
        router.push('/')
        console.log(res.data)
        document.cookie = `token=${res.data}`
      }
    }
    ).catch(error => {
      console.log(error.message);
    })
  }

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
          <button onClick={handleSubmit} className='self-center bg-green-600 text-gray-200 py-1 px-4 rounded-sm text-md'>Sign up</button>
        </div>
        <div className='flex flex-col p-4'>
          <h1 className='text-center text-lg pb-6 border-b border-slate-700'>Or</h1>
          <div className='py-6 px-[6rem] flex flex-col'>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Register