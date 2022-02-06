const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const verifyToken = require("../Controllers/authController");
const productSchemas = require("../Schemas/productSchema");
const Product = new mongoose.model("Product", productSchemas);

//get all product by email
router.get("/getProducts", verifyToken, async (req, res) => {
  try {
    const email = req.query.email;
    if (req.decodedUserEmail === email) {
      const document = await Product.find({ email: email });
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

//get single product by email
router.get("/getSingleProducts", verifyToken, async (req, res) => {
  try {
    const email = req.query.email;
    const name = req.query.name;
    if (req.decodedUserEmail === email) {
      const document = await Product.findOne({ productName: name });
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

//post single product by email
router.post("/addProducts", verifyToken, async (req, res) => {
  try {
    const email = req.query.email;
    if (req.decodedUserEmail === email) {
      const newProduct = new Product(req.body);
      await newProduct.save();
      // res.status(200).json({ message: "Product Insert Successfully" });
      // console.log("Successfully Added");
    }
  } catch (err) {
    res.status(500).json({ error: "Server Side Error" });
  }
});

module.exports = router;
