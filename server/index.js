const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const multer = require("multer");
const dotenv = require("dotenv");
const Route = require("./routes/route");

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const dbpath = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.epq7b.mongodb.net/WhatsppLogin`;

app.use(express.json());
app.use(bodyparser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Route);

const Port = 8000;
mongoose
  .connect(dbpath)
  .then(() => {
    app.listen(Port, () => {
      console.log("SUCCESSFULLY connected to database ");
      console.log(` app is listening on server http://localhost:${Port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("unable to launch the server site");
  });
