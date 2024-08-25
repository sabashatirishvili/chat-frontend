import React from 'react'

interface PropTypes {
  label: string,
  password?: boolean,
  data?: string,
  onChange: Function
}
export default function AuthInput({ label, password, onChange }: PropTypes) {
  return (
    <div className='flex flex-col gap-[2px]'>
      <label htmlFor="password" className='text-md text-gray-300'>{label}</label>
      <input onChange={(e) => {
        onChange(label.toLowerCase(), e.target.value);
      }} type={password ? 'password' : 'text'} className='px-2 py-2 rounded-sm bg-slate-800' />
    </div>
  )
}
