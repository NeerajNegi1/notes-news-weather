import React, { useContext, useState, useEffect } from 'react'
import NoteCard from "../NoteCard/NoteCard"
import { NotesContext } from '../ContextApi/ContextApi'
import '../CreateNotes/CreateNotes.css'

function CreateNotes() {

    const [Notes, setNotes] = useContext(NotesContext);
    const [Note, setNote] = useState({
        title: "",
        description: ""
    });

    useEffect(() => {
        if (Notes.length > 0) {
            localStorage.setItem("Notes", JSON.stringify(Notes));
        }
    }, [Notes.length])

    useEffect(() => {
        if (localStorage.getItem("Notes")) {
            const UserData = JSON.parse(localStorage.getItem("Notes"));
            setNotes(UserData);
        }
    }, [])

    function onHandleChange(event) {
        const inputName = event.target.name;
        const newValue = event.target.value;
        setNote(prevalue => {
            if (inputName === 'title') {
                return {
                    title: newValue,
                    description: prevalue.description
                }
            } else if (inputName === 'description') {
                return {
                    title: prevalue.title,
                    description: newValue
                }
            }
        })
    }

    function addNote() {
        if (Note.title === '' || Note.description === '') {
            alert("Please Fill Proper Title And Description.")
        } else {
            setNotes(prevalue => {
                return [...prevalue, Note]
            });
            setNote({
                title: "",
                description: ""
            })
        }
    }

    return (
        <div>
            <div className="create_note_section">
                <h1>Create Notes</h1>
                <div className="text_area_style">
                    <input autoComplete="off" value={Note.title} name='title' onChange={onHandleChange} type="text" required maxLength="100" placeholder="Enter Your Title" />
                    <textarea autoComplete="off" value={Note.description} name='description' onChange={onHandleChange} type="text" required maxLength="500" placeholder="Take Your Notes" />
                    <button onClick={addNote}>ADD</button>
                </div>
            </div>
            <div className="notes_render_container">
                {Notes.map((eachItem, index) => {
                    return <NoteCard
                        key={index}
                        id={index}
                        title={eachItem.title}
                        description={eachItem.description}
                    />
                })}
            </div>
        </div>
    )
}

export default CreateNotes
