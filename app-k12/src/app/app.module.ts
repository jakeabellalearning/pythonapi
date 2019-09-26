import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MAT_DIALOG_DEFAULT_OPTIONS,} from '@angular/material';
import {MatGridListModule,MatCardModule, 
  MatButtonModule, MatSelectModule,MatToolbarModule,
   MatFormFieldModule,MatTableModule,MatListModule,
   MatSnackBarModule,MatIconModule,MatSidenavModule, 
   MatGridTile,MatProgressSpinnerModule,MatExpansionModule,
   MatNativeDateModule } from '@angular/material';
import {MatDialogRef,MatDialog,MatDialogModule,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SubjectComponent } from './subject/subject.component';
import { LevelComponent } from './level/level.component'
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { SubjectmenuComponent } from './subjectmenu/subjectmenu.component';
import { TopicpageComponent } from './topicpage/topicpage.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component'; 
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { QuizverifyComponent } from './quizverify/quizverify.component';
import { MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    LevelComponent,
    MenuComponent,
    SubjectmenuComponent,
    TopicpageComponent,
    QuizComponent,
    QuestionComponent,
    QuizverifyComponent
  ],
  entryComponents:[
    QuizverifyComponent
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
    NgMaterialMultilevelMenuModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
