// exercicio:Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

//exercicio 1.1

function sum(a,b){
    return a + b;
}

console.log(sum(2,5));

//exercicio 1.2

function sub(a,b){
    return a - b;
}

console.log(sub(2,5));

//exercicio 1.3

function mult(a,b){
    return a * b;
}

console.log(mult(2,5));

//exercicio 1.4

function div(a,b){
    return a / b;
}

console.log(div(2,5));

//exercicio 1.5

function mod(a,b){
    return a % b;
}

console.log(mod(2,5));

//exercicio 2

function maiorNum(a,b){
    if (a > b){
        return 'O numero: ' + a + ' é maior';
    }else {
        return 'O numero: ' + b + ' é maior'
    }
}

console.log(maiorNum(10,25));

//exercicio 3

function maiorNum3(a,b,c){
    if (a > b && a > c){
        return 'O numero: ' + a + ' é maior';
    }else if (b > a && b > c){
        return 'O numero: ' + b + ' é maior';
    }else{
        return 'o numero: ' + c + ' é maior';
    }
}

console.log(maiorNum3(5,10,15));

//exercicio 4

function positiveNegative(a){
    if (a > 0){
        return 'Positive';
    }else if (a < 0){
        return 'negative';
    }else{
        return 'zero';
    }
}

console.log(positiveNegative(-1))

//exercicio 5

function angulo(a,b,c){
    if (a <= 0 || b <= 0 || c <= 0){
        return 'Angulo inválido';
    }else if (a + b + c !== 180){
        return false;
    }else if (a + b + c === 180){
        return true;
    }
}

console.log(angulo(50,50,80))