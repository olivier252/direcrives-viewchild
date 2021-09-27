import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Car {
  marque: string;
  model: string;
}

export class Person {
      constructor(
        public id: number,
        public name?: number
      ) {}
}

/* export class Person {
  id: number;
  name: number;

  constructor(id:number, name?: number) {
    this.id = id;
    this.name = name;
  }
} */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  credentials = { login: ''};

  @ViewChild('loginInput') private loginInput: ElementRef<HTMLInputElement>

}