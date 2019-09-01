import { Component, OnInit,Input } from '@angular/core';
import { SubjectObj } from '../models/subject';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  @Input() subj:SubjectObj;
  topicId:string;
  levelId:string;
  subjectId:string;
  constructor(private router:ActivatedRoute) {

   }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.levelId=params.get("lvl");
      this.subjectId=params.get("subj");
      this.topicId=params.get("topic_id");
    });

  }

}
