//exercicio 6: Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sum(numero){
    let soma = 0;
    for(let index = 1; index <= numero; index +=1){
    soma = soma + index;
    }
    return soma
}

console.log(sum(15));
