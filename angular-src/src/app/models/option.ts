export class Option {
    id: number;
    questionId: number;
    name: string;
    text: any;
    title: string;
    colA: string;
    colB: string;
    title1: string;
    isAnswer: boolean;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.text = data.any;
        this.isAnswer = data.isAnswer;
        this.title = data.title;
        this.title1 = data.title1;
        this.colA = data.colA;
        this.colB = data.colB;
    }
}
