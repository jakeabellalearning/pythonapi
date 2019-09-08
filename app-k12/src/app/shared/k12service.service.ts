import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, of,throwError} from 'rxjs';
import { LevelObj} from '../models/level'
import { SubjectObj } from '../models/subject';
import { QuarterObj } from '../models/quarter';
import { TopicObj } from '../models/topic';
import { QuizObj } from '../models/quiz';
import { QuestionObj } from '../models/question';
import { ChoiceObj } from '../models/choice';

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
  getQuizForTopic(subjectId:string,periodId:string,topicId:string) : Observable<TopicObj>{
    var subjectObj = new SubjectObj();
    subjectObj.subjectId = 1;//(subjectId) check how to cast an string into Int.
    subjectObj.subjectDesc = "Mathematics";
    
    var quarterObj = new QuarterObj();
    quarterObj.subject = subjectObj;
    quarterObj.quarterId = 1;//(quarterId) check how to cast a string into int

    var topicObj = new TopicObj();
    topicObj.quarter = quarterObj;
    topicObj.topicId = 1;//(topicId) check how to  cast a string into int
    topicObj.topicDesc = "Roman Numerals";
    topicObj.quizes = new Array<QuizObj>();
    var quizObj = new QuizObj();
    quizObj.quizId = 101;
    quizObj.quizDesc = "First Quiz";
    quizObj.questions = new Array<QuestionObj>();
    quizObj.questions.push(this.mockQuestionObj(quizObj,1,"what is the numeric value of the roman Numeral XII"));
    quizObj.questions.push(this.mockQuestionObj(quizObj,1,"what is the numeric value of the roman Numeral X"));
    topicObj.quizes.push(quizObj);
    
    return of(topicObj);
  }
  mockQuestionObj(quizObj:QuizObj,questionId:number,questionDesc:string):QuestionObj{
    var question1 = new QuestionObj();
    question1.questionId = 1;
    question1.questionDesc = "What is the numeric value of the  Roman Numeral XII ";
    question1.quiz = quizObj;
    question1.answerId = q1choice4;
    question1.choices = new Array<ChoiceObj>();
    var q1choice1 = new ChoiceObj();
    q1choice1.choiceId = 1;
    q1choice1.choiceDesc = "5";
    q1choice1.question = question1;
    
    var q1choice2 = new ChoiceObj();
    q1choice2.choiceId = 2;
    q1choice2.choiceDesc = "12";
    q1choice2.question = question1;
    

    var q1choice3 = new ChoiceObj();
    q1choice3.choiceId = 3;
    q1choice3.choiceDesc = "23";
    q1choice3.question = question1;
    

    var q1choice4 = new ChoiceObj();
    q1choice4.choiceId = 4;
    q1choice4.choiceDesc = "32";
    q1choice4.question = question1;
    
    question1.choices.push(q1choice1,q1choice2,q1choice3,q1choice4);
    question1.answerId = q1choice2;
   // quizObj.questions.push(question1);
    return question1;
  }
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
