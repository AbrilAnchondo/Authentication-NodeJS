const mongoose = require("mongoose");

// mongoose returns promises
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is Connected");
  } catch (err) {
    console.error(err.message);
    // exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
