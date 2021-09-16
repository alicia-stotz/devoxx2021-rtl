import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Navbar = () => {
  return <nav className="navbar navbar-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Devoxx 2021 - React Testing Library</Link>
      <a
        href="https://github.com/alicia-stotz/devoxx2021-rtl"
        rel="noreferrer"
        target="_blank">
        <GitHubIcon />
      </a>
    </div>
  </nav>
};