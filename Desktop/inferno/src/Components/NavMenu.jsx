import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Search } from 'lucide-react';
import '../Styles/NavMenu.css';

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    {
      title: 'Brands',
      dropdown: ['Paramount+', 'CBS', 'MTV', 'Nickelodeon', 'Comedy Central', 'BET', 'SHOWTIME']
    },
    {
      title: 'News',
      dropdown: ['Company News', 'Press Releases', 'Media Kit', 'Investor Relations']
    },
    {
      title: 'Careers',
      dropdown: ['Job Openings', 'Culture', 'Benefits', 'Diversity & Inclusion']
    },
    {
      title: 'About',
      dropdown: ['Leadership', 'History', 'Awards', 'Contact']
    }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="nav">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="logo">
              <img src="/Logo.png" alt="" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <ul className="nav-menu">
  {/* HOME LINK - no dropdown */}
  <li className="nav-item">
    <Link to="/" className="nav-link">Home</Link>
  </li>

  {/* LINKS WITH DROPDOWNS */}
  {navigationItems.map((item, index) => (
    <li
      key={index}
      className="nav-item"
      onMouseEnter={() => setActiveDropdown(index)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <a
        href="#"
        className="nav-link"
        onClick={(e) => {
          e.preventDefault();
          handleDropdownToggle(index);
        }}
      >
        {item.title}
        <ChevronDown className="chevron" />
      </a>
      {activeDropdown === index && (
        <div className="dropdown-menu">
          {item.dropdown.map((subItem, subIndex) => (
            <a key={subIndex} href="#" className="dropdown-item">
              {subItem}
            </a>
          ))}
        </div>
      )}
    </li>
  ))}
</ul>


            <div className="nav-actions">
              <Search className="search-icon" />
              <button className="cta-button">Join Us</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navigationItems.map((item, index) => (
              <div key={index} className="mobile-menu-item">
                <button
                  className="mobile-menu-link"
                  onClick={() => handleDropdownToggle(index)}
                >
                  {item.title}
                  <ChevronDown className="chevron" />
                </button>
                {activeDropdown === index && (
                  <div className="mobile-dropdown">
                    {item.dropdown.map((subItem, subIndex) => (
                      <a key={subIndex} href="#" className="mobile-dropdown-item">
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mobile-actions">
              <Search className="search-icon" />
              <button className="cta-button">Join Us</button>
            </div>
          </div>
        )}
      </nav>
    </nav>
  );
}

export default NavMenu;
