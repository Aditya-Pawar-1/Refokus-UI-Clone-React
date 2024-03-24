import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title}) => {
  return (
    <div className='min-w-30 max-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-around '>
        <span className='text-sm font-medium mr-2'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button