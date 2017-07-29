import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { APComponent } from './components/ap/ap.component';
import { IBComponent } from './components/ib/ib.component';
import { SATComponent } from './components/sat/sat.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { ResultsComponent } from './components/results/results.component';

import { ScoreSelectService } from './services/score-select.service';
import { ExamService } from './services/exam.service';
import { ConvertScoreService } from './services/convert-score.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftPanelComponent,
    APComponent,
    IBComponent,
    SATComponent,
    RightPanelComponent,
    ResultsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule
  ],
  providers: [
    ScoreSelectService,
    ExamService,
    ConvertScoreService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
