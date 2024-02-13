const asynchandler = require("express-async-handler");

const registerUser = asynchandler(async (req, res) => {
  res.send("Register user");
});

module.exports = {
  registerUser,
};
