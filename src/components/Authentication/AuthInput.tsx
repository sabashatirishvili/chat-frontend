import React from 'react'

interface PropTypes {
  label: String,
  password?: boolean
}
export default function AuthInput({ label, password }: PropTypes) {
  return (
    <div className='flex flex-col gap-[2px]'>
      <label htmlFor="password" className='text-md text-gray-300'>{label}</label>
      <input type={password ? 'password' : 'text'} className='px-2 py-2 rounded-sm bg-slate-800' />
    </div>
  )
}
