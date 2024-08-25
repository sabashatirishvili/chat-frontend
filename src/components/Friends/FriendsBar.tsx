import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import AddButton from '../Servers/AddButton'

export default function FriendsBar() {
  return (
    <div className='bg-slate-900 flex items-center justify-between px-3 py-3 border-b border-l border-slate-800'>
      <div className='flex gap-4'>
        <h1 className='text-slate-300'>Friends</h1>
      </div>
      <div className='flex gap-2 h-full'>
        <div className='flex justify-between items-center  bg-slate-800 rounded-md shadow-lg px-2'>
          <input type="text" className='text-xs text-slate-300 placeholder-slate-500' placeholder='Search' />
          <FaMagnifyingGlass className='text-slate-700' />
        </div>
        <button className='bg-green-600 text-gray-200 rounded-md text-sm py-1 px-3 grow '>Add Friend</button>
      </div>
    </div>
  )

}

