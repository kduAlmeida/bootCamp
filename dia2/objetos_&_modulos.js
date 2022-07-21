let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [], }
];

// 1. Adicione um ID exclusivo a cada produto começando em 1.

products.forEach((product, index) => {
    product.id = index + 1;
})

console.log(products);

// 2. Imprima o nome de cada um dos produtos no console.

products.map((product) => {
    console.log(product.name);
})

// 3. Imprima no console o produto com o id 3.

console.log(products[2]);

// 4. Imprima no console os produtos com a cor “black”.

products.find((product) => {
    if(product.colors.includes('black')) {
        console.log(product);
    }
});

// 5. Imprima no console os produtos que não possuem cor.

products.filter((product) => {
    if(product.colors.length === 0) {
        console.log(product);
    }
});