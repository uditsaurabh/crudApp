const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/v1/book", require("./routes/Book.routes"));

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
app.listen(process.env.PORT, () => {
  console.log("app is running at successfully", process.env.PORT);
});
