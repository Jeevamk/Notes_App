import React from 'react'
import { MdDeleteSweep } from "react-icons/md";


const Notes = () => {
  return (
    <div className='note'>
      <span>Hello this is out first note! Hurry!</span>
      <div className='note-footer'>
        <small>22-04-2024</small>
        <MdDeleteSweep className='delete-icon' size='1.5em'></MdDeleteSweep>
      </div>

    </div>
  )
}

export default Notes;