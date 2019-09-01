import { Component } from '@angular/core';
import { K12serviceService } from './shared/k12service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'K12 - eLearning';
  serviceResult:any;

  constructor(private commonService : K12serviceService) { }

  ngOnInit(){
    this.commonService.getMenuForLoggedIn(1).subscribe(
      res=>this.serviceResult= res
    )
  }
}
