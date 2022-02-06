const mongoose = require("mongoose");

const customersSchemas = mongoose.Schema({
  companyEmail: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: String,
  due: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = customersSchemas;
