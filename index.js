const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/product.model.js")
require('dotenv').config();


const app = express()
app.use(express.json())
// Define the MongoDB connection URI using the environment variable
const mongoURI = process.env.MONGODB_URI;

app.get('/', (req, res) => {
    res.send('Hello World')
});

// Getting Data Of All Products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Getting Data Of A Single Product
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// app.post('/api/products', (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
// });

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


// Updating our products
app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Product not Found" });
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete A Product
app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
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