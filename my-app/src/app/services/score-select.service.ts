import { Injectable } from '@angular/core';

import { ExamService } from './exam.service';

@Injectable()
export class ScoreSelectService {
  apExamSelected: boolean = false;
  ibHighExamSelected: boolean = false;
  ibStandardExamSelected: boolean = false;
  satExamSelected: boolean = false;

  constructor(
    private _exam: ExamService) { }

  public apClicked(event) {
    this.reset();
    this.apExamSelected = true;
    this._exam.createNewExam(event.srcElement.attributes.id.nodeValue, "AP");
  }

  public ibHighClicked(event) {
    this.reset();
    this.ibHighExamSelected = true;
    this._exam.createNewExam(event.srcElement.attributes.id.nodeValue, "IB-High");
  }

  public ibStandardClicked(event) {
    this.reset();
    this.ibStandardExamSelected = true;
    this._exam.createNewExam(event.srcElement.attributes.id.nodeValue, "IB-Standard");
  }

  public satClicked(event) {
    this.reset();
    this.satExamSelected = true;
    this._exam.createNewExam(event.srcElement.attributes.id.nodeValue, "SAT");
  }

  public scoreClicked(event) {
    this._exam.addSelectedScore(event.srcElement.attributes.id.nodeValue);
    this.reset();
  }

  public satScoreClicked(score: number) {
    this._exam.addSelectedScore(score);
    this.reset();
  }

  public reset() {
    this.apExamSelected = false;
    this.ibHighExamSelected = false;
    this.ibStandardExamSelected = false;
    this.satExamSelected = false;
  }
}
