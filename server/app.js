const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const Sentence = require("./models/sentence");
const Word = require("./models/word");

mongoose.connect("mongodb://localhost:27017/italian", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database Succesfully Connected!");
});

const app = express();
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.get("/exercises", async (req, res) => {
  const words = await Word.find({});
  const sentences = await Sentence.find({});
  res.json([words, sentences]);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`I'm listening on ${PORT} `);
});
