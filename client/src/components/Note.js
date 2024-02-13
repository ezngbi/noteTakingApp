import { CiTrash } from "react-icons/ci";

const Note = ({ id, text, date, handleDeleteNote }) => {
  const colors = ['green', 'red', 'purple', 'pink', '']
  
  return <div className={`note ${colors[Math.floor(Math.random() * 4)]}`}>
    <span>{text}</span>
    <div className="note-footer">
      <small>{date}</small>
      <CiTrash className='delete-icon' size='1.3em' onClick={() => handleDeleteNote(id)}/>
    </div>
  </div>
}

export default Note;