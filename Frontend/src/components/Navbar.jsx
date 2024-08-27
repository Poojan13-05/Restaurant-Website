import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav_main'>
      <div className='left_lg'>
        <p className='name'>EasyDine.</p>
      </div>

      <div className='nav_links'>
        <a href='#'>Home</a>
        <a href='#'>Order</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        <a href='#'>Login</a>
      </div>

      <div className='right_btn'>
        <button>BOOK A TABLE</button>

      </div>
    </div>
  );
}

export default Navbar;
