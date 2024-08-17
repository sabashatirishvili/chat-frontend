"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

export default function AddServer() {
  return (
    <motion.div
      className='p-4 rounded-full cursor-pointer bg-slate-800 text-green-600'
      whileHover={{
        backgroundColor: "#16a34a",
        color: "#1e293b",
      }}
      whileTap={{scale: 0.95}}
    >
      <FaPlus className='w-full h-full' />
    </motion.div>
  );
}