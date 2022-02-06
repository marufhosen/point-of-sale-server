const mongoose = require("mongoose");

const productSchemas = mongoose.Schema({
  companyEmail: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productUnit: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  sellPrice: {
    type: String,
    required: true,
  },
  totalDue: {
    type: String,
    required: true,
  },
  invoiceDate: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = productSchemas;
