import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])
  function handle_submit(formData) {
    const title = formData.get("title");
    const content = formData.get("content");
    setNotes((prev) => [...prev, { title, content }]);
    console.log(notes);
  }
console.log(useState(0))
  return (
    <>
    <form className='AddNoteForm' action={handle_submit}>
      <label htmlFor="title">Title:</label>
      <input name="title" />
      <label htmlFor="content">Content:</label>
      <textarea name="content" />
      <button type="submit">Submit</button>
    </form>
    <div className='NotesList'>
      {notes.map((note, index) => (
        <div className='Note' key={index}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
