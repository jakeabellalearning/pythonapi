import { Component, OnInit,Input } from '@angular/core';
import { TopicObj } from '../models/topic';
import { ActivatedRoute } from '@angular/router';
import {K12serviceService} from '../shared/k12service.service';
import {QuizObj} from '../models/quiz';
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

  quizId:string;

  constructor(private router : ActivatedRoute,private commonService : K12serviceService ) { }

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

}
