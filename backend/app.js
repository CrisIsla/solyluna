require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const app = express();

// Use the products router for requests
const products = require('./routes/products');
app.use('/products', products);

// Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server is listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error)
    })