import Note from './Note'
import AddNote from './AddNote'
const NotesContainer = ({notes}) => {
  return (
    <div className="notes-container">
      {notes.map((note) => <Note id={note.id} text={note.text} date={note.date} />)}
      <AddNote/>
    </div>
  )
}

export default NotesContainer