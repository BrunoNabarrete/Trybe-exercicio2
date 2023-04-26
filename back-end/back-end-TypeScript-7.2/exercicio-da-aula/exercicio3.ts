class Car {
    brand: string;
    color: string;
    doors: number;

    constructor(brand: string, color: string, doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    turnOn(): void {
        console.log('carro ligado')
    }

    turnOf(): void {
        console.log('carro desligado')
    }

    speedUp(): void {
        console.log('acelerando  carro')
    }

    speedDown(): void {
        console.log('freando o carro')
    }

    stop(): void {
        console.log('parando o carro')
    }

    turn(direction: string): void {
        console.log(`Virando o carro para a ${direction}`)
    }

    honk(): void {
        console.log('Buzinando: BIP BIP')
    }
}

export default Car;