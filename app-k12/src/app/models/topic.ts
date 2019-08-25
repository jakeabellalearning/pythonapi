import {QuizObj} from '../models/quiz'
export class TopicObj{
    topicId:number;
    topicDesc:string;
    quizes:QuizObj[];
}