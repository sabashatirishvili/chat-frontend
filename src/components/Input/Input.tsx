import React, {InputHTMLAttributes} from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
    <input {...props} className='bg-gray-700 h-8 border-2 border-gray-600 rounded-sm p-1' />
  )
}

export default Input