import {QuarterObj} from '../models/quarter'
import {LevelObj} from '../models/level'

export class SubjectObj{
    level:LevelObj;
    subjectId:number;
    subjectDesc:string;
    quarters:QuarterObj[];
}   