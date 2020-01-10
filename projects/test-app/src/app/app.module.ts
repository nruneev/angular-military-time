import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StopwatchModule} from "../../../angular-military-clock/src/stopwatch";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        StopwatchModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
