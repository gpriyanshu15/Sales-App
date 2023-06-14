const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

// const productRoutes = require("./routes/product");
// const CigeretteRoutes = require("./routes/Cigerettes");
const SalesRoutes = require("./routes/Sales");
const SubmitRoutes = require("./routes/Submit");

app.use(cors());
app.use(express.json());

// app.use("/products", productRoutes);
// app.use("/Cigerettes", CigeretteRoutes);
app.use("/Sales", SalesRoutes);
app.use("/details",SubmitRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
