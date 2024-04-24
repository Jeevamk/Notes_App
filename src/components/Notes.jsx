import React, { useEffect, useState } from 'react'
import CreateNote from './CreateNote'
import './notes.css'
import {v4 as uuid} from 'uuid'
import Note from './Note'

const Notes = () => {
<<<<<<< HEAD
    const [inputText, setInputText] = useState("")
    const [notes, setNotes] = useState([])
    const [editToggle, setEditToggle] = useState(null)

    const editHandler = (id,text) => {
        setEditToggle(id)
        setInputText(text)
    }
    const saveHandler = () => {
        if(editToggle) {
            setNotes(notes.map((note) => (
                note.id === editToggle ?
                {...note, text: inputText}
                : note
            )))
        } else {
            setNotes((prevNotes) => [
                ...prevNotes, {
                    id: uuid(),
                    text: inputText
                }
            ])
        }
        
        setInputText("")
        setEditToggle(null)
    }

    const deleteHandler = (id) => {
        const newNotes = notes.filter(n => n.id !== id)
        setNotes(newNotes)
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if (data) {
          setNotes(data);
        }
      }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className='notes'>
        {
            notes.map((note) => (
                editToggle === note.id ?
                // eslint-disable-next-line react/jsx-key
                <CreateNote 
                        inputText={inputText}
                        setInputText = {setInputText} 
                        saveHandler = {saveHandler}
                        />
                :
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    editHandler = {editHandler}
                    deleteHandler= {deleteHandler}
                >
                </Note>
            ))
        }
        {
            editToggle === null ? 
            <CreateNote 
            inputText={inputText}
            setInputText = {setInputText} 
            saveHandler = {saveHandler}
        /> : <></>
        }
        
=======
  return (
    <div className='note shadow-lg'>
      <span className=''></span>
      <div className='note-footer'>
        <small className=''>22-04-2024</small>
        <MdDeleteForever className='delete-icon ' size='1.3em' />
      </div>
>>>>>>> origin/main
    </div>
  )
}

<<<<<<< HEAD
export default Notes
=======
export default Notes;
>>>>>>> origin/main
