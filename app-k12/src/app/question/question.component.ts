import { Component, OnInit,Input } from '@angular/core';
import {QuestionObj} from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() questionObj:QuestionObj;

  constructor() { }

  ngOnInit() {
  }

}
