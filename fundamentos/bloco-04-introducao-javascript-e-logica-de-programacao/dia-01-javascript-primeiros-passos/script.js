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
