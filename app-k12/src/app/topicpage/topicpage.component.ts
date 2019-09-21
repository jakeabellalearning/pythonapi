import { Component, OnInit,Input } from '@angular/core';
import { SubjectObj } from '../models/subject';
import { ActivatedRoute } from '@angular/router';
import {K12serviceService} from '../shared/k12service.service'
import { TopicObj } from '../models/topic';
import { QuizObj } from '../models/quiz';
@Component({
  selector: 'app-topicpage',
  templateUrl: './topicpage.component.html',
  styleUrls: ['./topicpage.component.css']
})
export class TopicpageComponent implements OnInit {
  @Input() subj:SubjectObj;
  topicId:string;
  levelId:string;
  subjectId:string;
  quarterId:string;
  topic:TopicObj;
  quizObj:QuizObj;
  constructor(private router : ActivatedRoute,private commonService : K12serviceService ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.levelId=params.get("lvl");
      this.subjectId=params.get("subj");
      this.topicId=params.get("topic_id");
      this.quarterId=params.get("period");
    });
    this.commonService.getQuizForTopic(this.subjectId,this.quarterId,this.topicId).subscribe(
      res=>this.quizObj = res
    );
  }

}
