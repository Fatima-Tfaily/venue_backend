require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("./config/db");
const reservationRoutes = require("./routes/reservationRoute");
const userRoutes = require("./routes/userRoute");

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/reservation", reservationRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
