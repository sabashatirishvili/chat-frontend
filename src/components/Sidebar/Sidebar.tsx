"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import User from './User'
import AuthenticatedUser from './AuthenticatedUser';

export default function Sidebar() {
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/register' || pathname == '/' || pathname == '/404') {
    return null;
  }

  return (
    <div className='flex flex-col bg-slate-900 border-slate-800 shadow-xl min-w-[16rem] px-2 border-l'>
      <div className='flex items-center justify-center text-center py-3 border-b border-b-slate-800'>
        <h1 className='text-gray-300 text-md'>Direct Messages</h1>
      </div>
      <div className='flex flex-col justify-between grow'>
        <div className='pt-2'>
          <User />
          <User />
          <User />
        </div>
        <AuthenticatedUser />
      </div>
    </div>
  )
}
