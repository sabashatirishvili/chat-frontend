"use client";
import React, { useState } from 'react'
import useAuthUser from '../../../hooks/useAuthUser';
import { FaCog } from "react-icons/fa";
import UserSettingsModal from '../UserSettings/UserSettingsModal';
import Image from 'next/image';


export default function AuthenticatedUser() {
  const [settings, setSettings] = useState(false);
  const { data, error } = useAuthUser();

  const handleClick = () => {
    setSettings(prev => !prev)
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className='flex items-center justify-between py-2 text-gray-300 border-t border-slate-800'>
      <div className='flex items-center gap-2'>
        <Image className="rounded-full" src={data?.profile_picture || '/vercel.svg'} alt='profile_picture' width={40} height={40}></Image>
        <h1 className='text-md'>{data?.username}</h1>
      </div>
      <button onClick={handleClick}>
        <FaCog className='text-gray-300' />
      </button>
      {settings && <UserSettingsModal onClick={handleClick} />}
    </div>
  )
}
