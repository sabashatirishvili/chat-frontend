import React from 'react'
import { IoMdClose } from 'react-icons/io'

interface PropTypes {
  onClick: () => void
}

export default function AddFriendModal({ onClick }: PropTypes) {
  return (
    <div className='absolute inset-0 bg-gray-900 bg-opacity-50'>
      <div className='flex flex-col items-center gap-3 rounded-md border border-slate-700 bg-slate-900 absolute left-1/2 top-1/2 -tranlate-x-1/2 -translate-y-1/2 px-6 py-4'>
        <div className='flex items-center justify-between w-full border-b border-slate-800 pb-2'>
          <h1 className='text-sm text-gray-200'>Add a friend</h1>
          <button onClick={onClick} className='flex items-center jsutify-center'>
            <IoMdClose className='text-gray-200' />
          </button>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="username" className='text-sm text-gray-200'>Username</label>
          <input type="text" name="username" className='px-2 py-1 text-sm rounded-sm bg-slate-800' />
        </div>
        <button className='bg-green-600 text-gray-200 rounded-md px-2 py-1 text-sm'>Add Friend</button>
      </div>
    </div>

  )
}
