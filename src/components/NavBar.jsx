import "./Navbar.css";

function Navbar({ showHome = false }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </a>
        <div className="navbar-line"></div>
      </div>

      <div className="navbar-right">
        <div className="navbar-line"></div>
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
