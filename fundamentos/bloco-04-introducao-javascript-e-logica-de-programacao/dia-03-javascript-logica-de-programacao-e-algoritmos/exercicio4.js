//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numberIni = 2;
let numberMax = 50;
let numberPrimo = 0;

for (let index = numberIni; index < numberMax; index +=1){
    if (index % 1 === 0 && index % index === 0){
        numberPrimo = index - 2;
    }
    
}

console.log(numberPrimo);

