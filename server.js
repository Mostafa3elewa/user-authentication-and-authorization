const express = require("express");
const { connectDB } = require("./config/db");
const dotenv = require("dotenv");
const colors = require("colors");
const users = require("./routes/userRoute");
const { dashboard } = require("./routes/dashboard");
const { protect, admin } = require("./middleware/auth");
const { logout } = require("./routes/logout");
const app = express();

app.use(express.json());
dotenv.config();
connectDB();

app.use("/api/users", users);
app.get("/dashboard", protect, admin, dashboard);

const PORT = 5000;
app.get("/", (req, res) => {
  res.send(`API is running on port ${PORT}`);
});

app.listen(PORT, console.log(`app is working on port ${PORT}`));
