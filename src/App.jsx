import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'

const initialStudents = [
  { id: 1, name: 'Aarav Sharma',  score: 78 },
  { id: 2, name: 'Priya Mehta',   score: 35 },
  { id: 3, name: 'Rohan Gupta',   score: 55 },
  { id: 4, name: 'Sneha Iyer',    score: 22 },
  { id: 5, name: 'Dev Patel',     score: 91 },
]

function App() {
  const [students, setStudents] = useState(initialStudents)
  const [darkMode, setDarkMode] = useState(true)

  const updateScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: Number(newScore) } : s)
    )
  }

  const addStudent = (name, score) => {
    setStudents(prev => [...prev, { id: Date.now(), name, score: Number(score) }])
  }

  return (
    <div className={`app ${darkMode ? '' : 'light'}`}>
      <div className="wrap">
        <Header darkMode={darkMode} toggleTheme={() => setDarkMode(prev => !prev)} />
        <StudentTable students={students} updateScore={updateScore} />
        <AddStudentForm addStudent={addStudent} />
      </div>
    </div>
  )
}

export default App