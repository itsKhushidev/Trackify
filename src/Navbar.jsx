import React from "react";
import "./App.css";

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
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>

    </nav>
    </header>
  );
};

export default Navbar;