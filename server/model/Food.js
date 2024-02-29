// models/Food.js

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, enum: ['veg', 'non-veg', 'dessert'], required: true }
});

module.exports = mongoose.model('Food', foodSchema);
