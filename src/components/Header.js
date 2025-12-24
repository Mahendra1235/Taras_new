import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo-1.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="Company Logo" className="logo" />
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Menu list */}
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/aboutus" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/solutions" onClick={() => setIsMenuOpen(false)}>Solutions</Link></li>
        <li><Link to="/team" onClick={() => setIsMenuOpen(false)}>Team</Link></li>
        <li><Link to="/contactus" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
