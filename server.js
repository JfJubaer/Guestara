const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
const sampleRoutes = require("./routes/sampleRoutes");
app.use("/api/samples", sampleRoutes);

app.get("/", (req, res) => {
  res.send("Express server with Mongoose and MVC pattern is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
