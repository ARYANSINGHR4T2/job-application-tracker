const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/applications", require("./routes/applications"));

app.get("/", (req, res) => {
  res.send("Job Application Tracker API running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
