import React, { useEffect, useState } from 'react'
import NotesContainer from './components/NotesContainer'
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('/notes').then(
      res => res.json()
    ).then(
      newNotes => {
        setNotes(newNotes)
      }
    )
  }, [])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];

    //send the request back to server
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote)
    };
    fetch('/notes', requestOptions)
      .then(() => {
        setNotes(newNotes)
    })
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className='container'>
      <h1 style={{color: 'white'}}>Notes</h1>
      <NotesContainer notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App
