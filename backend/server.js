const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ urlencoded: false }));
app.use
app.use(
  cors({
    origin: ["http://localhost:3000", "https://shopito-app.vercel.app"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

// Error Middleware
app.use(errorHandler);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

//Routes
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/api/users", userRoute);
