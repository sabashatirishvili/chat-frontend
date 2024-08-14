import React from 'react'
import Server from './Server'
import AddServer from './AddServer'
import { IoIosChatboxes } from "react-icons/io";
import { IoChatboxSharp } from "react-icons/io5";

export default function ServerList() {
  return (
    <div className='bg-slate-900 shadow-md flex flex-col px-2 justify-between items-center py-4'>
      <div className='pb-4 border-b border-slate-700'>
        <div className='bg-slate-800 p-4 rounded-full flex justify-center items-center *:grow text-green-600'>
          <IoChatboxSharp />
        </div>
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
