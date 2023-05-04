class Estudante {
    private _matricula: number;
    private _nome: string;
    private _notaProva: number[];
    private _notaTrabalho: number[];

    constructor(m: number, n: string, nP: number[], nT: number[]) {
        this._matricula = m;
        this._nome = n;
        this._notaProva = nP;
        this._notaTrabalho = nT;
    }

    get matricula() {
        return this._matricula;
    }

    set matricula(value: number) {
        this._matricula = value;
    }

    get name() {
        return this._nome;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.')
        }

        this._nome = value;
    }

    get notaProva() {
        return this._notaProva
    }

    set notaProva(value: number[]) {
        if (value.length < 4) {
            throw new Error('A pessoa estudante deve conter no mínimo 4 notas de prova')
        }
        this._notaProva = value
    }

    get notaTrabalho() {
        return this._notaTrabalho
    }

    set notaTrabalho(value: number[]) {
        if (value.length > 2) {
            throw new Error('A pessoa estudante deve conter no mínimo 2 notas de trabalho')
        }
        this._notaTrabalho = value;
    }

    somaNota():number {
        return [...this._notaProva, ...this._notaTrabalho].reduce((previousNote, note) => {
            const nextNote = note + previousNote;

            return nextNote
        }, 0);
    }

    medNota(): number {
        const somaNota = this.somaNota()
        const divisor = this._notaProva.length + this._notaTrabalho.length

        return (somaNota / divisor)
    }
}