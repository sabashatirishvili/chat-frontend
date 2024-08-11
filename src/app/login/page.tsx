import React from 'react'
import style from "./styles.module.css"

function Login() {
  return (
    <div className='w-full h-full'>
      <div className='h-full flex justify-center items-center'>
        <div className='flex flex-col p-8 rounded-lg justify-center gap-6 items-center bg-slate-600'>
          <h1>SIGN IN</h1>
          <div className='flex flex-col items-center justify-between gap-4 *:text-black *:p-1 *:rounded-md'>
            <input type="text" placeholder='Email' className={`${style.input}`} />
            <input type="password" placeholder='Password' />
          </div>
          <button className='bg-gray-50 text-slate-700 py-1 px-3 rounded-sm'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login