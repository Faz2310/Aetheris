import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/button";

const Navbar = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="logo-wrapper">
        <img src="/logo.png" alt="aetheris" className="logo-image" />
        <h1 className="logo-text">AETHERIS®</h1>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/home" onClick={() => setMenuOpen(false)}>
          <Button className="ghost">Home</Button>
        </Link>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <Button className="ghost">About</Button>
        </Link>

        <Link to="/services-page" onClick={() => setMenuOpen(false)}>
          <Button className="ghost">Services</Button>
        </Link>

        <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
          <Button className="ghost">Contact</Button>
        </Link>

        {user ? (
          <>
            <span className="user-email">{user.email}</span>
            <Button
              className="ghost"
              onClick={() => {
                setMenuOpen(false);
                onLogout();
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <Button className="ghost">Login</Button>
            </Link>

            <Link to="/register" onClick={() => setMenuOpen(false)}>
              <Button className="ghost">Register</Button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
