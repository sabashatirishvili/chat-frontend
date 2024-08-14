import Header from '@/components/Chats/Header'
import InputBar from '@/components/Chats/InputBar';
import Message from '@/components/Message/Message';
import React from 'react'
import { MdAlternateEmail } from "react-icons/md";

export default function Chat() {
  return (
    <div className='flex flex-col grow h-full'>
      <Header />
      <div className='flex flex-col grow justify-between px-2'>
        <div className='grow flex flex-col justify-between '>
          <div className='mt-[12rem] flex flex-col gap-4 items-center justify-center text-slate-700'>
            <MdAlternateEmail size={128} className='text-slate-900' />
            <div className='flex flex-col items-center text-center'>
              <h1 className='text-2xl'>You have no messages with the_user yet.</h1>
              <h3 className='text-lg'>You may start a conversation!</h3>
            </div>
          </div>
          <div className='overflow-hidden'>
            <Message/>
            <Message/>
          </div>
          <InputBar />
        </div>
        
      </div>
    </div>

  )
}
