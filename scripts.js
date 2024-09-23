// Questão 1 - Calcular soma de índice
function calcularSoma() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k++;
        soma += k;
    }

    document.getElementById("resultado1").textContent = `A soma final é: ${soma}`;
}

// Questão 2 - Verificar se número pertence à sequência de Fibonacci
function calcularFibonacci() {
    const numero = parseInt(document.getElementById("numeroFibonacci").value);
    let a = 0, b = 1;
    let pertence = false;

    if (numero === 0 || numero === 1) {
        pertence = true;
    }

    while (b <= numero) {
        let temp = b;
        b = a + b;
        a = temp;

        if (b === numero) {
            pertence = true;
            break;
        }
    }

    document.getElementById("resultado2").textContent = pertence 
        ? `O número ${numero} pertence à sequência de Fibonacci.`
        : `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
}

// Questão 3 - Faturamento diário
function calcularFaturamento() {
    const faturamento = [
        2200, 0, 1500, 3200, 0, 2700, 0, 
        3900, 2200, 2900, 0, 1500, 2100, 
        4000, 0, 5000, 6000, 0, 4200, 0, 
        3500, 3100, 0, 2500, 3700, 3200, 0, 
        3900, 4800, 0
    ];

    const faturamentoFiltrado = faturamento.filter(valor => valor > 0);
    const menor = Math.min(...faturamentoFiltrado);
    const maior = Math.max(...faturamentoFiltrado);
    const media = faturamentoFiltrado.reduce((a, b) => a + b, 0) / faturamentoFiltrado.length;
    const diasAcimaMedia = faturamentoFiltrado.filter(valor => valor > media).length;

    document.getElementById("resultado3").textContent = `
        Menor valor: R$${menor.toFixed(2)} 
        Maior valor: R$${maior.toFixed(2)} 
        Dias acima da média: ${diasAcimaMedia}`;
}

// Questão 4 - Percentual de faturamento por estado
function calcularPercentual() {
    const faturamentoPorEstado = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    };

    const total = Object.values(faturamentoPorEstado).reduce((a, b) => a + b, 0);
    let resultado = '';

    for (let estado in faturamentoPorEstado) {
        let percentual = (faturamentoPorEstado[estado] / total) * 100;
        resultado += `${estado}: ${percentual.toFixed(2)}%<br>`;
    }

    document.getElementById("resultado4").innerHTML = resultado;
}

// Questão 5 - Inverter string
function inverterString() {
    let string = document.getElementById("stringInput").value;
    let stringInvertida = '';

    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }

    document.getElementById("resultado5").textContent = `String invertida: ${stringInvertida}`;
}
