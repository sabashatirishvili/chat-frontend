import React from 'react'
import { IoChatboxSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

export default function Friend() {
  return (
    <div className='flex items-center justify-between px-6 py-2 border-b border-slate-700'>
      <div className='flex gap-3 items-center'>
        <div className='bg-green-600 rounded-full w-10 h-10 text-center flex items-center justify-center'>U</div>
        <h1>the_user</h1>
      </div>
      <div className='flex items-center gap-2 *:bg-slate-900 *:rounded-full *:w-10 *:h-10 *:flex *:items-center *:justify-center'>
        <button className='text-green-600'><IoChatboxSharp/></button>
        <button><FaTrashAlt className='text-red-600'/></button>
      </div>
    </div>
  )
}
