import {ChoiceObj} from './choice';

export class QuestionObj{
    questionId:number;
    questionDesc:string;
    answerId:ChoiceObj;
    choices:ChoiceObj[];
}