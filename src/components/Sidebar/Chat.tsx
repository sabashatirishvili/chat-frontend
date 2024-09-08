"use client";
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { motion } from "framer-motion"
import { IoCloseSharp } from 'react-icons/io5'

interface PropTypes {
  id: string,
  username: string,
  profile_picture: string
}

export default function Chat({ id, username, profile_picture }: PropTypes) {
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
      whileHover={{ backgroundColor: "#1e293b" }}>
      <div className='flex items-center  py-1 gap-3'>
        <Image src={profile_picture} alt="pfp" width={32} height={32} className='flex justify-center items-center rounded-full text-center'/>
        <h3>{username}</h3>
      </div>
      {hover && (<button className='text-gray-500 hover:text-gray-200'>
        <IoCloseSharp />
      </button>)}
    </motion.div>
  )
}
