import React from "react";
import "./Navbar.css";
import logo from "../../assets/netflixlogo.png";
import { FaSearch, FaBell, FaUser, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar container-fluid d-flex justify-content-between align-items-center py-2 px-3">
      <div className="navbar-left d-flex align-items-center">
        <img src={logo} alt="Netflix Logo" className="me-3" />
        <ul className="d-none d-md-flex list-unstyled mb-0">
          <li className="mx-2">Home</li>
          <li className="mx-2">TV Shows</li>
          <li className="mx-2">Movies</li>
          <li className="mx-2">My List</li>
          <li className="mx-2">Browse By Language</li>
        </ul>
      </div>

      <div className="navbar-right d-flex align-items-center">
        <FaSearch size={20} className="icon mx-2" />
        <p className="d-none d-md-block mb-0">Children</p>
        <FaBell size={20} className="icon mx-2" />

        {/* Profile with Dropdown */}
        <div className="navbar-profile">
          <FaUser size={20} className="icon" />
          <FaCaretDown size={15} className="icon" />

          {/* Dropdown Menu */}
          <div className="dropdown">
            <ul>
              <li>
                <button className="dropdown-item">Sign out of Netflix</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
