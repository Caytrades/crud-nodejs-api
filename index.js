const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();


const app = express()
// Define the MongoDB connection URI using the environment variable
const mongoURI = process.env.MONGODB_URI;

app.get('/', (req, res) => {
  res.send('Hello World')
});

mongoose.connect(mongoURI)
.then(() => {
    console.log("Connected to the Database")
    app.listen(8000, () => {
        console.log("Server is running on http://localhost:8000")
    });
})
.catch(() => {
    console.log("Connection failed")
});