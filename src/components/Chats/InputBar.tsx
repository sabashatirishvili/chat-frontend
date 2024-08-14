import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";

function InputBar() {
  return (
    <div>
      <div className='w-full bg-slate-900 mb-2 p-2 flex items-center gap-3 rounded-md'>
        <button>
          <FaCirclePlus size={18} className='text-green-600' />
        </button>
        <input type="text" className='grow' placeholder='Send a message' />
      </div></div>

  )
}

export default InputBar