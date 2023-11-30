const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Use the products router for requests
const products = require('./routes/products');
app.use('/products', products);