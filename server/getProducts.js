const products = require('../products.json');

const getProducts = (req, res) => {
    const item = products.filter(val => val.id >= parseInt(req.query.price))
    if(req.query.price){
        return res.status(500).send(item)
    }
    res.status(200).send(products);
}

module.exports = getProducts;