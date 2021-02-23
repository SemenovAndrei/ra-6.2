import { useEffect, useState } from 'react'
import './App.css'
import Notes from './components/Notes/Notes'

function App() {
  const [notes, setNotes] = useState([])

  const loadNotes = () => {
    fetch(process.env.REACT_APP_NOTES_URL, { method: 'GET' })
      .then((res) => res.json())
      .then((notes) => setNotes(notes))
  }

  useEffect(() => loadNotes(), [])

  console.log(notes)
  return (
    <div className="App">
      <Notes onLoad={loadNotes}>{notes}</Notes>
    </div>
  )
}

export default App
