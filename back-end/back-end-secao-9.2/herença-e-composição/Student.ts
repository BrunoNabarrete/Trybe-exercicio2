import Person from "./exerciciododia";

export default class Student extends Person {
    private _enrollment: string;
    private _examsGrades: number[] = [];
    private _assingmentsGrade: number[] = [];
    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment()
    }

    set enrollment(value: string ) {
        if (value.length < 16) throw new Error('matricula deve  possuir 16')

        this._enrollment = value;
    }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    set examsGrades(value: number[]) {
        if ( value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas')

        this._examsGrades = value;
    }

    get assingmentsGrades(): number[] {
        return this._assingmentsGrade;
    }

    set assingmentsGrades(value: number[]) {
        if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhs.');

        this._assingmentsGrade = value;
    }

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    
        return `STU${randomStr}`;
      }
    
}