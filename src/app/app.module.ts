import { UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ChildComponent } from './components/child/child.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { RvLibModule } from 'rv-lib';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChildComponent,
    ContentProjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RvLibModule,
    UpperCasePipe,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
