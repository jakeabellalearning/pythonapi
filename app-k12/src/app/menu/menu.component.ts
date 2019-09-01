import { Component, OnInit,Input } from '@angular/core';
import { LevelObj } from '../models/level';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() levelObj:LevelObj;
  @Input() parentSideNav:any;
  constructor() { }

  ngOnInit() {
  }

}
