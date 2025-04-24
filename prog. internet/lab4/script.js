document.writeln("<h2>Tabuada Dinâmica</h2>");

let numero; 

do {
    numero  = prompt('Insira um valor');
} while (isNaN(numero) || numero.trim() === '');

numero = Number(numero);

        for (let i = 1; i <= 10; i++){
            soma = numero * i;
            document.write('<p class="num">' + numero + ' x ' + i + ' = ' + soma + '</p>' );
        }