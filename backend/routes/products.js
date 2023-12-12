const express = require('express')
const router = express.Router()
const {
    getProducts,
    getProductbybarCode,
    createProduct,
    deleteProductbybarCode,
    updateProductbybarCode
} = require('../controllers/productController')

// Get all products
router.get('/', getProducts)

// Get a specific product by barCode
router.get('/:barCode', getProductbybarCode)

// Create a new product
router.post('/', createProduct)

// Delete a specific product by barCode
router.delete('/:barCode', deleteProductbybarCode)

// Update a product
router.patch('/:barCode', updateProductbybarCode)

// Export the router so it can be used in other files
module.exports = router
