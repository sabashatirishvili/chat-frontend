"use client";
import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Chats/Header'
import InputBar from '@/components/Chats/InputBar';
import Message from '@/components/Message/Message';
import React from 'react'
import { MdAlternateEmail } from "react-icons/md";

export default function Chat() {
  const params = useParams();
  console.log(params);
  const socket = new WebSocket(`http://localhost:8000/ws/chat/${params.id}/`)
  const scrollRef = useRef<HTMLDivElement | null>(null);

  function sendMessage(message: string) {
    if (socket.readyState === WebSocket.OPEN) {
      const messageData = JSON.stringify({ message: message });
      socket.send(messageData);
    } else {
      console.error('WebSocket is not open. ReadyState:', socket.readyState);
    }
  }

  socket.onopen = () => console.log("ws connection opened");
  socket.onclose = () => console.log("ws connection closed");

  socket.onmessage

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [])

  return (
    <div className='flex'>
      <div className='flex flex-col grow max-h-screen'>
        <Header />
        <div className='flex flex-col grow justify-between px-2 overflow-auto'>
          <div className='grow flex flex-col justify-between '>
            <div className=''>
              <div className='mt-[12rem] flex flex-col gap-4 items-center justify-center text-slate-700'>
                <MdAlternateEmail size={128} className='text-slate-900' />
                <div className='flex flex-col items-center text-center'>
                  <h1 className='text-2xl'>You have no messages with the_user yet.</h1>
                  <h3 className='text-lg'>You may start a conversation!</h3>
                </div>
              </div>
              <div className='overflow-auto grow'>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <div ref={scrollRef} />
              </div>
            </div>
          </div>
        </div>
        <InputBar/>
      </div>
    </div>
  )
}
