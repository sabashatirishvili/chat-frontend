"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import Server from './Server'
import AddServer from './AddServer'
import { IoChatboxSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ServerList() {
  const pathname = usePathname()

  if (pathname === '/login' || pathname === '/register') {
    return null;
  }

  return (
    <div className='bg-slate-900 shadow-md flex flex-col px-2 justify-between items-center py-4'>
      <div className='pb-4 border-b border-slate-700'>
        <motion.div className='bg-slate-800 p-4 rounded-full flex justify-center items-center text-green-600 hover:cursor-pointer'
          whileHover={{
            color: "#1e293b",
            backgroundColor: "#16a34a"
          }}
          whileTap={{ scale: 0.95 }}>
          <IoChatboxSharp />
        </motion.div>
      </div>
      <div className='flex flex-col justify-start gap-3 pb-2 pt-4 border-b-2 grow border-slate-600 mb-4'>
        <Server />
        <Server />
        <Server />
        <Server />
      </div>
      <AddServer />
    </div>
  )
}
