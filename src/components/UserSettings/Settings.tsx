"use client";
import React, { useRef, useState } from 'react'
import Setting from './Setting'
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Switch from '../Switch';

export default function Settings() {
  const [hover, setHover] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleHover = () => {
    setHover(prev => !prev)
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className='py-10'>
      <div className='flex border-slate-800 relative border-b pb-4'
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className='bg-green-600 flex items-center w-20 h-20 rounded-full justify-center'>
          {hover &&
            (<div
              onClick={handleButtonClick}
              className='relative z-10 w-full h-full flex justify-center items-center hover:cursor-pointer rounded-full bg-opacity-70 bg-gray-900'
            >
              <MdOutlineFileUpload className='text-gray-400' size={32} />
              <input type="file" className='hidden' ref={fileInputRef} />
            </div>)
          }
          <h1 className='absolute'>U</h1>
        </div>
        <section className='flex flex-wrap *:w-1/2 grow px-3'>
          <Setting label="Username" />
          <Setting label="Email" />
          <Setting label="User ID" />
        </section>
      </div>
      <section className='flex items-center gap-4 px-2 py-4 border-b border-slate-800'>
        <h1 className='text-md'>Dark mode</h1>
        <Switch />
      </section>
      <section className='flex  border-b border-slate-800'>
        <button className='flex items-center grow hover:bg-slate-800 gap-3 py-4 px-2'>
          <FaRegTrashCan className='text-red-600' />
          <h3>Delete Account</h3>
        </button>
      </section>
    </div>
  )
}
