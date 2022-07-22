const express = require('express');
const products = require('./listaProdutos')

const app = express();

app.use(express.json());

app.post('/product', (req, res) => {
    const content = req.body;

    const newProducts = [...products, content];
    res.json(newProducts);
});

app.put('/product/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = req.body;

    const product = products.find(item => item.id === id);

    if (!product) return res.json('Product not found!');

    const newProducts = products.map(item => {
        if (item.id === id) return item = content;
        return item;
    })
    return res.json(newProducts);
});

app.delete('/product/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.filter(item => item.id != id);
    return res.json(product);
})

app.get('/', (req, res) => {
    return res.json(products);
});

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
});
