import React from 'react';
import { IoMdClose } from "react-icons/io";
import Settings from './Settings';
import { FaPen } from 'react-icons/fa';

export default function UserSettingsModal() {
  return (
    <div className="absolute inset-0 bg-gray-800 bg-opacity-55">
      <div className="flex flex-col absolute w-5/11 mx-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-slate-900 shadow-sm rounded-sm">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className='flex items-center gap-2'>
            <h1 className='text-lg'>User Settings</h1>
            <button>
              <FaPen size={14} />
            </button>
          </div>
          <button>
            <IoMdClose />
          </button>
        </div>
        <Settings />
        <div className='flex items-center justify-end pt-[5rem]'>
          <button className='bg-green-600 py-1 px-4 rounded-md text-sm'>Save</button>
        </div>
      </div>
    </div>
  );
}
