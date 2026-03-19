const Donor = require("../models/Donor");

// @desc    Get all donors
// @route   GET /api/donors
// @access  Private/Admin
const getDonors = async (req, res, next) => {
  try {
    const donors = await Donor.find({});
    res.status(200).json({ success: true, count: donors.length, data: donors });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a donor
// @route   POST /api/donors
// @access  Private/Admin
const createDonor = async (req, res, next) => {
  try {
    const donor = await Donor.create(req.body);
    res.status(201).json({ success: true, data: donor });
  } catch (error) {
    next(error);
  }
};

module.exports = { getDonors, createDonor };
