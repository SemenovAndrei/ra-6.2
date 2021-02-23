import { useEffect, useState } from 'react'
import './App.css'
import Notes from './components/Notes/Notes'

function App() {
  const [form, setForm] = useState({})

  const handleTextArea = (target) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const [notes, setNotes] = useState([])

  const loadNotes = () => {
    fetch(process.env.REACT_APP_NOTES_URL, { method: 'GET' })
      .then((res) => res.json())
      .then((notes) => setNotes(notes))
  }

  const addNotes = () => {
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      body: JSON.stringify({ content: form.note }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.status === 204 ? loadNotes() : null))

    setForm({})
  }

  const deleteNote = (id) => {
    fetch(process.env.REACT_APP_NOTES_URL + '/' + id, { method: 'DELETE' }).then((res) =>
      res.status === 204 ? loadNotes() : null
    )
  }

  useEffect(() => loadNotes(), [])

  return (
    <div className="App">
      <Notes
        onLoad={loadNotes}
        onChange={handleTextArea}
        onSubmit={addNotes}
        onDelete={deleteNote}
        {...form}
      >
        {notes}
      </Notes>
    </div>
  )
}

export default App
