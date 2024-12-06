// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Bar.css';

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
      <img className="navbar__logo" src="path_to_logo/netflix-logo.png" alt="Netflix" />
    </div>
  );
}

export default Navbar;
