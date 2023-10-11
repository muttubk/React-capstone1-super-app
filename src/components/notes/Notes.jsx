import React, { useEffect, useState } from 'react'
import './Notes.css'

function Notes() {

    // For storing notes data locally
    const [notes, setNotes] = useState('')

    // For retrieving already stored notes in local storage
    useEffect(()=>{
        const storedNotes = localStorage.getItem('notes')
        if(storedNotes){
            setNotes(storedNotes)
        }
    },[])

    // For handling input from the user in notes field
    const getNotes=(e)=>{
        const {value} = e.target
        setNotes(value)
        localStorage.setItem('notes', value)
    }

    return (
        <div className='Notes'>
            <h3 className='title'>All notes</h3>
            <textarea className='notes-content' value={notes} onChange={getNotes} >
            </textarea>
        </div>
    )
}

export default Notes