// exercício 3; Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;

for (let index = 0; index < numbers.length; index +=1) {
    sum = sum + numbers[index];
}

media = sum/numbers.length

console.log(numbers.length)
console.log(media);

//output = 27.8