const express = require("express");
const router = express.Router();
const { signup, login, getMe } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected route – get logged-in user info
router.get("/me", protect, getMe);

module.exports = router;
