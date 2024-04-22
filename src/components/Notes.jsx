import React from 'react'
import { MdDeleteForever } from "react-icons/md";


const Notes = () => {
  return (
    <div className='note shadow-lg'>
      <span className=''>Hello this is out first note! Hurry!</span>
      <div className='note-footer'>
        <small className=''>22-04-2024</small>
        <MdDeleteForever className='delete-icon ' size='1.3em' />
      </div>

    </div>
  )
}

export default Notes;