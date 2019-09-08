import {ChoiceObj} from './choice';
import { QuizObj } from './quiz';

export class QuestionObj{
    quiz:QuizObj;
    questionId:number;
    questionDesc:string;
    answerId:ChoiceObj;
    choices:ChoiceObj[];
}