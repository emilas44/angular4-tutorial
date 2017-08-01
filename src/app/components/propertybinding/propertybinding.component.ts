import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
    <h1>Property Binding</h1>
    <!-- 3 ways to bind properties -->
    
    <div><img src="{{imageUrl}}"></div>
    
    <div><img [src]="imageUrl"></div>
    
    <div><img bind-src="imageUrl"></div>
    
    <h4>Image Location: <span [textContent]="imageUrl"></span></h4>
    
    <hr>
    
    <h2>Create Post</h2>
    <p [hidden]="isUnchanged"> Post has been changed, please save.</p>
    <button [disabled]="isUnchanged">Save</button>
  `
})
export class PropertybindingComponent implements OnInit {

  imageUrl = 'http://lorempixel.com/400/300';
  isUnchanged:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
