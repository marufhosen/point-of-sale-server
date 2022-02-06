const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const verifyToken = require("../Controllers/authController");
const customersSchemas = require("../Schemas/customersSchema");
const Customers = new mongoose.model("Customers", customersSchemas);

// Get Customers
router.get("/getCustomers", verifyToken, async (req, res) => {
  try {
    const email = req.query.email;
    if (req.decodedUserEmail === email) {
      const document = await Customers.find({ companyEmail: email });
      res
        .status(200)
        .json({ result: document, message: "Customers GET Successfully" });
    } else {
      console.log("Unautorized access c");
    }
  } catch (err) {
    res.status(401).json({ message: "Server side error!" });
  }
});

//get single customer by email
router.get("/getSingleCustomers", verifyToken, async (req, res) => {
  try {
    const email = req.query.email;
    const name = req.query.name;
    if (req.decodedUserEmail === email) {
      const document = await Customers.findOne({ customerName: name });
      res
        .status(200)
        .json({ result: document, message: "Products GET Successfully" });
    } else {
      console.log("Unautorized access");
    }
  } catch (err) {
    res.status(401).json({ message: "Server side error!" });
  }
});

//add customers
router.post("/addCustomers", verifyToken, async (req, res) => {
  try {
    const email = req.query.email;
    if (req.decodedUserEmail === email) {
      const newCustomers = new Customers(req.body);
      await newCustomers.save();
      // res.status(200).json({ message: "Product Insert Successfully" });
      // console.log("Successfully Added");
    }
  } catch (err) {
    res.status(500).json({ error: "Server Side Error" });
  }
});

module.exports = router;
