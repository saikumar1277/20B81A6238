const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./config/config.env" });

const port = process.env.PORT || 3000;

app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const alltrains = require("./routes/allTrains");
const singleTrain = require("./routes/singleTrain");

app.use("/api/v1", alltrains);
app.use("/api/v1/singleTrain", singleTrain);

app.listen(port, () => console.log(`Node server listening on port ${port}!`));
