interface Myinterface {
    myNumber: number;

    myFunc(myParam: number): string;
}

class Myclass implements Myinterface {
    constructor(public myNumber: number) {}

    myFunc(myParam: number):string {
        return `myParam + myNumber: ${this.myNumber + myParam}`;
    }
}

const myObject = new Myclass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));