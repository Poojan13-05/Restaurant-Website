const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/Users');

const app = express();
app.use(express.json());

// Configure CORS
app.use(cors({
  origin: 'https://restaurant-website-xi-eight.vercel.app', // Allow your frontend domain
  methods: ['GET', 'POST'], // Allow the methods you're using
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (username.length < 3) {
      return res.status(400).json({ message: 'Username must be at least 3 characters long' });
    }

    const passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (password.length < 10 || !passwordCheck.test(password)) {
      return res.status(400).json({
        message: 'Password must be at least 10 characters long and contain one number and one special character',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Wrong password' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
