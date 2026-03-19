require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

const seedAdmin = async () => {
  try {
    // Check if MONGODB_URI exists
    if (!process.env.MONGODB_URI) {
        console.error("❌ MONGODB_URI is not defined in .env");
        process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("📡 Connected to MongoDB for seeding...");

    const adminEmail = "admin@share2serve.com";
    const adminExists = await User.findOne({ email: adminEmail });
    
    if (adminExists) {
      console.log(`ℹ️ Admin account (${adminEmail}) already exists.`);
      process.exit(0);
    }

    await User.create({
      name: "Admin User",
      email: adminEmail,
      password: "admin123", // The User model will hash this automatically
      role: "admin",
    });

    console.log(`✅ Admin account created successfully!`);
    console.log(`📧 Email: ${adminEmail}`);
    console.log(`🔑 Password: admin123`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding admin:", error.message);
    process.exit(1);
  }
};

seedAdmin();
