const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  accounts: [String], // Bank accounts linked
});

module.exports = mongoose.model("User", userSchema);
