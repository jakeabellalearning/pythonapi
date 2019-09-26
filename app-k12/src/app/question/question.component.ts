import { Component, OnInit,Input } from '@angular/core';
import {QuestionObj} from '../models/question';
import { ChoiceObj } from '../models/choice';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() questionObj:QuestionObj;
  selection:ChoiceObj;
  constructor() { 
  }
  ngOnInit() {
    this.questionObj.answerId = new ChoiceObj();
 
  }

}
