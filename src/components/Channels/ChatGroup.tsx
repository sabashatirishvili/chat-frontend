"use client";
import React from 'react'
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import Chat from './Chat'
import { FaChevronDown } from "react-icons/fa";

export default function ChatGroup() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='p-2'>
      <motion.div className='flex items-center justify-between text-gray-200 hover:cursor-pointer rounded-md px-2' whileHover={{backgroundColor:"#1e293b"}}>
        <div className='flex items-center gap-2'>
          <span>group_name</span>
        </div>
        <motion.button animate={{ rotate: collapsed ? -90 : 0 }} onClick={() => setCollapsed(prev => !prev)}>
          <FaChevronDown size={12} />
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {collapsed &&
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className='pl-4' >
            {<Chat />}
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
