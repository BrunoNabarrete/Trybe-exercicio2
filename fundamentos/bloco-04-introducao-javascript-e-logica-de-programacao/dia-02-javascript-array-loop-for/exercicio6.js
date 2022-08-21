// exercicio 6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersImpar = 0;
let testNumber = 0

for (let index = 0; index < numbers.length; index +=1){
    testNumber = numbers[index] % 2;
    if (testNumber !== 0) {
        numbersImpar = numbersImpar + 1
    }
}

if (numbersImpar !== 0){
    console.log(numbersImpar)
}else {
    console.log('Nenhum valor encontrado')
}

//output : 6