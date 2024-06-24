import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { IxModule } from '@siemens/ix-angular';
import ApplicationExample from '../preview-examples/application';

const declarations = [ApplicationExample, AppComponent];

@NgModule({
  declarations: declarations,
  imports: [BrowserModule, AppRoutingModule, IxModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
