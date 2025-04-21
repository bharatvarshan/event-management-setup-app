const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const eventRoutes = require("./apis/routes/event.routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("dotenv").config();

app.use("/events", eventRoutes);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
