import React, { useState } from 'react';
import './TableBookingForm.css'; // Add appropriate styling

const TableBookingForm = () => {
  const [persons, setPersons] = useState('4');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Table booked for ${persons} persons on ${date} at ${time}`);
  };

  return (
    <div>
      <h1 className='pop_heading'>Book A Table</h1>
    <form onSubmit={handleSubmit} className="table-booking-form">
      <div className="form-row">
        <div className="form-group">
          <label>Persons</label>
          <select className="persons-select" value={persons} onChange={(e) => setPersons(e.target.value)} required>
            <option value="4">4 Persons</option>
            <option value="6">6 Persons</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group message-group">
        <label>Message</label>
        <input type='textarea'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter any special requests or messages here..."
        />
      </div>
      <div className="form-submit">
        <button type="submit">Confirm</button>
      </div>
    </form>
    </div>
  );
};

export default TableBookingForm;
