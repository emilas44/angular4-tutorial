import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouseevents',
  template: `
      <h1>Mouse Events</h1>
      <button id="element-id-name" class="btn btn-primary" (click)="clickEvent($event, 'Hello')">Click Event</button>
      <button id="element-id-name" class="btn btn-primary" (mouseover)="mouseOverEvent($event, 'Hi')">Mouse Over Event</button>
  `
})
export class MouseeventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickEvent(e, greeting) {
    console.log('Brutto clicked');
    console.log(greeting)
    console.log(e.clientY);
    console.log(e.clientX);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.type);
  }

  mouseOverEvent(e, greeting) {
    console.log('Mouse is hovered');
  }

}
