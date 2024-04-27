import React, {InputHTMLAttributes} from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
    <input {...props} className='' />
  )
}

export default Input