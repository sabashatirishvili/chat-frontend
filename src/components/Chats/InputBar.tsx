import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";

interface PropTypes {
  onEnter?: () => void
}

function InputBar({ onEnter }: PropTypes) {
  const [value, setValue] = useState<string>("");
  return (
    <div className='mx-2' onKeyDown={e => {
      if (e.key === "Enter") {
        console.log("enter!")
      }
    }}>
      <div className='w-full bg-slate-900 mb-2 p-2 flex items-center gap-3 rounded-md'>
        <button>
          <FaCirclePlus size={18} className='text-green-600' />
        </button>
        <input type="text" className='grow' placeholder='Send a message' value={value} onChange={e => setValue(e.target.value)} />
      </div>
    </div>

  )
}

export default InputBar