const display = document.getElementById("display");

function inserir(valor) {
    if (valor === ',') {
        // Pega a última parte depois de um operador (+ - * /)
        const partes = display.value.split(/[\+\-\*\/]/);
        const ultimaParte = partes[partes.length - 1];
        if (ultimaParte.includes(',')) return; // Se esse número já tem vírgula, não deixa
    }

    display.value += valor;
}

function limparTudo() {
    display.value = '';
}

function limpar() {
    display.value = '';
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function inverterSinal() {
    let valor = display.value.replace(',', '.'); // Troca vírgula por ponto pra cálculo
    if (valor) {
        valor = parseFloat(valor) * -1;
        display.value = valor.toString().replace('.', ','); // Volta pra vírgula
    }
}

function calcular() {
    try {
        let expressao = display.value.replace(/,/g, '.'); // Troca vírgula por ponto
        let resultado = eval(expressao);
        display.value = resultado.toString().replace('.', ','); // Volta pra vírgula
    } catch (e) {
        display.value = "Erro";
    }
}