const express = require("express");

const router = express.Router();

const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: { rejectUnauthorized: false },
});

client.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
  } else {
    console.log("Connected to PostgreSQL database");
  }
});

router.get("/", (req, res) => {
  client.query("SELECT * FROM product", (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(result);
      // console.log(result);
    }
  });
});

module.exports = router;
