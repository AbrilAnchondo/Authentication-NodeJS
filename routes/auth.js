const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authenticated");

const User = require("../models/User");

const authController = require("../controllers/auth.js");

// GET request to /signup
// Renders signup form
router.get("/signup", authController.getSignupPage);

// POST request to /signup
// Register a new user
router.post("/signup", authController.postRegisterUser);

// GET request to  /login
// Renders login form
router.get("/login", authController.getLoginPage);

// POST request to /authenticate
// User Login, authenticates user and gets token
router.post("/authenticate", authController.postLoginUser);

// GET request to /welcome
// This is a protected route
// passing middleware function which verifies the token and sends it in header
router.get("/welcome", isAuthenticated, authController.getWelcomePage);

module.exports = router;
