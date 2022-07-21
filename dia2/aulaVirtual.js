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

// 1. Adicione um novo produto ao array com as mesmas propriedades dos produtos existentes.

products.push({
    name: 'Smartphone',
    price: 500,
    quantity: 10,
    colors: ['white', 'blue', 'green']
})

console.log(products);

// 2. Remova os produtos fora de estoque da matriz.

products.forEach((product) => {
    if(product.quantity === 0) {
        products.splice(products.indexOf(product), 1);
    }
})

console.log(products);

// 3. Imprima no console a soma do estoque de todos os produtos.

let sum = 0;

products.forEach((product) => {
    sum += product.quantity;
})

console.log(sum);

// 4. Imprima produtos com preço superior a um determinado valor.

products.filter((product) => {
    if(product.price > 100) {
        console.log(product);
    }
});

// 5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.

products.map((product) => {
    if(product.name.includes('o')) {
        console.log(product);
    }
});