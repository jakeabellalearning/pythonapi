import { Component, OnInit,Inject} from '@angular/core';
import { QuizObj } from '../models/quiz';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { K12serviceService } from '../shared/k12service.service';
import { TestResult } from '../models/score';

export interface DialogData {
  quizObj:QuizObj;
}

@Component({
  selector: 'app-quizverify',
  templateUrl: './quizverify.component.html',
  styleUrls: ['./quizverify.component.css']
})
export class QuizverifyComponent implements OnInit {
  dataObj:QuizObj;
  result:string;
  constructor( public dialogRef: MatDialogRef<QuizverifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private commonService : K12serviceService) { 
     
    }

  ngOnInit() {
    this.dataObj = this.data.quizObj
  }
  submitAnswers(){
    this.commonService.submitAnswerForQuiz(this.dataObj).subscribe(
      res=>this.process()
    );
  }
  process(){
    var res = new TestResult();
    res.itemCount = 10;
    res.scored = 5
    this.dataObj.testResult = res;
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
