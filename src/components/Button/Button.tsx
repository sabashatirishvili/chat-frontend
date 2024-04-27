import React, { ReactNode } from 'react'

interface ButtonProps {
  children?: ReactNode
};

function Button({ children }: ButtonProps,) {
  return (
    <div className='bg-red-500 rounded-lg p-1 text-md hover:cursor-pointer'>{children}</div>
  )
}

export default Button