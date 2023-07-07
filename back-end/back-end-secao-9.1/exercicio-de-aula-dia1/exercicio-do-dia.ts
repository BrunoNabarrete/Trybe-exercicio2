class Studant {
    matricula: string;
    nome: string;
    nota: number[];
    trabalho: number[];

    constructor(m:string, nome: string, n: number[], t: number[]) {
        this.matricula = m;
        this.nome = nome;
        this.nota = n;
        this.trabalho = t;
    }

    get mat():string {
        return this.matricula;
    }

    set mat(value:string) {
        this.matricula = value;
    }

    get name():string {
        return this.nome
    }

    set name(value:string) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres')
        }
        this.nome = value;
    }

    get examsGrade():number[] {
        return this.nota
    }

    set examsGrade(value: number[]) {
        if (value.length > 4) {
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        }

        this.nota = value
    }

    get work():number[] {
        return this.trabalho;
    }

    set work(value: number[]) {
        if (value.length > 2) {
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalho')
        }
    }
    somaNota():number {
        return [...this.nota, ...this.trabalho].reduce((acc, curr) => {
            const nextNote = curr + acc;

            return nextNote;
        }, 0) 
    }

    somaMedia(): number {
        const sumGrades = this.somaNota();
        const divider = this.examsGrade.length + this.work.length;

        return Math.round(sumGrades / divider)
    }
}