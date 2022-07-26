const express = require('express');

const routes = express.Router();

const products = require('../listaProdutos')

// 1 - Retornar todos os produtos do array.
routes.get('/products', (req, res) => {
    return res.json(products);
});

// 2 - Obter um produto específico pelo ID.
routes.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(item => item.id === id);

    if (!product) return res.json('Product not found!');


    res.json(product);
});

// 3 - Adicionar um novo produto.

routes.post('/products', (req, res) => {
    const content = req.body;

    const newProducts = [...products, content];
    res.json(newProducts);
});

// 4 - Mudar uma propriedade de produto(qualquer uma).

routes.put('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = req.body;

    let product = products.find((item) => item.id === id);

    if (!product) {
        return res.json('Product not found!');
    } 

    const newProducts = products.map((item) => {
        if (item.id === id) item = content;
        return item;
    })
    
    return res.json(newProducts);
});

// 5 - Deletar um produto utilizando o ID.

routes.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.filter(item => item.id != id);
    return res.json(product);
});


module.exports = routes;