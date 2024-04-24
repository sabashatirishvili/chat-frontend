"use client";
import React from 'react'

export default function Login() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='flex flex-col items-center justify-center bg-slate-700 p-6 rounded-sm'>
        <label htmlFor="email" className='self-start'>Email</label>
        <input type="text" name="email" className='border-2 border-black rounded-md flex-1' />
        <label htmlFor="password" className='self-start'>Password</label>
        <input type="text" name='password' className='border-2 border-black rounded-md flex-1' />
        <input type="submit"/>
      </div>
    </div>
  )
}

