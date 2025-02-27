import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/amsan-logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false); // Close menu if resizing back to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img className="nav-logo" src={logo} alt="Amsan Logo" />

      {/* Hamburger Menu for Mobile */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <AnchorLink 
              className={`anchor-link ${menu === item ? 'active-menu' : ''}`} 
              href={`#${item}`}
              onClick={() => { setMenu(item); isMobile && toggleMenu(); }}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
          </li>
        ))}
        {/* Move Connect Button inside the menu for mobile */}
        {isMobile && (
          <li>
            <div className="nav-connect">
              <AnchorLink className='anchor-link' href='#contact' onClick={toggleMenu}>Connect With Me</AnchorLink>
            </div>
          </li>
        )}
      </ul>

      {/* Connect Button (Only Visible on Desktop) */}
      {!isMobile && (
        <div className="nav-connect">
          <AnchorLink className='anchor-link' href='#contact'>Connect With Me</AnchorLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
