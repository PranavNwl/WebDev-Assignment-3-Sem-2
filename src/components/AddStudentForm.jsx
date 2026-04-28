import { useState, useRef } from 'react'

function AddStudentForm({ addStudent }) {
  const [name, setName]   = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState('')
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return setError('Name cannot be empty.')
    const s = Number(score)
    if (isNaN(s) || s < 0 || s > 100) return setError('Score must be between 0–100.')

    setError('')
    addStudent(name.trim(), s)
    setName('')
    setScore('')

    // Flash border animation
    if (formRef.current) {
      formRef.current.classList.add('flash-border')
      setTimeout(() => formRef.current?.classList.remove('flash-border'), 500)
    }
  }

  return (
    <div className="form-card" ref={formRef}>
      <div className="form-title">Add New Student</div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">

          <div className="fg">
            <label className="fl">Name</label>
            <input
              className="fi"
              type="text"
              placeholder="e.g. Arjun Verma"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="fg" style={{ maxWidth: '120px' }}>
            <label className="fl">Score</label>
            <input
              className="fi"
              type="number"
              placeholder="0–100"
              min="0"
              max="100"
              value={score}
              onChange={e => setScore(e.target.value)}
            />
          </div>

          <button className="add-btn" type="submit">+ Add</button>

        </div>

        <p className="form-err">{error}</p>
      </form>
    </div>
  )
}

export default AddStudentForm