const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    requesterName: {
      type: String,
      required: true,
    },
    itemNeeded: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Completed", "Cancelled"],
      default: "Pending",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Request", requestSchema);
