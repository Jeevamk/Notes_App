import React from 'react'
import { FiAlignLeft } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='bg-black flex p-2'>
        <FiAlignLeft className='text-white icon-lg'/>
        <h1 className='text-white text-3xl font-bold ps-2'>Notes</h1>
    </div>
  )
}

export default Navbar