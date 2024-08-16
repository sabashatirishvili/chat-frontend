import React from 'react'
import ChatGroup from './ChatGroup'

export default function ChatList() {
  return (
    <div className='bg-slate-900 h-full min-w-[16rem] flex flex-col p-2 border-l border-slate-700'>
      <h1 className='pb-4 border-b text-center border-slate-700'>server_name</h1>
      <div className='overflow-auto'>
        <ChatGroup />
      </div>
    </div>
  )
}
