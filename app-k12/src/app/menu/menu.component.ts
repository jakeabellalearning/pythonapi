import { Component, OnInit,Input } from '@angular/core';
import { LevelObj } from '../models/level';
import { MenuModelsObj } from '../models/menumodels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuObjs:MenuModelsObj;
  @Input() parentSideNav:any;
  constructor(public router:Router) { }
  appitems  = new Array<MenuModelsObj>();
 
  selectedItem(evt:MenuModelsObj){
   this.router.navigate([evt.link]);
  }
  ngOnInit() {
    this.appitems.push(this.menuObjs);
  }

}
