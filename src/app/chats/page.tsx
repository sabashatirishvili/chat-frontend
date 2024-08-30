import Friend from '@/components/Friends/Friend'
import FriendsBar from '@/components/Friends/FriendsBar'
import React from 'react'

export default function Chats() {
  return (
    <div className='w-full flex flex-col'>
      <div className=''>
        <FriendsBar />
      </div>
      <div className='flex flex-col overflow-auto'>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
      </div>
    </div>

  )
}
