import React from 'react'
import { FaPen } from "react-icons/fa";

interface PropTypes {
  label: string
}

export default function Setting({ label }: PropTypes) {
  return (
    <div className='flex flex-col pb-1'>
      <label htmlFor="username" className='text-sm'>{label}</label>
      <div className='flex'>
        <input type="text" name='username' value="the_user" disabled className='text-gray-400' />
      </div>
    </div>
  )
}
