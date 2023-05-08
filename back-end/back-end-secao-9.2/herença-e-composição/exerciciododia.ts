export default class Person {
    private _name: string;
    private _birthDate: Date;

    constructor(name: string, birthDate: Date) {
        this._name = name;
        this._birthDate = birthDate;
        this.validatePerson();
    } 

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this.validateName(value);
        this._name = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    static getAge(date: Date): number {
        const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
      }

    private validateName(name: string ):void {
        if (name.length < 3) {
            throw new Error('nome deve ter no minimo 3 caracteres')
        }
    }

    private validateBirthdate(date: Date): void {
        if (date.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
          }
          if (Person.getAge(date) > 120) {
            throw new Error(`A pessoa deve ter no máximo ${120} anos.`);
          }
          
    }

    set birthDate(value: Date) {
        this.validateBirthdate(value);
        this._birthDate = value
    }

    private validatePerson(): void {
        this.validateName(this.name);
        this.validateBirthdate(this.birthDate);
    }
}
