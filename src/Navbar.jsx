import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
    <nav className="navbar">

      {/* Left - Logo */}
      <div className="nav-left">
        <div className="logo">Trackify</div>
      </div>

      {/* Center - Menu */}
      <ul className="nav-center">
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Right - Buttons */}
      <div className="nav-right">
        <Link to="/login">        
        <button className="login" >Login</button>
        </Link>
        <Link to="/register">
          <button className="signup">Sign Up</button>
        </Link>
      </div>

    </nav>
    </header>
  );
};

export default Navbar;