const express = require("express");
const router = express.Router();
const { getDonors, createDonor } = require("../controllers/donorController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// All donor routes are protected and admin-only
router.use(protect);
router.use(adminOnly);

router.route("/")
  .get(getDonors)
  .post(createDonor);

module.exports = router;
