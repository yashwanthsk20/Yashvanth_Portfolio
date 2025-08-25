
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 100);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideHeader(true); // scrolling down
      } else {
        setHideHeader(false); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [lastScrollY]);

  return (
    <header id="header" className={hideHeader ? 'header-hidden' : ''}>
      <nav className="navbar navbar-expand">
        <div className="container header">
          {/* Logo */}
<Link className="navbar-brand fw-bold text-white" to="/">
  <img
    src="/assets/img/logo/logoo789.png"
    alt="YSK Logo"
    className="logo-anim"
  />
</Link>



          {/* Desktop Nav */}
          <ul className="navbar-nav d-none d-md-flex ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Works</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Contact</NavLink>
            </li>
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className={`navbar-toggler d-block d-md-none ${scrolled ? 'position-fixed top-0 end-0 m-3 z-3' : ''}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Offcanvas Mobile Menu */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Navigation</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Works</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
