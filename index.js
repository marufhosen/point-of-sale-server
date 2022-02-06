const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");

const productHandler = require("./Routes/productHandler");
const customerHandler = require("./Routes/customersHandler");
const invoiceHandler = require("./Routes/invoiceHandler");

//middlewere
app.use(cors());
app.use(express.json());
require("dotenv").config();

//database connettion
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

//product handling route
app.use("/product", productHandler);
app.use("/customer", customerHandler);
app.use("/invoice", invoiceHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
