import { Component } from '@angular/core';

export class Exam {
  private name: string;
  private score: number;
  private type: string;
  private index: number;
  private translatedCourse: string = null;
  private translatedHours: number = null;
  private exceptionArray: string[] = [];

  constructor() { }

  public getName(): string {
    return this.name;
  }

  public getScore(): number {
    return this.score;
  }

  public getType(): string {
    return this.type;
  }

  public getIndex(): number {
    return this.index;
  }

  public getTranslatedCourse(): string {
    return this.translatedCourse;
  }

  public getTranslatedHours(): number {
    return this.translatedHours;
  }

  public getExceptionArray(): string[] {
    return this.exceptionArray;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setScore(score:number) {
    this.score = score;
  }

  public setType(type: string) {
    this.type = type;
  }

  public setIndex(index: number) {
    this.index = index;
  }

  public setTranslatedCourse(translatedCourse: string) {
    this.translatedCourse = translatedCourse;
  }

  public setTranslatedHours(translatedHours: number) {
    this.translatedHours = translatedHours;
  }

  public setExceptionArray(exceptionArray: string[]) {
    this.exceptionArray = exceptionArray;
  }
}
