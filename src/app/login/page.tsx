"use client";
import React from 'react'
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';

export default function Login() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='flex flex-col justify-betwee bg-slate-900 border-2 border-slate-600 p-6 rounded-sm'>
        <div className='flex flex-col pb-4'>
          <label htmlFor="email" className='self-start'>Email</label>
          <Input name='email'/>
        </div>
        <div className='flex flex-col pb-6'>
          <label htmlFor="password" className='self-start'>Password</label>
          <Input name='password'/>
          <p>Forgot Password?</p>
        </div>

        <Button>Log in</Button>
        <button className='text-sm pt-2 text-cyan-600 hover:cursor-pointer'>Don&apos;t have an account? Sign up</button>
      </div>
    </div>
  )
}

