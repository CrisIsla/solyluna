const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Get a specific product
router.get('/:id', (req, res) => {
    res.send(`GET method on products route for product ${req.params.id}`);
});

// Create a new product
router.post('/', async (req, res) => {
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
});

// Delete a specific product
router.delete('/:barCode', async (req, res) => {
    try {
        await Product.deleteOne(req.params)
        res.status(200).json({ message: `deleted product with barCode ${req.params.barCode}` })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update a product (we need to decide if we want to use PUT or PATCH)
router.put('/:id', (req, res) => {
    res.send(`PUT method on products route for product ${req.params.id}`);
});

// Export the router so it can be used in other files
module.exports = router;
