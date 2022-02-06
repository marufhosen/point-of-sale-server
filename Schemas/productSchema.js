const mongoose = require("mongoose");

const productSchemas = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  sellPrice: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  stock: String,
  detail: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = productSchemas;
