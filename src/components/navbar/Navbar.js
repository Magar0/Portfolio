import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="App-nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/education" className="nav-link">
          Education
        </NavLink>
        <NavLink to="/experience" className="nav-link">
          Experience
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact Me
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
