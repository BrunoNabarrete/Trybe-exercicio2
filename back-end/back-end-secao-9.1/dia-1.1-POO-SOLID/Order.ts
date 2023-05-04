import Client from "./Client";
import Item from "./Item";

export default class Order {
    private _client: Client;
    private _items: Item[] = [];
    private _payment: string;
    private _discount = 0;

    constructor(
        client: Client,
        items: Item[],
        payment: string,
        discount: number,
    ) {
        this._client = client;
        this.items = items;
        this._payment = payment;
        this.discount = discount;
    }

    get client(): Client {
        return this._client
    }

    set client(value: Client) {
        this._client = value;
    }
    
    get items(): Item[] {
        return this._items;
    }

    set items(value: Item[]) {
        if (value.length === 0) {
            throw new Error('O pedido deve conter no mínimo 1 item.')
        }
        this._items = value;
    }

    get payment():string {
        return this._payment;
    }

    set payment(value: string) {
        this._payment = value;
    }

    get discount():number {
        return this._discount;
    }

    set discount(value: number) {
        if (value < 0) {
            throw new Error('O desconto não pode ser um valor negativo');
        }
        this._discount = value;
    }

    calculateTotal(): number {
        return this.items.reduce((previousValue, item) => {
            const total = previousValue + item.price
            return total;
        }, 0);
    }

    calculateWithDiscount(): number {
        return this.calculateTotal() * (1 - this.discount)
    }
}