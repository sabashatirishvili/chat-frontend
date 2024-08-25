"use client";
import React from 'react'
import { motion } from "framer-motion"
import { IoMdChatboxes } from "react-icons/io";

export default function Chat() {
  return (
    <motion.div className='flex items-center gap-2 text-gray-300 rounded-md px-1 hover:cursor-pointer' whileTap={{scale: 0.95}} whileHover={{ backgroundColor: "#1e293b" }}>
      <IoMdChatboxes />
      <span>chat_name</span>
    </motion.div>
  )
}
