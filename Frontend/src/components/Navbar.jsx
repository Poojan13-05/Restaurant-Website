import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import TableBookingForm from './TableBookingForm';

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };

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
        <button onClick={handleToggleForm}>BOOK A TABLE</button>
      </div>

      {/* Conditionally render the overlay and form */}
      {showForm && (
        <div className="overlay" onClick={closeForm}>
          <div className="popup-form" onClick={(e) => e.stopPropagation()}>
            <TableBookingForm />
            <button onClick={closeForm} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
