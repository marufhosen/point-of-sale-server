const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const verifyToken = require("../Controllers/authController");
const invoiceSchema = require("../Schemas/invoiceSchema");
const Invoices = new mongoose.model("Invoices", invoiceSchema);

router.post("/addInvoice", verifyToken, async (req, res) => {
  try {
    const email = req.query.email;
    if (req.decodedUserEmail === email) {
      const newInvoices = new Invoices(req.body);
      await newInvoices.save();
      // res.status(200).json({ message: "Product Insert Successfully" });
      // console.log("Successfully Added");
    }
  } catch (err) {
    res.status(500).json({ error: "Server Side Error" });
  }
});

//get invoice
router.get("/getInvoice", verifyToken, async (req, res) => {
  try {
    const email = req.query.email;
    if (req.decodedUserEmail === email) {
      const document = await Invoices.find({ companyEmail: email });
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

module.exports = router;
