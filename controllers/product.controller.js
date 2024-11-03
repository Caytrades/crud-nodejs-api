const Product = require("../models/product.model");

// Getting Data Of All Products
const getProducts = async (req, res) => {

    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

// Getting Data Of A Single Product
const getProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

// Creating A Product
const createProduct = async (req, res) => {

    try {
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getProducts,
    getProduct,
};