"use client";
import React from 'react'
import Button from '@/components/Button/Button';

export default function Login() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='flex flex-col items-center justify-between gap-2 bg-slate-900 border-2 border-slate-600 p-4 rounded-sm'>
        <div className='flex flex-col'>
          <label htmlFor="email" className='self-start'>Email</label>
          <input type="text" name="email" className='border-2 border-black bg-white rounded-md flex-1' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password" className='self-start'>Password</label>
          <input type="text" name='password' className='border-2 border-black bg-white rounded-md flex-1' />
        </div>

        <Button>Submit</Button>
      </div>
    </div>
  )
}

