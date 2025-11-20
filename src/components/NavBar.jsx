import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar({ showLinks = true, showHome = false }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {showHome ? (
          <Link to="/" className="home-link">
            HOME
          </Link>
        ) : (
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" />
          </Link>
        )}
      </div>

      {showLinks && !showHome && (
        <div className="navbar-links">
          <a
            href="https://github.com/sutha06"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GITHUB
          </a>
          <a
            href="https://labex.io/users/suthakaran-siva-01096458?tab=skilltrees"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            LABEX
          </a>
          <a
            href="https://www.linkedin.com/in/suthasiv/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            LINKEDIN
          </a>
        </div>
      )}

      <div className="navbar-copyright">
        <span>© / 2025</span>
      </div>
    </nav>
  );
}

export default Navbar;
