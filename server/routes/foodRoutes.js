// routes/foodRoutes.js

const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Get all food items
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Other routes for filtering, searching, ordering, etc.

module.exports = router;
