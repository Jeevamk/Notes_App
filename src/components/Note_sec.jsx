import React, { useState } from 'react'
import Note_list from './Note_list'
import { nanoid } from 'nanoid'

const Note_sec = () => {
  const [notes,setNotes]= useState([
    {
    id:nanoid(),
    text:"first",
    date:"23/04/2024"
  },
  {
    id:nanoid(),
    text:"second",
    date:"23/04/2024"
  },{
    id:nanoid(),
    text:"third",
    date:"23/04/2024"
  }
])

  return (
    <div className='container'>
        <Note_list  notes={notes}/>
        
    </div>
  )
}

export default Note_sec