import StudentRow from './StudentRow'

function StudentTable({ students, updateScore }) {
  const passed = students.filter(s => s.score >= 40).length
  const failed = students.length - passed

  return (
    <section>

      {/* ── Stat Cards ── */}
      <div className="stats">
        <div className="stat all">
          <div className="stat-n">{students.length}</div>
          <div className="stat-l">Students</div>
        </div>
        <div className="stat pass-stat">
          <div className="stat-n">{passed}</div>
          <div className="stat-l">Passed</div>
        </div>
        <div className="stat fail-stat">
          <div className="stat-n">{failed}</div>
          <div className="stat-l">Failed</div>
        </div>
      </div>

      {/* ── Table Card ── */}
      <div className="table-card">

        {/* Header Row */}
        <div className="t-head">
          <span>#</span>
          <span>Student Name</span>
          <span>Score</span>
          <span>Status</span>
          <span style={{ textAlign: 'right' }}>Update</span>
        </div>

        {/* Student Rows */}
        {students.map((student, index) => (
          <StudentRow
            key={student.id}
            index={index + 1}
            student={student}
            updateScore={updateScore}
          />
        ))}
      </div>

    </section>
  )
}

export default StudentTable