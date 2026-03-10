import Image from 'next/image'
import React from 'react'

export default function ButtonAdd({ children, onClick, className }) {
  return (
    <button className={`bg-black text-white flex items-center px-5 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ${className}`} onClick={onClick}>
      <Image
        src={'/bookmark-white.webp'}
        width={45}
        height={45}
        alt=''
        className='-mt-3'
      />
      {children}
    </button>
  )
}