import { useState } from 'react'

function StudentRow({ index, student, updateScore }) {
  const [inputVal, setInputVal] = useState(student.score)
  const isPassed = student.score >= 40

  const barColor = (s) => {
    if (s >= 70) return '#34d399'
    if (s >= 40) return '#fbbf24'
    return '#f87171'
  }

  const handleUpdate = () => {
    const val = Number(inputVal)
    if (!isNaN(val) && val >= 0 && val <= 100) {
      updateScore(student.id, val)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleUpdate()
  }

  return (
    <div className="s-row">

      {/* ── Main Row Content ── */}
      <div className="s-row-top">
        <span className="r-idx">{String(index).padStart(2, '0')}</span>
        <span className="r-name">{student.name}</span>
        <span className="r-score">{student.score}</span>
        <span>
          <span className={`badge ${isPassed ? 'pass' : 'fail'}`}>
            {isPassed ? 'PASS' : 'FAIL'}
          </span>
        </span>
        <div className="r-edit">
          <input
            className="sc-inp"
            type="number"
            min="0"
            max="100"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="upd-btn" onClick={handleUpdate}>↵</button>
        </div>
      </div>

      {/* ── Score Bar ── */}
      <div className="bar-wrap">
        <div className="bar-track">
          <div
            className="bar-fill"
            style={{
              width: `${student.score}%`,
              background: barColor(student.score)
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default StudentRow