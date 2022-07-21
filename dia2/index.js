
const calcularPreco = (nome, preco) => {

	let custoEnvio = 0;
	let precoFinal = 0;

	if(preco <= 2000) {
		custoEnvio = 300;
	} else if(preco > 2000 && preco <= 4000) {
		custoEnvio = 450;
	} else if(preco > 4000) {
		custoEnvio = 700;
	}

	precoFinal = preco + custoEnvio;

	return `O produto ${nome} custa R$${preco}. Seu custo de envio é R$${custoEnvio}. Portanto, o preço final é R$${precoFinal}`;
}

console.log(calcularPreco('Macbook', 2500));
console.log(calcularPreco('Celular', 500));
console.log(calcularPreco('Playstation', 4500));