import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-section">
        <h1>NFT'S</h1>
      </div>
      <div className="right-section">
        <NavLink to="/">Home</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="registration">Registration</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
