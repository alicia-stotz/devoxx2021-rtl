import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return <nav className="navbar navbar-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Devoxx 2021 - React Testing Library</Link>
    </div>
  </nav>
};