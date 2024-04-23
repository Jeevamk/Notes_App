import Notes from "./Notes"

const Note_list = ({ notes }) =>{
    return(
        <div className="notes-list">
            {notes.map((note)=>( <Notes id={note.id} text={note.text} date={note.date} />))}
        </div>
    )
}

export default Note_list;