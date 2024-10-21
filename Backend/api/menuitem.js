const express = require('express');
const mongoose = require('mongoose');
const MenuItem = require('../models/MenuItem');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());

app.post('/additem', async (req, res) => {
  try {
    const newItem = new MenuItem({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    });

    const item = await newItem.save();
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;
