const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Objectid } = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "Password must be upto 6 characters"],
  },
  role: {
    type: String,
    required: [true],
    default: "customer",
    enum: ["customer", "admin"],
  },
  photo: {
    type: String,
    required: [true, "Please add a photo"],
    default: "https://i.ibb.co/4pDNDk1/avatar.png",
  },
  phone: {
    type: String,
    default: "+353",
  },
  address: {
    type: Object,
  },
}, {
  timestamps: true,
});

//Hashing Password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
