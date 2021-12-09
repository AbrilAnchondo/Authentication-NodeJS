require("dotenv").config();
const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./config/db.js");

const app = express();

// Connect to DB
connectDB();

//setting a global configuration value
app.set("view engine", "ejs");

const authRoutes = require("./routes/auth");
const homeRoute = require("./routes/home");

// middleware to read the data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

// defining routes
app.use(authRoutes);
app.use(homeRoute);

app.listen(3000);
