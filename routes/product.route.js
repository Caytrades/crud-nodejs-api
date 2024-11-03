const express = require("express");
const Product = require("../models/product.model");
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const router = express.Router()

// Get products
router.get('/', getProducts);
router.get('/:id', getProduct);

// Create a product
router.post('/', createProduct);

// Update a product
router.put('/:id', updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);


module.exports = router;