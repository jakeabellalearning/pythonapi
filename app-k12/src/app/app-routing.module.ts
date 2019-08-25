import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { LevelComponent } from './level/level.component';


const routes: Routes = [  
  { path: '', redirectTo:'',pathMatch:'full'},
  { path: 'level/:id', component: LevelComponent },
  { path: 'level/subject/:id', component: SubjectComponent },
  { path: 'level/subject/:id/quarter/:qid', component: SubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
