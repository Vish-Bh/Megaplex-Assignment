require("dotenv").config();
const connectDB = require("../config/mongodb");
const Content = require("../models/ContentSchema");
const defaultContent = require("../../data/defaultContent");

const run = async () => {
  await connectDB();

  const exists = await Content.findOne();

  if (exists) {
    console.log("⚠️ Content already exists");
    process.exit();
  }

  await Content.create({ data: defaultContent });

  console.log("✅ Default content created");
  process.exit();
};

run();