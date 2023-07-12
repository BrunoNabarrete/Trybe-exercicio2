// class Superclass {
//     public isSuper:boolean

//     constructor() {
//         this.isSuper = true;
//     }

//     protected sayHello() {
//         return `Olá mundo!`;
//     }
// }

// class Subclass extends Superclass {
//     constructor() {
//         super();
//         this.isSuper = false;
//     }

//     public sayHello2() {
//         return this.sayHello();
//     }
// }

// const myFuc = (object: Subclass) => {

//     object.sayHello2();
// }

// // const sup = new Superclass();
// const sub = new Subclass();
// myFuc(sub);
// // myFuc(sup);

interface Myinterface {
    myNumber: number;

    myFunc(myParam:number):string;
}

class Myclass implements Myinterface {
    constructor(public myNumber:number) {
    }

    myFunc(myParam: number): string {
        return `a soma dos resultados ${this.myNumber + myParam}`
    }
}

const myObject = new Myclass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4))