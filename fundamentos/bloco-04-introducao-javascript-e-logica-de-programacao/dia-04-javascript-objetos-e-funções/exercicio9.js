//exercicio 9: Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
//Exemplo de palíndromo: arara.
//verificaPalindrome('arara');
//Retorno esperado: true
//verificaPalindrome('desenvolvimento');
//Retorno esperado: false

let array = 'arara';

function verificaPalindrome(string){
    let reverse = string.split('').reverse().join('');
    if (reverse === string){
        return true;
    }else {
        return false;
    }
}
console.log(verificaPalindrome('bruno'));