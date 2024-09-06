"use client";
import { useRef, useEffect } from 'react';
import React from 'react'
import ChatList from '@/components/Channels/ChatList'
import Header from '@/components/Chats/Header'
import InputBar from '@/components/Chats/InputBar'
import Message from '@/components/Message/Message'
import { MdAlternateEmail } from 'react-icons/md'

function Channel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [])

  return (
    <div className='flex grow'>
      <div className='h-full'>
        <ChatList />
      </div>
      <div className='flex flex-col grow'>
        <Header />
        <div className='flex flex-col grow overflow-auto'>
          <div className='flex flex-col grow'>
            <div className='mt-[12rem] flex flex-col gap-4 items-center justify-center text-slate-700'>
              <MdAlternateEmail size={128} className='text-slate-900' />
              <div className='flex flex-col items-center text-center'>
                <h1 className='text-2xl'>You have no messages with the_user yet.</h1>
                <h3 className='text-lg'>You may start a conversation!</h3>
              </div>
            </div>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <div ref={scrollRef}/>
          </div>
          <div>
          </div>
        </div>
        <InputBar />
      </div>
    </div>

  )
}

export default Channel