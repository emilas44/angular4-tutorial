import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h1>Pipes</h1>
    <p>used for filtering and formating data</p>
    <li>Dates</li>
    <li>uppercase</li>
    <li>lowercase</li>
    
    <p>Birthday: {{ birthday | date}}</p>
    <p>Birthday: {{ birthday | date:"dd.MM.yyyy"}}</p>
    <br>
    <p>I love {{ 'cake' | uppercase}}</p>
    <p>I love {{ 'CAKE' | lowercase}}</p>
    <br>
    <p>Your total is {{ total | currency:"EUR":1 }}</p>
    <p>The Fee was: {{ fee | percent }}</p>
  `
})
export class PipesComponent implements OnInit {

  birthday = new Date(1981, 1, 15);
  total = 500;
  fee = 0.5;

  constructor() { }

  ngOnInit() {
  }

}
