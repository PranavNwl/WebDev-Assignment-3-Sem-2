function Header({ darkMode, toggleTheme }) {
  return (
    <div className="topbar">

      {/* ── Logo / Title ── */}
      <div className="logo">
        <div className="logo-dot">S</div>
        <div>
          <div className="logo-text">Scoreboard</div>
          <div className="logo-sub">WEB DEV II — LAB 3</div>
        </div>
      </div>

      {/* ── Theme Toggle ── */}
      <div className="tog-wrap">
        <span className="tog-label">{darkMode ? 'DARK' : 'LIGHT'}</span>
        <button
          className={`tog-btn ${darkMode ? '' : 'on'}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <div className="tog-knob" />
        </button>
      </div>

    </div>
  )
}

export default Header