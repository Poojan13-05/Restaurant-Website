const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/Users');
const Order = require('../models/Order');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());

app.post('/placeOrder', async (req, res) => {
  const { userId, items } = req.body;

  if (!userId || !items || !items.length) {
    return res.status(400).json({ message: 'User ID and items are required' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const newOrder = new Order({
      items,
      totalPrice,
      customerDetails: {
        email: user.email,
        username: user.username,
      },
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
