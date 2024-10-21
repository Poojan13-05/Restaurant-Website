const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/Users');
const Reservation = require('../models/Reservation');

const TABLE_LIMITS = {
  "4-person": 5,
  "6-person": 3,
};

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());

app.post('/create', async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { reservationDate, reservationTime, tableType } = req.body;

    // Check table availability
    const existingReservations = await Reservation.countDocuments({
      reservationDate,
      reservationTime,
      tableType,
    });

    if (existingReservations >= TABLE_LIMITS[tableType]) {
      return res.status(400).json({ message: 'No tables available for the selected time slot' });
    }

    const newReservation = new Reservation({
      userId: req.body.userId,
      name: req.body.name,
      contact: req.body.contact,
      reservationDate,
      reservationTime,
      numberOfPeople: req.body.numberOfPeople,
      tableType,
    });

    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;
