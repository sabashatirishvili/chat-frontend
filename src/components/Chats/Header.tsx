import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  return (
    <div className='bg-slate-900 py-3 border-l border-b shadow-md text-slate-600 border-slate-800 px-4 flex justify-between'>
      <h1>Chat</h1>
      <div className='flex justify-between items-center  bg-slate-800 rounded-md shadow-lg px-2'>
        <input type="text" className='text-xs text-slate-300 placeholder-slate-500' placeholder='Search' />
        <FaMagnifyingGlass />
      </div>
    </div>
  )
}
