import Image from 'next/image'
import React from 'react'

export default function Social() {
  return (
    <section className='flex flex-col items-center mt-[20%] gap-4'>
    <div className='text-center'>
      <h2 className='text-6xl title text-[text-[#a0a0a0]'>Em breve</h2>
      <p className='text-[#a0a0a0]'>Página em desenvolvimento</p>
    </div>

      <Image 
        src={'/worker.webp'}
        width={100}
        height={100}
        alt='area em desenvolvimento'
      />
    </section>
  )
}