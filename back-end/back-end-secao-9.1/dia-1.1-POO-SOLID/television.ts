class Tv {
    brand: string;
    size: number;
    resolution: string;
    conection: string[];
    connectedTo:string;

    constructor(b:string, s: number, r: string, c:string[]) {
        console.log('Criado a tv')
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.conection = c;
    }

    turnOn () {
        console.log(`A TV ${this.brand}, do tamanho ${this.size}, com a resolução ${this.resolution}, e com coneção ${this.conection}`);
    }
}

const tv1 = new Tv('LG', 47, '4K', ['HDMI', 'INTERNET', 'WI-FI']);

tv1.turnOn()