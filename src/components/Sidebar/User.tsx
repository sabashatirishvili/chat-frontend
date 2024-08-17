"use client";
import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion"
import { IoCloseSharp } from 'react-icons/io5'

export default function User() {
  const [hover, setHover] = useState(false);

  const onMouseEnterHandler = () => {
    setHover(prev => !prev)
  }

  const onMouseLeaveHandler = () => {
    setHover(prev => !prev)
  }

  return (
    <motion.div onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className=' flex items-center justify-between px-2 text-sm rounded-sm hover:cursor-pointer'
      whileHover={{backgroundColor: "#1e293b"}}>
      <div className='flex items-center  py-1 gap-3'>
        <div className='flex justify-center items-center p-4 rounded-full bg-green-600 text-center'>
          <h1 className='absolute'>U</h1>
        </div>
        <h3>the_user</h3>
      </div>
      {hover && (<button className='text-gray-500 hover:text-gray-200'>
        <IoCloseSharp />
      </button>)}
    </motion.div>
  )
}
