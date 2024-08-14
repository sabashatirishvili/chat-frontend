import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Server() {
  return (
    <Link href={'/'}>
      <div className='relative rounded-full h-12 w-12 hover:shadow-lg overflow-hidden'>
        <Image src="vercel.svg" alt="image" layout={'fill'} objectFit="cover" className='bg-slate-500' />
      </div>
    </Link>
  )
}
