import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, of,throwError} from 'rxjs';
import { LevelObj} from '../models/level'
import { SubjectObj } from '../models/subject';
import { QuarterObj } from '../models/quarter';
import { TopicObj } from '../models/topic';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class K12serviceService {
  constructor(private http: HttpClient) { }
  getMenuForLoggedIn(levelId:number) : Observable<LevelObj>{
    var levelObj:LevelObj = new LevelObj();
    //Level
    levelObj.levelid = 1;
    levelObj.levelDesc = "Primary One";
    levelObj.subjects = new Array<SubjectObj>();
    //Subject
    var subjObj:SubjectObj = new SubjectObj();
    subjObj.subjectId = 1;
    subjObj.subjectDesc = "Mathematics";
    subjObj.quarters = new Array<QuarterObj>();

    //Quarter Object
    var quarterObj:QuarterObj = new QuarterObj();
    quarterObj.quarterId = 1;
    quarterObj.quarterDesc = "First";
    quarterObj.topics = new Array<TopicObj>();
    // Topic Object
    var topicObj:TopicObj = new TopicObj();
    topicObj.topicId = 1;
    topicObj.topicDesc="Roman Numerals";

    var topicObj2:TopicObj = new TopicObj();
    topicObj2.topicId = 2;
    topicObj2.topicDesc = ">,<,=,<>";

    quarterObj.topics.push(topicObj);
    quarterObj.topics.push(topicObj2);
    subjObj.quarters.push(quarterObj);
    levelObj.subjects.push(subjObj);

    return of(levelObj);
  }
}
