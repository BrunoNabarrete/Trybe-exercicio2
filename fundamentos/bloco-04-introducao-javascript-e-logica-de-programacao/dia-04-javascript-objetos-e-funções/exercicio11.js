function menorIndice(numeros){
    let position = 0;
    for (let key in numeros){
        if(numeros[position] > numeros[key]){
            position = key;
        }
    }
    return position;
}

console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));