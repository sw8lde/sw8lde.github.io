import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdToolbarModule
} from '@angular/material';
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";
import { SwFadeScrollDirective } from './sw-fade-scroll.directive';
import { SwWindowRefService } from './sw-window-ref.service';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    SwFadeScrollDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule
  ],
  providers: [ SwWindowRefService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
