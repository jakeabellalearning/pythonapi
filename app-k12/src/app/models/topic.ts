import {QuizObj} from '../models/quiz'
import { QuarterObj } from './quarter';
export class TopicObj{
    quarter:QuarterObj
    topicId:number;
    topicDesc:string;
    quizes:QuizObj[];
}