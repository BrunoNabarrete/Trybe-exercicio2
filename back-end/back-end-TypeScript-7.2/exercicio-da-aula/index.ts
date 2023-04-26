import Car from './exercicio3';

import Pizza from './exercicio4';

const gol = new Car('Volkswagem', 'prata', 4);

gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();


const calabresa: Pizza = {
    flavor: 'Calabresa',
    slices: 8
}

console.log(calabresa);

const marguerita: Pizza = {
    flavor: 'Marguerita',
    slices: 6
}

console.log(marguerita)

const nutella: Pizza = {
    flavor: 'Nutella',
    slices: 4
}