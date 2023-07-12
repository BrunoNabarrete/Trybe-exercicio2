export default class Person {
    private _name: string;
    private _birthDate: Date;

    constructor(name:string, birthDate: Date) {
        this._name = name;
        this._birthDate = birthDate;
    }

    get birthDate():Date {
        return this._birthDate;
    }

    set birthDate(date: Date) {
        this.validateAge(date);
        this._birthDate = date;
    }

    static getAge(date: Date): number {
        const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    }

    get name():string {
        return this.name;
    }

    set name(name: string) {
        this.validateName(name);
        this._name = name;
    }

    private validateName(name:string): void {
        if (name.length < 3 ) {
            throw new Error(`O tamanho mínimo é de 3 caracteres`)
        }
    };

    private validateAge(date: Date):void {
        if(date.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser uma data no futuro')
        }
        if (Person.getAge(date) > 120) {
            throw new Error('A pessoa deve ter no máximo 120 anos')
        }
    }
}

const person1 = new Person('Bruno', new Date('1997/09/11'));