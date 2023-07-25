const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const User = require("./models/User");
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Following Error Occurred: ", err);
  });

app.get("/test", (req, res) => {
  res.json("it's working");
});


app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 8);
  await User.create({ username, email, hash });
});

app.listen(4000);
