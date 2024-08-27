import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav_main">
      <div className="left_lg">
        <p className="name">EasyDine.</p>
      </div>

      <div className="nav_links">
        <Link to="/" className="links">Home</Link>
        <Link to="/order" className="links">Order</Link>
        <Link to="/about" className="links">About</Link>
        <Link to="/contact" className="links">Contact</Link>
        <Link to="/login" className="links">Login</Link>
      </div>

      <div className="right_btn">
        <button>BOOK A TABLE</button>
      </div>
    </div>
  );
};

export default Navbar;
