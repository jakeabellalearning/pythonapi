import { QuarterObj } from './quarter';
import { QuestionObj } from './question';

export class QuizObj{
    quarter:QuarterObj
    quizId:number;
    quizDesc:string;
    questions:QuestionObj[];
}