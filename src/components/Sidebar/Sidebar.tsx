"use client";
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Chat from './Chat'
import AuthenticatedUser from './AuthenticatedUser';
import axios from 'axios';
import getCookie from '../../../utils/getCookie';

export default function Sidebar() {
  const pathname = usePathname();
  const [chats, setChats] = useState(null)

  useEffect(() => {
    const url = "http://localhost:8000/api/chats/"
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${getCookie('access-token')}`
      }
    }).then(res => setChats(res.data)).catch(error => console.log(error))
  }, [])

  console.log(chats)

  if (pathname === '/login' || pathname === '/register' || pathname == '/' || pathname == '/404' || pathname.startsWith('/channels')) {
    return null;
  }

  return (
    <div className='flex flex-col bg-slate-900 border-slate-800 shadow-xl min-w-[16rem] px-2 border-l'>
      <div className='flex items-center justify-center text-center py-3 border-b border-b-slate-800'>
        <h1 className='text-gray-300 text-md'>Direct Messages</h1>
      </div>
      <div className='flex flex-col justify-between grow'>
        <div className='pt-2'>
          <Chat />
          <Chat />
          <Chat />
        </div>
        <AuthenticatedUser />
      </div>
    </div>
  )
}
