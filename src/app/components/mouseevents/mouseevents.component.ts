import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouseevents',
  template: `
      <h1>Mouse Events</h1>
      <button id="element-id-name" class="btn btn-primary" (click)="fireEvent($event)">Click Event</button>
      <button id="element-id-name" class="btn btn-primary" (mouseover)="fireEvent($event)">Mouse Over Event</button>
      <button id="element-id-name" class="btn btn-primary" (mousedown)="fireEvent($event)">Mouse Down Event</button>
      <button id="element-id-name" class="btn btn-primary" (mouseup)="fireEvent($event)">Mouse Up Event</button>
      <button id="element-id-name" class="btn btn-primary" (dblclick)="fireEvent($event)">Mouse Double Click</button>
      <hr>
      <img src="http://lorempixel.com/50/50" id="element-id-name" class="btn btn-primary" (drag)="dragEvent($event)"/>
      <img src="http://lorempixel.com/50/50" id="element-id-name" class="btn btn-primary" (dragover)="dragOverEvent($event)"/>
      <h1>Changing properties on event</h1>
      <button (click)="changeValue()">Change Value</button><span><p>{{ text }}</p></span>
  `
})
export class MouseeventsComponent implements OnInit {

  text:string = 'Hello World';

  constructor() { }

  ngOnInit() {
  }

  fireEvent(e) {
    //console.log(greeting);
    //console.log(e.clientY);
    //console.log(e.clientX);
    //console.log(e.target.id);
    //console.log(e.target.className);
    console.log(e.type);
  }

  dragEvent(e) {
    console.log(e.type);
  }

  dragOverEvent(e) {
    console.log(e.type);
  }

  changeValue() {
    this.text = 'Hello World is Changed!'
  }

}
