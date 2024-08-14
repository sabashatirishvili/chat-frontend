import React from 'react'
import Detail from './Detail'

export default function Message() {
  return (
    <div className='border-y p-4 border-slate-900'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3 justify-between'>
          <div className='flex items-center justify-center text-center w-4 h-4 p-5 bg-green-600 rounded-full '>U</div>
          <div>
            <span>the_user</span>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <span className='text-xs text-slate-500'>15/08/2024</span>
          <Detail />
        </div>
      </div>
      <div className='px-12 text-gray-100'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto facilis tempora quam? Doloribus corrupti, sunt iusto quidem doloremque blanditiis! Illo tempore sequi accusamus itaque! Praesentium quas reiciendis totam nisi.</p>
      </div>
    </div >
  )
}
