import React, { useState } from 'react'
import NotesContainer from './components/NotesContainer'
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "testing testing 1",
      date: 'mm/dd/yyyy'
    },
    {
      id: nanoid(),
      text: "testing testing 2",
      date: 'mm/dd/yyyy'
    },
    {
      id: nanoid(),
      text: "testing testing 3",
      date: 'mm/dd/yyyy'
    }
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
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
