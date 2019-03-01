import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycommonlibModule } from 'mycommonlib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MycommonlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
