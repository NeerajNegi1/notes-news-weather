import React, { useContext } from 'react'
import { NotesContext } from '../ContextApi/ContextApi'
import './NoteCard.css'



function Notes({ id, title, description }) {

    const [Notes, setNotes] = useContext(NotesContext);

    function removeNote() {
        if (Notes.length == 1) {
            localStorage.clear();
            setNotes(prevalue => {
                return prevalue.filter((item, index) => {
                    return index !== id;
                })
            })
        }
        if (Notes.length != 1) {
            setNotes(prevalue => {
                return prevalue.filter((item, index) => {
                    return index !== id;
                })
            })
        }

    }

    return (
        <div className="note_card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={removeNote}>Remove</button>
        </div>
    )
}

export default Notes
