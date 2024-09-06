"use client";
import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import AddFriendModal from './AddFriendModal'

export default function FriendsBar() {
  const [modal, setModal] = useState(false)

  const handleClick = () => setModal(prev => !prev)
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
        <button onClick={handleClick} className='bg-green-600 text-gray-200 rounded-md text-sm py-1 px-3 grow '>Add Friend</button>
      </div>
      {modal && <AddFriendModal onClick={handleClick} />}
    </div>
  )

}

