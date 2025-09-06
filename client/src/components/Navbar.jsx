import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="nav-logo">
          MyApp
        </a>

        {/* Hamburger Button */}
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="/add" onClick={() => setIsOpen(false)}>Add</a>
          <a href="/listings" onClick={() => setIsOpen(false)}>My Listings</a>
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>

        </div>
      </div>
    </nav>
  );
}
