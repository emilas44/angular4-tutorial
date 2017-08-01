import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-loop',
  template: `<h1>*ngFor - The foreach loop</h1>
            <h3>Loop through the array with:</h3><pre>*ngFor="let person of people"</pre>
            
            <ul *ngFor="let person of people">
              <li>{{ person }}</li>
            </ul>
            
            <h3>Loop through the array with index number:</h3><pre>*ngFor="let person of people"</pre>
            
            <ul *ngFor="let person of people; let i = index">
              <li>{{ i+1 }} {{ person }}</li>
            </ul>
            
            <h3>Loop through the array of Objects with:</h3><pre>*ngFor="let person of people2"</pre>
            
            <ul *ngFor="let person of people2">
              <li>{{ person.firstName }} {{ person.lastName }}</li>
            </ul>
  `
})

export class NgforLoopComponent implements OnInit {

  people:string[] = ['Rick', 'Daryl', 'Carl', 'Glen'];
  people2 = [
    {
      firstName: 'Elvis',
      lastName: 'Milas'
    },
    {
      firstName: 'Thomas',
      lastName: 'Wende'
    }
  ];


  constructor() { }

  ngOnInit() {
  }
}
