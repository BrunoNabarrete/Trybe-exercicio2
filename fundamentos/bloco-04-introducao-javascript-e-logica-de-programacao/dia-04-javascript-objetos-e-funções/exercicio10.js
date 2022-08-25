//exercicio 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

let position = 0;

function maiorIndex(numeros){
    for (let index in numeros){
        if (numeros[position] < numeros[index]){
            position = index;
        }
    }
    return position;
}
console.log(maiorIndex([2, 3, 6, 7, 10, 1]));

