export default class Item {
    private _nameItem: string;
    private _price: number;

    constructor(n: string, p: number) {
        this._nameItem = n;
        this._price = p;
    }

    get name(): string {
        return this._nameItem;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error('O nome de conter no mínimo 3 caracteres')
        }
        this._nameItem = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) throw new Error('O Preço deve ser positivo');

        this._price = value;
    }
}