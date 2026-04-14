require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/AdminSchema");

async function createAdmin() {
  try {
    // connect DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");

    // hash password
    const hashed = await bcrypt.hash("1234", 10);

    // check if admin already exists
    const exists = await Admin.findOne({ email: "admin@gmail.com" });
    if (exists) {
      console.log("Admin already exists ❌");
      process.exit();
    }

    // create admin
    await Admin.create({
      email: "admin@gmail.com",
      password: hashed,
    });

    console.log("Admin created ✅");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createAdmin();