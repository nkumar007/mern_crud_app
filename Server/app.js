require("dotenv").config();
const express = require("express");
const { connectToDB } = require("./config/database");
const app = express();
const userRoutes = require("./routes/userRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToDB();
app.use("/", userRoutes);

module.exports = app;
