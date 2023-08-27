// src/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Create a new CSS file for additional styles

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="error-text">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
      </div>
      <div className="home-link-container">
        <Link to="/" className="home-link">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
