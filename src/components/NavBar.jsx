import "./Navbar.css";

function Navbar({ showHome = false }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="navbar-line-left"></div> {/* LEFT LINE */}
      </div>

      <div className="navbar-right">
        <div className="navbar-line-right"></div> {/* RIGHT LINE */}
        {showHome && (
          <a href="/" className="nav-link">
            HOME
          </a>
        )}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon"
        >
          <img src="/images/github.png" alt="GitHub" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon"
        >
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:your.email@example.com" className="nav-icon">
          <img src="/images/email.png" alt="Email" />
        </a>
        <span className="copyright">© / 2025</span>
      </div>
    </nav>
  );
}

export default Navbar;
