import { Option } from './option';

export class Question {
    id: number;
    name: string;
    title: string;
    title1: string;
    colA: string;
    colB: string;
    text: any;
    questionTypeId: number;
    options: Option[];
    answered: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.title = data.title;
        this.title1 = data.title1;
        this.colA = data.colA;
        this.colB = data.colB;
        this.text = data.any;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}
