const express = require("express");
const mongoose = require('mongoose');
const router = require("./routes/product.route.js");
require('dotenv').config();
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// MongoDB Connection URI using the environment variable
const mongoURI = process.env.MONGODB_URI;

// Routes
app.use('/api/products', router);


app.get('/', (req, res) => {
    res.send('Hello World')
});


// app.post('/api/products', (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
// });

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