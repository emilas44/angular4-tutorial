import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template: `
      <h1>CSS Class Binding & ngClass</h1>
      <h4 [class.special]="isSpecial">This line has class .special</h4>
      <h4 [ngClass]="currentClasses">This line has multiple classes</h4>
  `,
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  isSpecial = true;
  canSave = true;
  currentClasses = {};

  constructor() {
    this.setCurrentClasses();
  }

  ngOnInit() {
  }


  setCurrentClasses() {
    this.currentClasses = {
      saveable: this.canSave,
      special: this.isSpecial
    }
  }

}
