import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { LevelComponent } from './level/level.component';
import { TopicpageComponent } from './topicpage/topicpage.component';


const routes: Routes = [  
  { path: '', redirectTo:'',pathMatch:'full'},
  { path: 'level/:id', component: LevelComponent },
  { path: 'level/:lvl/subject/:subj/period/:period/topic/:topic_id', component: TopicpageComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
