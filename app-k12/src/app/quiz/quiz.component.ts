import { Component, OnInit,Input } from '@angular/core';
import { TopicObj } from '../models/topic';
import { ActivatedRoute } from '@angular/router';
import {K12serviceService} from '../shared/k12service.service';
import {QuizObj} from '../models/quiz';
import {QuizverifyComponent} from '../quizverify/quizverify.component';
import {MatDialog} from '@angular/material';
import { ChoiceObj } from '../models/choice';
import { TestResult } from '../models/score';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() topic:TopicObj;
  topicId:string;
  levelId:string;
  subjectId:string;
  quarterId:string;
  quizObj:QuizObj;
  isBusy:boolean;
  quizId:string;
  result:string;
  testResult:TestResult;

  constructor(private router : ActivatedRoute,private commonService : K12serviceService,public dialog: MatDialog ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.levelId=params.get("lvl");
      this.subjectId=params.get("subj");
      this.topicId=params.get("topic_id");
      this.quarterId=params.get("period");
      this.quizId=params.get("quiz_id");
    
    });
    this.commonService.getQuizForTopic(this.subjectId,this.quarterId,this.topicId).subscribe(
      res=>this.quizObj = res
    );
  }
  submitAnswers(qobj:QuizObj){
    this.isBusy = true;

      const dialogRef = this.dialog.open(QuizverifyComponent, {
        width: '500px',
        data: {quizObj:qobj}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.animal = result;
      });
      
  }
  restartQuiz(qobj:QuizObj){
    qobj.questions.forEach(function(val){
      val.answerId = new ChoiceObj();
      
    })
    qobj.testResult=undefined
  }
}
