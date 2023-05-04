class Tv {
   private _brand: string;
   private _size: number;
   private _resolution: string;
   private _conection: string[];
   private _connectedTo?:string;

    constructor(b:string, s: number, r: string, c:string[]) {
        console.log('Criado a tv')
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._conection = c;
    }

    get connectedTo(): string | undefined {
        return this._connectedTo;
    }

    set connectedTo(value: string | undefined) {
        if (!value || this._conection.includes(value)) {
           this._connectedTo = value;
        }else {
            console.log('Sorry, connection unavailable!')
        }

    }

    turnOn () {
        console.log(`A TV ${this._brand}, do tamanho ${this._size}, com a resolução ${this._resolution}, e com coneção ${this._conection}`);
    }
}

const tv1 = new Tv('LG', 47, '4K', ['HDMI', 'INTERNET', 'WI-FI']);

tv1.turnOn()

tv1.connectedTo = 'WI-FI';

console.log(tv1.connectedTo);