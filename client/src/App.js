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
  return (
    <div className='container'>
      <NotesContainer notes={ notes} />
    </div>
  )
}

export default App
