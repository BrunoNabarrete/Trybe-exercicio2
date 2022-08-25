//exercicio 5: 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let arrayInteiros = [4, 3, 2, 3, 8, 2, 3];

function repete(array){
    let numero = 0;
    let contNumero;
    let indexRepetido = 0;
    for(let index = 0; index < array.length; index +=1){
            let verifica = array[index];
            for(let index2 = 0; index2 < array.length; index2 +=1){
                if(verifica === array[index2]){
                    contNumero +=1;
                }
            }
            if(contNumero > numero){
                numero = contNumero;
                indexRepetido = array[index];
            }
            contNumero = 0; 
        }
    return array[indexRepetido];
}

console.log(repete(arrayInteiros));