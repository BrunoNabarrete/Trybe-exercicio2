let familia =['murillo', 'bruno', 'luciane', 'djalma'];

familia.push('jane');
familia.unshift('belinha');

console.log(familia);


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu[2];

menu.push('Contato');

console.log(menu);
console.log(menuServices);
console.log(indexOfPortfolio);

// repetição for;

let numero = 7

for (let contador = 1; contador <= 9; contador +=1) {
    console.log(' ');
    console.log(numero * contador);
}

let listaDeNomes = ['Joana', 'Bruno', 'Lucas'] 

for (let index = 0; index < listaDeNomes.length; index +=1){
    let mensagem = 'Boas-vindas, ' + listaDeNomes[index];
    console.log(mensagem);
}

let cars = ['BMW', 'Volvo', 'Audi', 'Fiat'];

for (let exibir = 0; exibir < cars.length; exibir +=1){
    console.log(cars[exibir]);
}

let groceryList = ['Arroz', 'feijão', 'alface', 'melancia']

for (let mercado = 0; mercado < groceryList.length; mercado +=1){
    console.log(groceryList[mercado]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let imprimir of names){
    console.log(imprimir);
}


function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}

for(let index = 0; index <= 20; index+=1 ){
    console.log(index);
}
