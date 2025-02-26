const barcode = "9310123000018"

function getOriginCountry(barcode){
    const num = parseInt(barcode.slice(0, 3));

    if (num >= 0 && num <= 19) return "USA & Canada";
    if (num >= 30 && num <= 39) return "USA (Drugs)";
    if (num >= 400 && num <= 440) return "Germany";
    if (num >= 460 && num <= 469) return "Russia";
    if (num >= 690 && num <= 699) return "China";
    if (num == 789) return "Brazil";
    if (num == 880) return "South Korea";
    if (num == 890) return "India";
    if (num >= 930 && num <= 939) return "Australia";
    if (num >= 940 && num <= 949) return "New Zealand";

    return "Unknown";
}

function getManufacturer(barcode){
    const manufacturer = barcode.slice(3, 7);

    const manufacturerMap = {
        "0000": "General Electric",
        "0044": "Procter & Gamble",
        "0070": "Nestlé",
        "0123": "Coca-Cola",
        "0456": "Samsung",
        "1234": "Apple Inc.",
        "5555": "Sony",
        "6001": "LG Electronics",
        "7894": "Natura (Brazil)",
        "8901": "Tata Consumer Products (India)"
    };

    return manufacturerMap[manufacturer] || "Unknown";
}

function getProduct(barcode){
    const product = barcode.slice(7, -1);

    const productMap = {
        "00001": "Coca-Cola 350ml Can",
        "12345": "iPhone 15 Pro Max",
        "55555": "Sony PlayStation 5",
        "60000": "LG OLED TV 65-inch",
        "78901": "Natura Ekos Hand Cream",
        "99999": "Samsung Galaxy S24 Ultra",
        "54321": "Nestlé Kit-Kat 4 Finger",
        "11111": "Procter & Gamble Ariel Detergent",
        "22222": "Tata Himalayan Salt",
        "33333": "General Electric LED Bulb"
    };

    return productMap[product] || "Unknown";
}

function verificas(){
    const checkarDigito = parseInt(barcode.slice(-1));
    const numeros = barcode.slice(0, 12).split('').map(Number);

    const soma = numeros.reduce((perv, curr, i) => perv + curr * (i % 2 === 0 ? 1:3), 0);
    const calculardigitocheck = 10 - (soma % 10);

    const resposta = {
        valido: calculardigitocheck === checkarDigito,
        digitocalculado: calculardigitocheck,
        paisdeorigem:getOriginCountry(barcode),
        empresa:getManufacturer(barcode),
        produto:getProduct(barcode)
    }
    return resposta;
}

console.log((verificas(barcode)))

