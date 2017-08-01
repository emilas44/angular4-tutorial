import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifandngswitch',
  template: `
      <h1>ngIf & ngSwitch</h1>

      <h3>*ngIf</h3>
      <p>Hello <span *ngIf="showName">{{name}}</span></p>
      <p>Hello <span *ngIf="!showName">{{name}}</span></p>
      
      <h3>*ngIf else</h3>
      <p>Hello <span *ngIf="showName; else
      noName">{{name}}</span></p>
      <ng-template #noName>World</ng-template>
      
      <p>Hello {{ showName ? name : 'World' }}</p>
      
      
      
      
      <h3>ngSwitch</h3>
      <div [ngSwitch]="greeting">
        <div *ngSwitchCase="'1'">Hello World</div>
        <div *ngSwitchCase="'2'">Hello Second</div>
        <div *ngSwitchCase="'3'">Hello Third</div>
        <div *ngSwitchCase="'4'">Hello Fourth</div>
        <div *ngSwitchDefault>Default</div>
      </div>

  `
})
export class NgifandngswitchComponent implements OnInit {

  name:string = 'John Angular';
  showName:boolean = false;
  greeting:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
