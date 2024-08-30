"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Switch() {
  const [switched, setSwitched] = useState(false);

  const handleClick = () => {
    setSwitched(prev => !prev);
  };

  return (
    <motion.div
      onClick={handleClick}
      animate={{ backgroundColor: switched ? '#2563eb' : '#4b5563' }}
      transition={{ duration: 0.3 }}
      className={`flex items-center border border-slate-800 cursor-pointer rounded-full p-[3px] w-10 ${switched ? 'justify-end' : 'justify-start'}`}
    >
      <motion.div
        className='rounded-full h-3 w-3 bg-white'
        animate={{ x: switched ? 'calc(100% - 0.75rem)' : '0' }} 
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
