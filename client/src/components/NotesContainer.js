import Note from './Note'
import AddNote from './AddNote'
const NotesContainer = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className="notes-container">
      {notes.map((note) => <Note
        id={note.id}
        text={note.text}
        date={note.date}
        handleDeleteNote={handleDeleteNote}
      />)}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesContainer