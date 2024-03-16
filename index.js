const express = require('express')
var cors = require('cors')
const path = require('path')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = 5000;

app.use(cors());
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))

app.get("/login", function(req,res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/register", function(req,res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", function(req,res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/instructions", function(req,res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/challenges", function(req,res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/hackerboard", function(req,res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoURI = process.env.MONGODB_URI;
// const mongoURI = "mongodb://localhost:27017/invaders0x1"

mongoose.connect(mongoURI, () => {
  console.log("Connected to Mongo Successfully");
})