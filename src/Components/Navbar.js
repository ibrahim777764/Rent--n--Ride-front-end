import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
// import './Navbar.css'
import '../Helpers/ComponentsHelper'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="menu-header">
          RENT & RIDE
        </Link>
        <nav>
          <ul className='nav-links'>
            <li>
              <NavLink to="/models" >MODELS</NavLink>
            </li>
            <li>
              <NavLink to="/reserve">RESERVE</NavLink>
            </li>
            <li>
              <NavLink to="/my_reservations">MY RESERVATIONS</NavLink>
            </li>
            <li>
              <NavLink to="/add_car">ADD CAR</NavLink>
            </li>
            <li>
              <NavLink to="/delete_car">DELETE CAR</NavLink>
            </li>
          </ul>
        </nav>
        <div className="navbar-footer">
          <ul className='media-links'>
            <li>
              <Link to="/">
                <FaIcons.FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaIcons.FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaIcons.FaGooglePlusG />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaIcons.FaVimeoV />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaIcons.FaPinterestP />
              </Link>
            </li>
          </ul>
          <p>Copyright 2022</p>
        </div>
      </div>
    </>
  )
}

export default Navbar