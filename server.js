const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/task.routes");
const { sequelize } = require("./models");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", taskRoutes);

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error("Error: " + err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
