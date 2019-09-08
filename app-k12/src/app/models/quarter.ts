import { TopicObj } from './topic';
import { SubjectObj } from './subject';

export class QuarterObj
{
    subject:SubjectObj;
    quarterId:number;
    quarterDesc:string;
    topics:TopicObj[];    
}