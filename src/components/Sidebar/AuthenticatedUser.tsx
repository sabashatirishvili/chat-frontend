import React, { useState } from 'react'
import { FaCog } from "react-icons/fa";
import UserSettingsModal from '../UserSettings/UserSettingsModal';

export default function AuthenticatedUser() {
  const [settings, setSettings] = useState(false);

  const handleClick = () => {
    setSettings(prev => !prev)
  }
  return (
    <div className='flex items-center justify-between py-2 text-gray-300 border-t border-slate-800'>
      <div className='flex items-center gap-2'>
        <div className='flex justify-center items-center p-5 rounded-full bg-green-600 text-center'>
          <h1 className='absolute'>U</h1>
        </div>
        <h1 className='text-md'>the_user</h1>
      </div>
      <button onClick={handleClick}>
        <FaCog className='text-gray-300' />
      </button>
      {settings && <UserSettingsModal />}
    </div>
  )
}
