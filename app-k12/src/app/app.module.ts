import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
   MatToolbarModule,MatExpansionModule, MatInputModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material'
import {MatRadioModule} from '@angular/material';
import { SubjectComponent } from './subject/subject.component';
import { LevelComponent } from './level/level.component'
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { SubjectmenuComponent } from './subjectmenu/subjectmenu.component';
import { TopicpageComponent } from './topicpage/topicpage.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component'; 
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    LevelComponent,
    MenuComponent,
    SubjectmenuComponent,
    TopicpageComponent,
    QuizComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    NgMaterialMultilevelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
