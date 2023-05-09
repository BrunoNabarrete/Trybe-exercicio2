abstract class Character {
    constructor(public name: string) {}

    abstract talk(): void;
    abstract specialMove(): void;

    static characterPresentation(character: Character): void {
        character.talk();
        character.specialMove();
    }
}

class MeleeCharacter extends Character {
    constructor(public name: string, private _specialMoveName: string) {
        super(name);
    }

    talk(): void {
        console.log(`Hi, I'm ${this.name}. I Attack at close range`)
    }

    specialMove(): void {
        console.log(`${this.name} used ${this._specialMoveName}!`);
    }
}

class LongRangeCharacter extends Character {
    constructor(public name: string, private _specialMoveName: string) {
        super(name);
    }

    talk(): void {
        console.log(`Hi, im ${this.name}. I Attack at long range`)
    }

    specialMove(): void {
        console.log(`${this.name} used ${this._specialMoveName}`)
    }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super Dragon')
const samus = new LongRangeCharacter('Samus', 'Zero laser');

yoshi.specialMove();
yoshi.talk()

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);