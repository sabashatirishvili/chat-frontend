import React from 'react'
import User from './User'

export default function Sidebar() {
  return (
    <div className='bg-slate-900 border-slate-800 shadow-xl min-w-[16vw] px-2 border-l'>
      <div className='flex items-center justify-center text-center py-3 border-b border-b-slate-800'>
        <h1>Direct Messages</h1>
      </div>
      <div className='pt-2'>
        <User/>
        <User/>
        <User/>
      </div>
    </div>
  )
}
