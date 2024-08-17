import React from 'react';
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

export default function AddServer() {
  return (
    
    <motion.div className='bg-slate-800 p-4 rounded-full cursor-pointer'>
      <motion.div>
        <FaPlus className='text-green-600' />
      </motion.div>
    </motion.div>
  )
}
