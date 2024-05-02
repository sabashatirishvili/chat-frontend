import React, { ReactNode } from 'react'

interface ButtonProps {
  children?: ReactNode
};

function Button({ children }: ButtonProps,) {
  return (
    <div className='bg-sky-700 flex justify-center items-center text-sm rounded-lg h-9 p-2 text-md hover:cursor-pointer'>{children}</div>
  )
}

export default Button