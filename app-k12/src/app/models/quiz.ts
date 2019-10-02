import { QuarterObj } from './quarter';
import { QuestionObj } from './question';
import { TestResult } from './score';

export class QuizObj{
    quarter:QuarterObj
    quizId:number;
    quizDesc:string;
    questions:QuestionObj[];
    testResult:TestResult;
}