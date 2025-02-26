function Calculo(numeroCartao) {
    for (let i = numeroCartao.length - 2; i >= 0; i -= 2) {
        numeroCartao[i] *= 2;
        if (numeroCartao[i] > 9) {
            numeroCartao[i] = numeroCartao[i] - 9;
        }
    }
    let soma = numeroCartao.reduce((acc, curr) => acc + curr, 0);

    return soma % 10 === 0;
}
function main() {
    let numeroCartao = "5148 1500 1379 8819"
    numeroCartao = numeroCartao.replaceAll(' ', '').split('').map(Number);

    if (numeroCartao.length != 16) {
        console.log("Número inválido, mínimo 16 numeros")
        return 'Número inválido, mínimo 16 numeros'
    }

    let validez = Calculo(numeroCartao);
    console.log(`Seu cartão tem uma validez ${validez}`);

} main();