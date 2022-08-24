function maiorString(String){
    let maior = '';
    for (let i = 0; i < String.length; i +=1){
        if(maior.length < String[i].length){
            maior = String[i]
        }
    }
    return maior;

}
console.log(maiorString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));