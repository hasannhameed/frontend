import React from "react"
import "./Navbar.css"
import logo from "../../assets/netflixlogo.png"
import { FaSearch,FaBell,FaUser,FaCaretDown } from "react-icons/fa";



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV shows</li>
                    <li>Movies</li>
                    <li>My List</li>
                    <li>Brows By language</li>
                </ul>
            </div>
            <div className="navbar-right">
                <FaSearch size={20} color="white" className="icon" />
                <p>Children</p>
                <FaBell size={20} color="white" className="icon" />
                <div className="navbar-profile">
                    <FaUser size={20} color="white" />
                    <FaCaretDown size={20} color="white" className="profile" />
                     <div className="dropdown">
                        <p>Sign out of Netflix</p>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;