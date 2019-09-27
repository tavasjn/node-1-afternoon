const express = require('express');
const products = require('./../products.json');
const getProducts = require('./getProducts');

const app = express();
const port = 4050;

app.use(express.json());

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProducts);


app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
