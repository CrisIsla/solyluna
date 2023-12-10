const Product = require('../models/productModel')

// Get all products

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// Get one product

const getProduct = async (req, res) => {
    try {
        const product = await Product.find(req.params)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// Create a new product

const createProduct = async (req, res) => {
    const product = new Product({
        barCode: req.body.barCode,
        name: req.body.name,
        price: req.body.price
    })

    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Delete a product

const deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne(req.params)
        res.status(200).json({ message: `deleted product with barCode ${req.params.barCode}` })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Update a product

const updateProduct = async (req, res) => {
    
}

module.exports(
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
)