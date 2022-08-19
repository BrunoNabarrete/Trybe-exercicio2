const a = -100;
const b = 350;
const c = 450;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

console.log(a % b);

// exercicio 2

if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
}

// exercicio 3

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > b && c > a) {
    console.log(c)
}

// exercicio 4;

if (a > 0 ) {
    console.log('positive')
} else if (a <= 0 ) {
    console.log('negative')
} else {
    console.log('0')
}

// exercicio 5;

let lado1 = 70;
let lado2 = 100;
let lado3 = 10;

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("angulo errado");
} else if(lado1 + lado2 + lado3 !== 180) {
    console.log(false);
} else if (lado1 + lado2 + lado3 == 180) {
    console.log(true);
}

// exercício 6;



// exercício 7;

let nota = 150;
let result;

if (nota >= 90 && nota <= 100){
    result = 'A';
} else if (nota >= 80 && nota <90 ){
    result = 'B';
} else if (nota >= 70 && nota <80) {
    result = 'C';
} else if (nota >=60 && nota <70) {
    result = 'D';
} else if (nota >=50 && nota <60) {
    result = 'E';
} else if (nota < 50) {
    result = 'F';
} else if (nota < 0 || nota > 100)
    result = 'Erros na nota';

console.log(result);

// exercício 8;

const primeira = 3;
const segunda = 4;
const terceira = 6;

if (primeira % 2 == 0 || segunda % 2 == 0 || terceira % 2 == 0) {
    console.log(true);
} else {
    console.log(false)
}

// exercício 9;

const first = 2;
const second = 4;
const thirt = 7;

if (first % 2 != 0 || second % 2 != 0 || thirt % 2 != 0) {
    console.log(true);
} else {
    console.log(false)
}

// exercício 10;

let valorVenda = 400;
let valorCusto = 150;
let unidadeVendida = 1000;
let lucro;
let custoTotal;
let valorVendaTotal;

custoTotal = (valorCusto * unidadeVendida) * 1.2;
valorVendaTotal = valorVenda * unidadeVendida;

if (valorVenda == 0 || valorCusto == 0 || unidadeVendida == 0) {
    console.log('Valores imputados errado!')
} else if ( custoTotal > 0 ) {
    lucro = valorVendaTotal - custoTotal;
}

console.log(lucro);

// exercício 11;

let salario = 3800;

if (salario <= 1556.94) {
    salario = salario * 0.92;
} else if ( salario > 1556.94 && salario <= 2594.92) {
    salario = salario * 0.91;
} else if (salario > 2594 && salario <= 5189,82) {
    salario = salario * 0.89;
} else if (salario > 5189.82) {
    salario = salario - 570,88;
}

if (salario > 1903.99 && salario <= 2826.65) {
    salario = (salario * 0.925) + 142.80;
} else if (salario > 2826.65 && salario <= 3751.05) {
    salario = (salario * 0.85) + 354.80;
} else if (salario > 3751.05 && salario <= 4664.68) {
    salario = (salario * 0.775) + 636.13;
} else if (salario > 4664.68) {
    salario = (salario * 0.725) + 869.36;
}

console.log(salario)