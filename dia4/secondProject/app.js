const express = require('express');

const app = express();
const routesProducts = require('./routes/productsRoutes')

app.use('/api', routesProducts);


app.listen(3000, () => {
    console.log('Aplicação ouvindo na porta 3000');
});
