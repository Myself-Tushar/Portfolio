import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close navbar when clicking outside or clicking a link on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar') && isOpen) {
        setIsOpen(false);
      }
    };
    
    const handleLinkClick = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.querySelectorAll('.nav-link').forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [isOpen]);

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand" href="#home">Tech TSR</a> {/* Change href here */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;