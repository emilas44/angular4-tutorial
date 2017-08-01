import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgifandngswitchComponent } from './components/ngifandngswitch/ngifandngswitch.component';
import { PropertybindingComponent } from './components/propertybinding/propertybinding.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { NgforLoopComponent } from './components/ngfor-loop/ngfor-loop.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { MouseeventsComponent } from './components/mouseevents/mouseevents.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifandngswitchComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    NgforLoopComponent,
    PipesComponent,
    MouseeventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
