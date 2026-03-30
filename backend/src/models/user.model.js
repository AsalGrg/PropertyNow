const mongoose = require("mongoose");

//creating schema for User model
const userSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  password: { type: String, required: true, minlength: 8 },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    enum: ["normal", "admin", "estate_broker"],
    default: "normal",
  },
});

//creating the UserModel using the following schema
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
