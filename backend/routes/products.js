const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')

// Get all products
router.get('/', getProducts);

// Get a specific product
router.get('/:barCode', getProduct);

// Create a new product
router.post('/', createProduct);

// Delete a specific product
router.delete('/:barCode', deleteProduct)

// Update a product (we need to decide if we want to use PUT or PATCH)
router.put('/:id', updateProduct);

// Export the router so it can be used in other files
module.exports = router;
