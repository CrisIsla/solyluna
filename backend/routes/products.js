const express = require('express');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
    res.send('GET method on products route');
});

// Get a specific product
router.get('/:id', (req, res) => {
    res.send(`GET method on products route for product ${req.params.id}`);
});

// Create a new product
router.post('/', (req, res) => {
    res.send('POST method on products route');
});

// Update a product (we need to decide if we want to use PUT or PATCH)
router.put('/:id', (req, res) => {
    res.send(`PUT method on products route for product ${req.params.id}`);
});

// Export the router so it can be used in other files
module.exports = router;
