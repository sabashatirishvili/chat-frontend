import ChatList from '@/components/Channels/ChatList'
import Header from '@/components/Chats/Header'
import React from 'react'

function Channel() {
  return (
    <div className='flex grow'>
      <div className='h-full'>
        <ChatList /> 
      </div>
      <div className='grow'>
        <Header/>
      </div>
    </div>

  )
}

export default Channel