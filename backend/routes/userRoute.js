const express = require("express");
const Router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  logout,
  getUser,
  getLoginStatus,
  updateUser,
  updatePhoto,
} = require("../controllers/userController");

Router.post("/register", registerUser);
Router.post("/login", loginUser);
Router.get("/logout", logout);
Router.get("/getUser", protect, getUser);
Router.get("/getLoginStatus", getLoginStatus);
Router.patch("/updateUser", protect, updateUser);
Router.patch("/updatePhoto", protect, updatePhoto);
Router;
module.exports = Router;
