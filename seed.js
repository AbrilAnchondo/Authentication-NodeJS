const fs = require("fs");

const mongoose = require("mongoose");

require("dotenv").config();

const User = require("./models/User");

const users = JSON.parse(fs.readFileSync("./users.json"));

seedMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await User.deleteMany();
    console.log("MongoDB cleared");
    await User.create(users);
    console.log("DB seeded");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

seedMongoDB();
