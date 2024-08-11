import React from 'react'
import Server from './Server'
import AddServer from './AddServer'

export default function ServerList() {
  return (
    <div className='bg-slate-900 shadow-md flex flex-col px-2 justify-between items-center py-4'>
      <div className='flex flex-col justify-start gap-3 py-2 border-b-2 grow border-slate-600 mb-4'>
        <Server/>
        <Server/>
        <Server/>
        <Server/>
      </div>
      <AddServer/>
    </div>
  )
}
