import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo-new.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <NavLink to="/" onClick={closeMenu}>
          <img src={Logo} alt="Company Logo" className="logo" />
        </NavLink>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation */}
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={closeMenu}
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={closeMenu}
          >
            Solutions
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={closeMenu}
          >
            Team
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
