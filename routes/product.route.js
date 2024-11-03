const express = require("express");
const Product = require("../models/product.model");
const { getProducts, getProduct } = require("../controllers/product.controller");
const router = express.Router()

router.get('/', getProducts);
router.get('/:id', getProduct);

router.post('/', getProducts);
router.put('/', getProducts);
router.delete('/', getProducts);


module.exports = router;