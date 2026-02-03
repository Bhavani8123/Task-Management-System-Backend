require("dotenv").config();

const connectDB = require("./config/db");

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NTQyNzA2ZmI4MzAxZDExNTBmMGY5NyIsImlhdCI6MTc3MDA0ODM0OSwiZXhwIjoxNzcwMTM0NzQ5fQ.wvrFAorJ-M5JQ0FsaQ40MoeFyobPKpPKnGDW1uIPp5s
// middlewares
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
