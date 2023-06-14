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

router.post("/submit", async (req, res) => {
  try {
    const { name, phonenumber } = req.body;
    await client.query(
      "INSERT INTO userdetails (name, phonenumber) VALUES ($1, $2)",
      [name, phonenumber]
    );

    res.status(200).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.error("Error submitting form data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting the form" });
  }
});

module.exports = router;
